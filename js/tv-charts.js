// Lightweight Charts™ Example: Legend 3 Lines
// https://tradingview.github.io/lightweight-charts/tutorials/how_to/legends

const chartOptions = {
    layout: {
        textColor: 'white',
        background: { type: 'solid', color: 'transparent' },
    },
};
/** @type {import('lightweight-charts').IChartApi} */
const chart = LightweightCharts.createChart(document.getElementById('chart-container'), chartOptions);

chart.applyOptions({
    rightPriceScale: {
        scaleMargins: {
            top: 0.4, // leave some space for the legend
            bottom: 0.15,
        },
    },
    crosshair: {
        // hide the horizontal crosshair line
        horzLine: {
            visible: false,
            labelVisible: false,
        },
    },
    // hide the grid lines
    grid: {
        vertLines: {
            visible: false,
        },
        horzLines: {
            visible: false,
        },
    },
});

const areaSeries = chart.addAreaSeries({
    topColor: '#2962FF',
    bottomColor: 'rgba(41, 98, 255, 0.28)',
    lineColor: '#2962FF',
    lineWidth: 2,
    crossHairMarkerVisible: false,
});

const data = [
    { time: '2024-09-06', value: 50000 },
    { time: '2024-09-07', value: 50200 },
    { time: '2024-09-08', value: 51000 },
    { time: '2024-09-09', value: 50500 },
    { time: '2024-09-10', value: 51200 },
    { time: '2024-09-11', value: 52000 },
    { time: '2024-09-12', value: 51800 },
    { time: '2024-09-13', value: 52500 },
    { time: '2024-09-14', value: 52200 },
    { time: '2024-09-15', value: 53000 },
    { time: '2024-09-16', value: 53500 },
    { time: '2024-09-17', value: 53000 },
    { time: '2024-09-18', value: 54000 },
    { time: '2024-09-19', value: 53800 },
    { time: '2024-09-20', value: 54500 },
    { time: '2024-09-21', value: 55000 },
    { time: '2024-09-22', value: 54800 },
    { time: '2024-09-23', value: 55500 },
    { time: '2024-09-24', value: 55300 },
    { time: '2024-09-25', value: 56000 },
    { time: '2024-09-26', value: 55800 },
    { time: '2024-09-27', value: 56500 },
    { time: '2024-09-28', value: 56200 },
    { time: '2024-09-29', value: 57000 },
    { time: '2024-09-30', value: 56800 },
    { time: '2024-10-01', value: 57500 },
    { time: '2024-10-02', value: 57300 },
    { time: '2024-10-03', value: 58000 },
    { time: '2024-10-04', value: 57800 },
    { time: '2024-10-05', value: 58000 },
];

areaSeries.setData(data);

const symbolName = 'BTC/USD';

const container = document.getElementById('chart-container');

const legend = document.createElement('div');
legend.style = `position: absolute; left: 12px; top: 12px; z-index: 1; font-size: 14px; font-family: sans-serif; line-height: 12px; font-weight: 300;`;
legend.style.color = 'white';
container.appendChild(legend);

const getLastBar = series => {
    const lastIndex = series.dataByIndex(Number.MAX_SAFE_INTEGER, -1);
    return series.dataByIndex(lastIndex);
};
const formatPrice = price => (Math.round(price * 100) / 100).toFixed(2);
const setTooltipHtml = (name, date, price) => {
    legend.innerHTML = `<div style="font-size: 16px; margin: 4px 0px;">${name}</div><div style="font-size: 14px; margin: 4px 0px;">${price}</div><div>${date}</div>`;
};

const updateLegend = param => {
    const validCrosshairPoint = !(
        param === undefined || param.time === undefined || param.point.x < 0 || param.point.y < 0
    );
    const bar = validCrosshairPoint ? param.seriesData.get(areaSeries) : getLastBar(areaSeries);
    // time is in the same format that you supplied to the setData method,
    // which in this case is YYYY-MM-DD
    const time = bar.time;
    const price = bar.value !== undefined ? bar.value : bar.close;
    const formattedPrice = formatPrice(price);
    setTooltipHtml(symbolName, time, formattedPrice);
};

chart.subscribeCrosshairMove(updateLegend);

updateLegend(undefined);

chart.timeScale().fitContent();