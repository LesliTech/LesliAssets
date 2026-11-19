const { test, expect } = require("@playwright/test");
const { execFileSync } = require("node:child_process");
const { mkdtempSync, rmSync } = require("node:fs");
const { tmpdir } = require("node:os");
const path = require("node:path");

const root = path.resolve(__dirname, "../..");
let bundles;

test.beforeAll(() => {
    bundles = mkdtempSync(path.join(tmpdir(), "lesli-js-tests-"));
    // Exercise the production recipe without replacing the shipped assets.
    execFileSync("make", ["prod.js", `JS_OUTDIR=${bundles}`], { cwd: root });
});

test.afterAll(() => rmSync(bundles, { recursive: true, force: true }));

function documentFor(body, calendar = false) {
    return `<!doctype html><html><head>
        <script defer src="/application.js" data-turbo-track="reload"></script>
        ${calendar ? '<link rel="stylesheet" href="/calendar.css"><script defer src="/calendar.js"></script>' : ""}
        <style>
            [x-cloak] { display: none !important; }
            lesli-calendar { display: block; }
        </style>
        </head><body>${body}</body></html>`;
}

const chartPage = documentFor(`
    <h1>Charts</h1>
    <a href="/calendar">Calendar</a>
    <div id="moved"></div>
    <turbo-frame id="chart-frame">
        <a href="/frame">Replace frame</a>
        <div id="chart" style="height: 200px; width: 400px"></div>
    </turbo-frame>
    <script>
        function renderChart() {
            new LesliChart({ id: "chart", type: "bar", labels: ["One"], datasets: [{ data: [10] }] });
        }
        if (document.readyState === "loading") {
            document.addEventListener("turbo:load", renderChart, { once: true });
        } else {
            renderChart();
        }
    </script>
`);

const calendarPage = documentFor(`
    <h1>Calendar</h1>
    <a href="/charts">Charts</a>
    <h2 id="calendar-title"></h2>
    <lesli-calendar id="calendar" data-time-zone="UTC" data-events-url="/events"
        data-title-id="calendar-title" data-event-url="/events/__EVENT_ID__"></lesli-calendar>
    <div x-data="{ open: false }" @calendar-event.window="open = true">
        <section role="dialog" aria-label="Event details" x-show="open" x-cloak>
            <button @click="open = false">Close panel</button>
            <turbo-frame id="calendar-event-detail"></turbo-frame>
        </section>
    </div>
`, true);

test.beforeEach(async ({ page }) => {
    const errors = [];
    page.on("pageerror", error => errors.push(error.message));
    page.testErrors = errors;

    // All documents and data are local fixtures; no Rails server or database is needed.
    await page.route("http://lesli.test/**", async route => {
        const pathname = new URL(route.request().url()).pathname;
        if (["/application.js", "/calendar.js"].includes(pathname)) {
            return route.fulfill({ path: path.join(bundles, pathname.slice(1)), contentType: "text/javascript" });
        }
        if (pathname === "/calendar.css") {
            return route.fulfill({ path: path.join(root, "app/assets/stylesheets/lesli_assets/calendar.css"), contentType: "text/css" });
        }
        if (pathname === "/events") {
            const today = new Date().toISOString().slice(0, 10);
            return route.fulfill({ json: [{
                id: "calendar-1", title: "Regression event", start: today, allDay: true,
                url: "/events/1", extendedProps: { source: "calendar", record_id: 1 }
            }] });
        }
        const pages = {
            "/charts": chartPage,
            "/calendar": calendarPage,
            "/frame": '<turbo-frame id="chart-frame">Frame replaced</turbo-frame>',
            "/events/1": '<turbo-frame id="calendar-event-detail">Regression event details</turbo-frame>'
        };
        await route.fulfill({ status: pages[pathname] ? 200 : 404, contentType: "text/html", body: pages[pathname] || "Not found" });
    });
});

test.afterEach(async ({ page }) => expect(page.testErrors).toEqual([]));

async function expectCharts(page, count) {
    await expect.poll(() => page.evaluate(() => Object.keys(ChartJs.instances).length)).toBe(count);
    expect(await page.evaluate(() => Object.values(ChartJs.instances).filter(chart => !chart.canvas.isConnected).length)).toBe(0);
}

test("replacing a chart destroys its previous instance and markerClick bubbles", async ({ page }) => {
    await page.goto("http://lesli.test/charts");
    await expectCharts(page, 1);
    expect(await page.evaluate(() => {
        const previous = ChartJs.getChart(document.querySelector("canvas"));
        renderChart();
        return previous.canvas === null;
    })).toBe(true);
    await expectCharts(page, 1);

    // Invoke Chart.js' callback deterministically, without depending on animation pixels.
    const result = await page.evaluate(() => {
        const events = [];
        document.body.addEventListener("markerClick", event => events.push(event.detail));
        const chart = ChartJs.getChart(document.querySelector("canvas"));
        chart.options.onClick({}, []);
        chart.options.onClick({}, [{ datasetIndex: 2, index: 3 }]);
        return events;
    });
    expect(result).toEqual([{ seriesIndex: 2, dataPointIndex: 3 }]);
});

test("replacing a Turbo Frame releases its chart", async ({ page }) => {
    await page.goto("http://lesli.test/charts");
    await expectCharts(page, 1);
    await page.getByRole("link", { name: "Replace frame" }).click();
    await expect(page.getByText("Frame replaced")).toBeVisible();
    await expectCharts(page, 0);
});

for (const action of ["remove", "update", "replace"]) {
    test(`Turbo Stream ${action} releases its chart`, async ({ page }) => {
        await page.goto("http://lesli.test/charts");
        await expectCharts(page, 1);
        await page.evaluate(action => Turbo.renderStreamMessage(
            `<turbo-stream action="${action}" target="chart-frame"><template>Replaced</template></turbo-stream>`
        ), action);
        await expectCharts(page, 0);
    });
}

test("moving a canvas preserves it and unrelated charts are not destroyed", async ({ page }) => {
    await page.goto("http://lesli.test/charts");
    await expectCharts(page, 1);
    expect(await page.evaluate(async () => {
        const canvas = document.querySelector("canvas");
        const original = ChartJs.getChart(canvas);
        const otherCanvas = document.createElement("canvas");
        document.body.append(otherCanvas);
        const other = new ChartJs(otherCanvas, { type: "bar", data: { datasets: [] } });
        document.getElementById("moved").append(canvas);
        otherCanvas.remove();
        await new Promise(resolve => setTimeout(resolve, 0));
        const preserved = ChartJs.getChart(canvas) === original && ChartJs.getChart(otherCanvas) === other;
        other.destroy();
        return preserved;
    })).toBe(true);
    await expectCharts(page, 1);
});

for (const initialPage of ["/calendar", "/charts"]) {
    test(`minified bundles coexist from ${initialPage} and after repeated Turbo visits`, async ({ page }) => {
        await page.goto(`http://lesli.test${initialPage}`);
        await page.evaluate(() => { window.originalAlpine = Alpine; });
        if (initialPage === "/charts") await page.getByRole("link", { name: "Calendar", exact: true }).click();

        for (let visit = 0; visit < 3; visit++) {
            await page.getByRole("link", { name: "Regression event", exact: true }).click();
            await expect(page.getByRole("dialog", { name: "Event details" })).toBeVisible();
            await expect(page.getByText("Regression event details", { exact: true })).toBeVisible();
            await page.getByRole("button", { name: "Close panel" }).click();
            await expect(page.getByRole("dialog")).toBeHidden();
            await page.getByRole("link", { name: "Charts", exact: true }).click();
            await expectCharts(page, 1);
            await page.goBack();
            await expect(page.getByRole("heading", { name: "Calendar", exact: true })).toBeVisible();
            await expectCharts(page, 0);
        }
        expect(await page.evaluate(() => Alpine === window.originalAlpine)).toBe(true);
    });
}
