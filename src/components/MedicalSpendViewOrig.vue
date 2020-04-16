<template>
    <div>
        <horizontal-bar-chart class="test-chart" :chartData="testChartData" :options="chartOptions" ></horizontal-bar-chart>
    </div>
</template>

<script>
import HorizontalBarChart from "./../HorizontalBarChart.js";
var moment = require('moment');

export default {  
  components: { HorizontalBarChart },
  data: function() { 
    return {
        testChartData: {
            datasets: [
                {
                    barPercentage: 1,
                    categoryPercentage: 1,
                    data: [ moment(new Date(2020, 0, 1)), moment(new Date(2020, 0, 1)) ],
                },
                {
                    barPercentage: 1,
                    categoryPercentage: 1,
                    backgroundColor: ['#6bdbb2', '#b3ffe3'],
                    data: [ moment(new Date(2020, 1, 15)), moment(new Date(2020, 1, 15)) ],
                },
                {
                    barPercentage: 1,
                    categoryPercentage: 1,
                    backgroundColor: ['#fae07a', '#fff0b3'],
                    data: [ moment(new Date(2020, 5, 13)), moment(new Date(2020, 5, 13)) ],
                },
                {
                    barPercentage: 1,
                    categoryPercentage: 1,
                    backgroundColor: ['#f29f36', '#ffc266'],
                    data: [ moment(new Date(2020, 10, 20)), moment(new Date(2020, 10, 20)) ],
                },
                {
                    barPercentage: 1,
                    categoryPercentage: 1,
                    backgroundColor: ['#f26196', '#ff99c4'],
                    data: [ moment(new Date(2020, 11, 31)), moment(new Date(2020, 11, 31)) ],
                },
                {
                    barPercentage: 1,
                    categoryPercentage: 1,
                    data: [ moment(), moment() ],
                }
            ],
            labels: [ 'Patient', 'Plan' ]
        },
        chartOptions: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [ {
                    type: 'time',
                    display: true,
                    offset: false,
                    time: {
                        unit: 'day',
                        distribution: 'linear',
                        displayFormats: { day: 'MMM D' }
                    },
                    ticks: {
                        min: moment().startOf('year'),
                        max: moment().endOf('year'),
                        display: true,
                        source: 'data',
                    },
                    stacked: false,
                    gridLines: {
                        offsetGridLines: false,
                        display: true,
                        color: [ 'rgba(0, 0, 0, 0.1)', '#fae07a', '#0080a4', '#f29f36', '#f26196', '#ff99c4' ],
                        drawTicks: true,
                        lineWidth: 2,
                        zeroLineWidth: 2,
                        zeroLineColor: '#6bdbb2',
                        z: 2
                    },
                } ],
                yAxes: [ {
                    beginAtZero: true,
                    offset: true,
                    gridLines: {
                        display: false,
                        offsetGridLines: false,
                    },
                    stacked: true
                } ]
            },
            legend: { display: false }
        }
    };
  },
}
</script>
<style>
.test-chart{
    height: 100px;
}
</style>
