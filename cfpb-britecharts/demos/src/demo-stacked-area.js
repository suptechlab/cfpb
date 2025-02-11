'use strict';

const d3Selection = require('d3-selection');
const PubSub = require('pubsub-js');

const stackedAreaChart = require('./../../src/charts/stacked-area');
const colors = require('./../../src/charts/helpers/color');
const tooltip = require('./../../src/charts/tooltip');

const stackedDataBuilder = require('./../../test/fixtures/stackedAreaDataBuilder');
const colorSelectorHelper = require('./helpers/colorSelector');
let redrawCharts;

require('./helpers/resizeHelper');

const aTestDataSet = () => new stackedDataBuilder.StackedAreaDataBuilder();

const uniq = (arrArg) => arrArg.filter((elem, pos, arr) => arr.indexOf(elem) === pos);

function createStackedAreaChartWithTooltip(optionalColorSchema) {
    let stackedArea = stackedAreaChart(),
        chartTooltip = tooltip(),
        container = d3Selection.select('.js-stacked-area-chart-tooltip-container'),
        containerWidth = container.node() ? container.node().getBoundingClientRect().width : false,
        tooltipContainer,
        dataset;

    if (containerWidth) {
        dataset = aTestDataSet().with6Sources().build();

        let margin = {
                top: 70,
                right: 30,
                bottom: 60,
                left: 70
            };
        // StackedAreChart Setup and start
        stackedArea
            .isAnimated(true)
            .margin(margin)
            .tooltipThreshold(600)
            .height(564)
            .width(1175)
            .dateLabel('dateUTC')
            .valueLabel('views')
            .grid('horizontal')
            .on('customDataEntryClick', function(d, mousePosition) {
                // eslint-disable-next-line no-console
                console.log('Data entry marker clicked', d, mousePosition);
            })
            .on('customMouseOver', chartTooltip.show)
            .on('customMouseMove', function(dataPoint, topicColorMap, dataPointXPosition) {
                chartTooltip.update(dataPoint, topicColorMap, dataPointXPosition);
            })
            .on('customMouseOut', chartTooltip.hide);

        if (optionalColorSchema) {
            stackedArea.colorSchema(optionalColorSchema);
        }

        container.datum(dataset.data).call(stackedArea);

        // Tooltip Setup and start
        chartTooltip
            .topicLabel('values')
            .title('Testing tooltip');

        // Note that if the viewport width is less than the tooltipThreshold value,
        // this container won't exist, and the tooltip won't show up
        tooltipContainer = d3Selection.select('.js-stacked-area-chart-tooltip-container .metadata-group .vertical-marker-container');
        tooltipContainer.datum([]).call(chartTooltip);

        d3Selection.select('#button').on('click', function() {
            stackedArea.exportChart('stacked-area.png', 'Britecharts Stacked Area');
        });
    }
}

function createStackedAreaChartExport(optionalColorSchema) {
    let stackedArea = stackedAreaChart(),
        container = d3Selection.select('.js-stacked-area-chart-export-container'),
        containerWidth = container.node() ? container.node().getBoundingClientRect().width : false,
        dataset;

    if (containerWidth) {
        dataset = aTestDataSet().with6Sources().build();


        // StackedAreChart Setup and start
        stackedArea
            .isAnimated(true)
            .isPrintMode(true)
            .margin( {
                top: 60,
                bottom: 50,
                left: 50,
                right: 60
            } )
            .tooltipThreshold(600)
            .height(564)
            .width(1175)
            .dateLabel('dateUTC')
            .valueLabel('views')
            .grid('horizontal');

        stackedArea.colorSchema(['red', 'blue', 'green', 'yellow', 'purple', 'pink', 'black', 'grey', 'orange']);

        // if (optionalColorSchema) {
        //     stackedArea.colorSchema(optionalColorSchema);
        // }

        container.datum(dataset.data).call(stackedArea);
    }
}


function createStackedAreaChartHidden(optionalColorSchema) {
    let stackedArea = stackedAreaChart(),
        container = d3Selection.select('.js-stacked-area-chart-hidden-val-container'),
        containerWidth = container.node() ? container.node().getBoundingClientRect().width : false,
        dataset;

    if (containerWidth) {
        dataset = aTestDataSet().withHiddenSources().build();
        // StackedAreChart Setup and start
        stackedArea
        .isAnimated(true)
        .isPrintMode(false)
        .margin( {
            top: 60,
            bottom: 50,
            left: 50,
            right: 60
        } )
        .areaOpacity(.5)
        .tooltipThreshold(600)
        .height(564)
        .width(1175)
        .dateLabel('dateUTC')
        .valueLabel('views')
        .grid('horizontal');

        stackedArea.colorSchema(['red', 'blue', 'green', 'yellow', 'purple', 'pink', 'black', 'grey', 'orange']);

        // if (optionalColorSchema) {
        //     stackedArea.colorSchema(optionalColorSchema);
        // }

        container.datum(dataset.data).call(stackedArea);
    }
}

function createStackedAreaJumping() {
    let stackedArea = stackedAreaChart(),
        chartTooltip = tooltip(),
        container = d3Selection.select('.js-stacked-area-chart-jumping-container'),
        containerWidth = container.node() ? container.node().getBoundingClientRect().width : false,
        tooltipContainer,
        dataset;

    if (containerWidth) {
        dataset = aTestDataSet().withMassiveSources().build();

        let margin = {
            top: 70,
            right: 30,
            bottom: 60,
            left: 70
        };
        // StackedAreChart Setup and start

        const rowNames = uniq(dataset.data.map(o=>{ return o.name; }));
        const names = rowNames.slice().reverse();
        stackedArea
            .isAnimated(true)
            .areaCurve('linear')
            .topicsOrder(rowNames)
            .margin(margin)
            .tooltipThreshold(600)
            .height(564)
            .width(1175)
            .dateLabel('date')
            .valueLabel('value')
            .grid('horizontal')
            .on('customDataEntryClick', function(d, mousePosition) {
                // eslint-disable-next-line no-console
                console.log('Data entry marker clicked', d, mousePosition);
            })
            .on('customMouseOver', chartTooltip.show)
            .on('customMouseMove', function(dataPoint, topicColorMap, dataPointXPosition) {
                chartTooltip.update(dataPoint, topicColorMap, dataPointXPosition);
            })
            .on('customMouseOut', chartTooltip.hide);
        stackedArea.colorSchema([
            'red',
            'blue',
            'brown',
            'green',
            'yellow',
            'purple',
            'pink',
            'black',
            'grey',
            'orange',
            'teal'
        ]);

        // if (optionalColorSchema) {
        //     stackedArea.colorSchema(optionalColorSchema);
        // }

        container.datum(dataset.data).call(stackedArea);

        chartTooltip
            .topicsOrder(names)
            .topicLabel('values')
            .title('Testing tooltip');

        // Note that if the viewport width is less than the tooltipThreshold value,
        // this container won't exist, and the tooltip won't show up
        tooltipContainer = d3Selection.select('.js-stacked-area-chart-jumping-container .metadata-group .vertical-marker-container');
        tooltipContainer.datum([]).call(chartTooltip);

        d3Selection.select('#button').on('click', function() {
            stackedArea.exportChart('stacked-area.png', 'Britecharts Stacked Area');
        });
    }
}

function createStackedAreaChartWithFixedAspectRatio(optionalColorSchema) {
    let stackedArea = stackedAreaChart(),
        chartTooltip = tooltip(),
        container = d3Selection.select('.js-stacked-area-chart-fixed-container'),
        containerWidth = container.node() ? container.node().getBoundingClientRect().width : false,
        tooltipContainer,
        dataset;

    if (containerWidth) {
        dataset = aTestDataSet().with3Sources().build();

        // StackedAreChart Setup and start
        stackedArea
            .tooltipThreshold(600)
            .aspectRatio(0.5)
            .grid('full')
            .xAxisFormat('custom')
            .xAxisCustomFormat('%Y/%m/%d')
            .xTicks(2)
            .width(containerWidth)
            .dateLabel('date')
            .valueLabel('views')
            .on('customMouseOver', chartTooltip.show)
            .on('customMouseMove', chartTooltip.update)
            .on('customMouseOut', chartTooltip.hide);

        if (optionalColorSchema) {
            stackedArea.colorSchema(optionalColorSchema);
        }

        container.datum(dataset.data).call(stackedArea);

        // Tooltip Setup and start
        chartTooltip
            .topicLabel('values')
            .title('Tooltip Title');

        // Note that if the viewport width is less than the tooltipThreshold value,
        // this container won't exist, and the tooltip won't show up
        tooltipContainer = d3Selection.select('.js-stacked-area-chart-fixed-container .metadata-group .vertical-marker-container');
        tooltipContainer.datum([]).call(chartTooltip);
    }
}

function createStackedAreaChartWithSyncedTooltip() {
    let stackedArea = stackedAreaChart(),
        chartTooltip = tooltip(),
        container = d3Selection.select('.js-stacked-area-chart-tooltip-bis-container'),
        containerWidth = container.node() ? container.node().getBoundingClientRect().width : false,
        tooltipContainer,
        dataset;

    if (containerWidth) {
        dataset = aTestDataSet().withSalesChannelData().build();

        // StackedAreChart Setup and start
        stackedArea
            .isAnimated(true)
            .tooltipThreshold(600)
            .width(containerWidth)
            .grid('horizontal')
            .topicsOrder([
                'Other',
                'Sunny',
                'Blazing',
                'Glittering',
                'Flashing',
                'Shining'
            ])
            .on('customMouseOver', chartTooltip.show)
            .on('customMouseMove', chartTooltip.update)
            .on('customMouseOut', chartTooltip.hide);

        container.datum(dataset.data).call(stackedArea);

        // Tooltip Setup and start
        chartTooltip
            .topicsOrder([
                'Other',
                'Sunny',
                'Blazing',
                'Glittering',
                'Flashing',
                'Shining'
            ])
            .topicLabel('values')
            .title('Testing tooltip')
            .topicsOrder(uniq(dataset.data.map((d) => d.name)));

        // Note that if the viewport width is less than the tooltipThreshold value,
        // this container won't exist, and the tooltip won't show up
        tooltipContainer = d3Selection.select('.js-stacked-area-chart-tooltip-bis-container .metadata-group .vertical-marker-container');
        tooltipContainer.datum([]).call(chartTooltip);
    }
}

function createLoadingState() {
    let stackedArea = stackedAreaChart(),
        stackedAreaContainer = d3Selection.select('.js-loading-container'),
        containerWidth = stackedAreaContainer.node() ? stackedAreaContainer.node().getBoundingClientRect().width : false,
        dataset = null;

    if (containerWidth) {
        stackedAreaContainer.html(stackedArea.loadingState());
    }
}

if (d3Selection.select('.js-stacked-area-chart-tooltip-container').node()){
    // Chart creation
    createStackedAreaChartExport();
    createStackedAreaChartHidden();
    createStackedAreaChartWithTooltip();
    createStackedAreaJumping();
    createStackedAreaChartWithFixedAspectRatio();
    createStackedAreaChartWithSyncedTooltip();
    createLoadingState();

    // For getting a responsive behavior on our chart,
    // we'll need to listen to the window resize event
    redrawCharts = function(){
        d3Selection.selectAll('.stacked-area').remove();
        createStackedAreaChartExport();
        createStackedAreaChartHidden();
        createStackedAreaChartWithTooltip();
        createStackedAreaJumping();
        createStackedAreaChartWithFixedAspectRatio();
        createStackedAreaChartWithSyncedTooltip();
        createLoadingState();
    };

    // Redraw charts on window resize
    PubSub.subscribe('resize', redrawCharts);

    // Color schema selector
    colorSelectorHelper.createColorSelector('.js-color-selector-container', '.stacked-area', createStackedAreaChartWithTooltip);
}
