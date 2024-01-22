<template>
    <section class="expend">
        <header>
            <h1>生产单位电耗&煤耗</h1>
            <span>Unit power cons umption</span>
        </header>
        <footer>
            <v-chart class="chart" :option="option" />
        </footer>
    </section>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import axios from 'axios'
import VChart, { THEME_KEY } from "vue-echarts";

const powerConsumption = ref([])
const coalConsumption = ref([])
const date = ref([])

function init() {

    axios.get('/mock/powerConsumption').then(res => {
        powerConsumption.value = res.data.map(item => item.expend)
        date.value = res.data.map(item => item.date)
    })

    axios.get('/mock/coalConsumption').then(res => {
        coalConsumption.value = res.data.map(item => item.expend)
    })
}

/**
 * 柱状图数据
 */
const option = computed(() => {
    return {
        legend: {
            top: 'top',
            right: 'right',
            data: [{
                name: '电耗 (kwh)',
                icon: 'circle' // 设置圆圈图标
            },
            {
                name: '煤耗 (kg)',
                icon: 'circle' // 设置圆圈图标
            }]
        },
        xAxis: {
            type: 'category',
            data: date.value,
            axisLine: {
                show: false // 取消x轴线条显示
            },
            splitLine: {
                show: true, // x轴刻度线显示
                lineStyle: {
                    type: 'dashed'
                }
            }
        },
        yAxis: {
            type: 'value',
            axisLine: {
                show: false // 取消x轴线条显示
            },
            splitLine: {
                show: true, // x轴刻度线显示
                lineStyle: {
                    type: 'dashed'
                }
            },
        },
        series: [
            {
                name: '电耗 (kwh)',
                data: powerConsumption.value,
                type: 'line',
                smooth: true,
                symbol: 'none', // 不显示数据点的符号
                markArea: {}
            },
            {
                name: '煤耗 (kg)',
                data: coalConsumption.value,
                type: 'line',
                smooth: true,
                symbol: 'none', // 不显示数据点的符号
                color: 'red',
                lineStyle: {
                    type: 'dashed'
                }
            }
        ]
    };
})

onMounted(() => {
    init()
})
</script>

<style scoped lang="scss">
.expend {
    width: 939px;
    background-color: #14202d;
    color: #ccc;

    header {
        border-top: 10px solid #000;
        border-bottom: 10px solid #000;
        padding: 10px;

        span {
            font-size: 10px;
            background: #cccccc5d;
            display: block;
            width: 180px;
        }
    }

    footer {
        .chart {
            height: 300px;
            width: 100%;
        }
    }
}
</style>