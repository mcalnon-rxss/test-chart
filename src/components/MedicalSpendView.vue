<template>
    <div>
        <horizontal-bar-chart class="test-chart" :chartData="testChartData" :options="chartOptions" ></horizontal-bar-chart>
    </div>
</template>

<script>
import HorizontalBarChart from "./../HorizontalBarChart.js";
//var moment = require('moment');

export default {  
  components: { HorizontalBarChart },
  props: [],
  data: function() { 
        /*
            Deductible: $200
            OOP Max: $6350
            Total Cost Max: $4020

            Estimated year's total costs (ignoring phase changes)
            Member's pay: $1323.13
            Plan pay: $5842.12
            Total pay: $7165.25

            Estimated pre coverage gap costs (ignoring phase changes)
            Member's pay: $917.84
            Plan pay: $3204.21

            Estimated coverage gap costs (ignoring phase changes)
            Member's pay: $405.29
            Plan pay: $2637.91

            Estimated catastrophic coverage gap costs (ignoring phase changes)
            Member's pay: $0.00
            Plan pay: $0.00
        */
    return {
        testChartData: {
            datasets: [
                {
                    barPercentage: 1,
                    categoryPercentage: 1,
                    data: [ 0, 0 ],
                },
                {
                    barPercentage: 1,
                    categoryPercentage: 1,
                    backgroundColor: ['#6bdbb2', '#b3ffe3'],
                    data: [ 200.00, 0.00 ],
                },
                {
                    barPercentage: 1,
                    categoryPercentage: 1,
                    backgroundColor: ['#000000', '#ffffff'],
                    data: [ 0.00, 200.00 ],
                },
                {
                    barPercentage: 1,
                    categoryPercentage: 1,
                    backgroundColor: ['#fae07a', '#fff0b3'],
                    data: [ 917.84 - 200.00, 3204.21 ],
                },
                {
                    barPercentage: 1,
                    categoryPercentage: 1,
                    backgroundColor: ['#ffffff', '#000000'],
                    data: [ 3204.21 + 200 - 917.84, 0.00 ],
                },
                {
                    barPercentage: 1,
                    categoryPercentage: 1,
                    backgroundColor: ['#f29f36', '#ffc266'],
                    data: [ 405.29, 2637.91 ],
                },
                {
                    barPercentage: 1,
                    categoryPercentage: 1,
                    backgroundColor: ['#ffffff', '#000000'],
                    data: [ 2637.91 - 405.29, 0.00 ],
                },
                {
                    barPercentage: 1,
                    categoryPercentage: 1,
                    backgroundColor: ['#f26196', '#ff99c4'],
                    data: [ 10.00, 500.00 ],
                },
                {
                    barPercentage: 1,
                    categoryPercentage: 1,
                    backgroundColor: ['#ffffff', '#000000'],
                    data: [ 500.00 - 10.00, 0.00 ],
                },/*
                {
                    barPercentage: 1,
                    categoryPercentage: 1,
                    data: [ moment(), moment() ],
                }*/
            ],
            labels: [ 'Patient', 'Plan' ]
        },
        chartOptions: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [ {
                    type: 'linear',
                    display: true,
                    offset: false,
                    ticks: {
                        min: 0,
                        max: 5842.12 + 200.00 + 500,
                        display: false,
                        //source: 'data',
                    },
                    stacked: true,/*
                    gridLines: {
                        offsetGridLines: false,
                        display: true,
                        color: [ 'rgba(0, 0, 0, 0.1)', '#fae07a', '#0080a4', '#f29f36', '#f26196', '#ff99c4' ],
                        drawTicks: true,
                        lineWidth: 2,
                        zeroLineWidth: 2,
                        zeroLineColor: '#6bdbb2',
                        z: 2
                    },*/
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
