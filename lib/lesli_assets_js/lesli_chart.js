/**
 * LesliChart
 *
 * Small wrapper around Chart.js to standardize:
 * - Turbo-safe rendering
 * - Apex-like API
 * - Compact (sparkline) mode
 * - Event emission
 */
class LesliChart {
    /**
     * Render a chart inside a container
     *
     * @param {Object} config
     * @param {String} config.id        DOM id
     * @param {String} config.type      "bar" | "line"
     * @param {Array}  config.series    Apex-style series
     * @param {Array}  config.labels    X-axis labels
     * @param {Boolean} config.compact  Sparkline mode
     */
    constructor(config) {

        // Find the chart container element
        const container = document.getElementById(config.id);

        // If the element does not exist, exit early
        if (!container) return;

        const hasMultipleDatasets = config.datasets.length > 1;

        // Clear any previous chart instance.
        // Important when Turbo re-renders the page.
        container.innerHTML = "";

        // Chart.js requires a <canvas> element to render charts.
        // We dynamically create it so Turbo reloads remain clean.
        const canvas = document.createElement("canvas");

        // Attach the canvas to the container
        container.appendChild(canvas);

        // Get the 2D drawing context from the canvas
        const ctx = canvas.getContext("2d");

        // Main Chart.js configuration object
        const chartConfig = {

            // Chart type: "bar" or "line"
            type: config.type,

            // Chart data definition
            data: {

                // X-axis labels
                labels: config.labels,

                // Series data
                datasets: config.datasets
            },

            // Chart behavior and appearance options
            options: {

                layout: {
                    padding: {
                        top: 20,
                        left: 20,
                        right: 20,
                        bottom: 20
                    }
                },

                // Automatically resize with container
                responsive: true,

                // Allow manual height control via CSS
                maintainAspectRatio: false,

                // Plugin configuration
                plugins: {

                    // Legend configuration
                    legend: {
                        display: hasMultipleDatasets,
                        position: "top",
                        align: "center"
                    },

                    // Tooltip behavior
                    tooltip: {
                        enabled: true
                    }
                },

                // Axis configuration
                scales: {
                    x: {

                        // Show X axis
                        display: true,

                        // X-axis label styling
                        ticks: {
                            maxRotation: 65,
                            font: { size: 15 }
                        },

                        // Hide vertical grid lines
                        grid: { 
                            display: false 
                        }
                    },
                    y: {

                        // Show Y axis
                        display: true,

                        // Hide horizontal grid lines
                        grid: {
                            display: false
                        }
                    }
                },

                // Click handler for points/bars.
                onClick: (event, elements) => {

                    // If nothing was clicked, do nothing
                    if (!elements.length) return;

                    // Get the first clicked element
                    const element = elements[0];

                    // Emit a custom event (Rails / Stimulus / ViewComponent)
                    emit("markerClick", {
                        seriesIndex: element.datasetIndex,
                        dataPointIndex: element.index
                    });
                }
            }
        };

        // Compact (sparkline-style) overrides
        // Used for dashboards, cards, or tight layouts
        if (config.compact) {

            // Hide legend in compact mode
            chartConfig.options.plugins.legend.display = false;

            // Hide axes for sparkline effect
            chartConfig.options.scales.x.display = false;
            chartConfig.options.scales.y.display = false;

            chartConfig.options.layout.padding.top = 8
            chartConfig.options.layout.padding.left = 0
            chartConfig.options.layout.padding.right = 0
            chartConfig.options.layout.padding.bottom = 6
            

            if (config.type === "line") {

                // Adjust padding for better vertical alignment
                chartConfig.options.layout.padding.top = 10
                chartConfig.options.layout.padding.bottom = 6
            }
        }


        // Line chart defaults
        ChartJs.defaults.elements.line.tension = 0.4;
        ChartJs.defaults.elements.line.borderCapStyle = "round";

        // Bar chart defaults
        ChartJs.defaults.elements.bar.borderRadius = 6;
        ChartJs.defaults.elements.bar.borderSkipped = false;

        // Global font defaults
        ChartJs.defaults.font.family = "'Source Sans 3', system-ui, sans-serif";
        ChartJs.defaults.font.size = 14;

        // Global color defaults
        ChartJs.defaults.color = "#4a4a4a";

        // Create and render the Chart.js instance
        new ChartJs(ctx, chartConfig);
    }
};

module.exports = LesliChart
