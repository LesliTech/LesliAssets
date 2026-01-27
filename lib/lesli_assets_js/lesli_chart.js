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

        const datasets = config.series.map(serie => ({

            // Dataset label (used in legend and tooltips)
            label: serie.name,

            // Actual data values
            data: serie.data,

            // Smooth curves for line charts (0 = straight lines)
            tension: config.type === "line" ? 0.4 : 0,

            // Rounded corners for bar charts
            borderRadius: config.type === "bar" ? 6 : 0,

            // Prevent bars from being clipped
            borderSkipped: false,

            // Disable area fill (line charts only show the line)
            fill: false
        }));

        // Main Chart.js configuration object
        const chartConfig = {

            // Chart type: "bar" or "line"
            type: config.type,

            // Chart data definition
            data: {

                // X-axis labels
                labels: config.labels,

                // Series data
                datasets: datasets
            },

            // Chart behavior and appearance options
            options: {

                // Automatically resize with container
                responsive: true,

                // Allow manual height control via CSS
                maintainAspectRatio: false,

                // Plugin configuration
                plugins: {

                    // Legend configuration
                    legend: {
                        display: true,
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
                            minRotation: 65,
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

            if (config.type === "line") {

                // Adjust padding for better vertical alignment
                chartConfig.options.layout = {
                    padding: { top: 14, right: 0, bottom: 6, left: 0 }
                };
            }
        }

        // Create and render the Chart.js instance
        new ChartJs(ctx, chartConfig);
    }
};

module.exports = LesliChart
