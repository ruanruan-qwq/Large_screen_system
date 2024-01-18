<template>
    <section>
        <header>
            <div class="title">
                <h1>车间日产量</h1>
                <span>Daily production</span>
            </div>

            <v-chart class="chart" :option="option" />

            <ol>
                <li v-for="(item, index) of title" :key="index">
                    <div :style="{ 'animation-delay': `${index * 0.2}s` }">{{ item }}</div>
                    <div :style="{ 'animation-delay': `${index * 0.2}s` }">{{ item }}</div>
                </li>
            </ol>
        </header>

        <footer>
            <div class="historical-data">
                <h1>车间历史产量</h1>
                <span>Works hop his torioal output</span>
            </div>
            <div>
                <ul>
                    <li v-for="(item, index) of historicalData" :key="index">
                        <PieChartTwoTone :style="{ fontSize: '13px' }" />
                        {{ item.year }} - <span>{{ item.value }}</span> - {{ item.unitStandard }}
                    </li>
                </ul>
            </div>
        </footer>
    </section>
</template>
  
<script setup>
import { ref, onMounted, computed } from "vue";
import axios from 'axios'
import "echarts";
import VChart, { THEME_KEY } from "vue-echarts";
import { PieChartTwoTone } from '@ant-design/icons-vue';

const content = ref([])
const historicalData = ref([])

/**
 * 获取标题名
 */
const title = computed(() => {
    const arr = content.value.sort((a, b) => {
        return a.value - b.value;
    });
    return arr.map(a => a.name)
})

/**
 * 初始化函数
 */
function init() {
    axios.get('/mock/dailyClinkerQty').then(res => {
        content.value = res.data
    })
    axios.get('/mock/historicalData').then(res => {
        historicalData.value = res.data.sort((a, b) => {
            return b.value - a.value;
        })
    })
}

/**
 * 柱状图数据
 */
const option = computed(() => {
    return {
        xAxis: {
            type: 'value',
            axisLabel: {
                show: false // 隐藏 x 轴的数字标识
            },
            splitLine: {
                show: false, // 隐藏 x 轴的竖线分段
            }

        },
        yAxis: {
            type: 'category',
            inverse: true, // 反转 y 轴，使数字 1 从最上方开始
            data: content.value.map(a => a.name),
            axisTick: {
                show: false // 隐藏 x 轴的刻度线
            },
            axisLabel: {
                show: false, // 显示 y 轴的数字标识
            },
            axisLine: {
                show: false // 隐藏 y 轴的竖线
            }
        },
        series: [
            {
                data: content.value.map(a => a.value).sort((a, b) => b - a),
                type: 'bar',
                barWidth: 5, // 设置柱形宽度为 10
                label: {
                    // show: true,
                    // position: "insideRight", // 在柱形内部右侧显示数值标签
                },
            }
        ],
    }
})

onMounted(() => {
    init()
})
</script>

<style lang="scss" scoped>
section {
    width: 150px;
    height: 815px;
    background-color: #14202d;
    color: #fff;
    // overflow: hidden;

    .title {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        span {
            font-size: 12px;
        }
    }

    .chart {
        height: 760px;
        width: 100%;
        position: relative;
        top: -25px;
    }

    ol {
        position: absolute;
        top: 125px;
        left: -13px;
        line-height: 42px;
        font-size: 12px;

        li {
            animation: rotate 3s infinite forwards;
            animation-delay: 5s;
            display: flex;
            position: relative;
            height: 42px;
            width: 120px;
            overflow: hidden;

            div {
                position: absolute;
                top: 0;
                left: 0;
                color: #767c85;

                &:first-child {
                    animation: slideInRight 4s infinite;
                    // left: 40px;
                    left: 0px;
                    // opacity: 0;
                }

                &:last-child {
                    animation: slideOutLeft 4s infinite;
                    left: -50px;
                }
            }
        }
    }

    footer {
        color: #fff;
        background-color: #14202d;
        margin-top: -100px;

        .historical-data {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            span {
                font-size: 10px;
            }
        }

        ul {
            list-style-type: none;
            padding: 0;
            margin-top: 10px;
            font-size: 12px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            span {
                font-size: 18px;
                font-weight: 600;
            }
        }
    }
}
</style>

<style>
@keyframes rotate {
    0% {
        transform: rotate3d(1, 0, 0, 0deg);
    }

    33% {
        transform: rotate3d(1, 0, 0, 360deg);
    }

    100% {
        transform: rotate3d(1, 0, 0, 360deg);
    }
}
</style>