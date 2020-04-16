import {HorizontalBar, mixins} from 'vue-chartjs'
    
const { reactiveProp } = mixins;

export default {
    extends: HorizontalBar,
    mixins: [reactiveProp],
    
    props: ['options'],
    watch: {
        'options': {
            handler() {
                if (this.$data._chart) {
                    this.$data._chart.destroy();
                }
                this.renderChart(this.chartData, this.options)
            },
            deep: true
        }
    },
    mounted () {
        // this.chartData is created in the mixin.
        // If you want to pass options please create a local options object
        this.renderChart(this.chartData, this.options)
    }
}
