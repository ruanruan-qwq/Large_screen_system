<!-- 
    左边 --- 三班生产情况
 -->
<template>
    <section class="production_situation">
        <!-- 三班生产情况 -->
        <header>
            <h1>三班生产情况</h1>
            <span>Production of the third shitf</span>
        </header>
        <main>
            <!-- 设备运转率 -->
            <nav class="equipment_operation_rate">
                <h1>三班设备运转率</h1>
                <div>
                    <ul>
                        <li v-for="(item, index) of equipmentOperationRate" :key="index">
                            {{ item.equipment }} {{ item.name }} {{ item.number }}
                        </li>
                    </ul>
                </div>
            </nav>
            <section class="capacity_list">
                <!-- 三班产能 -->
                <div class="yield">
                    <div>
                        <div class="title">
                            <h1>白班</h1>
                            <span>Day shift</span>
                        </div>
                        <ul>
                            <li v-for="(item, index) of thirdShiftCapacity[0]" :key="index">
                                {{ item.name }} <br>
                                <span>{{ item.number }} {{ item.unitStandard }}</span> <br>
                                +{{ item.up }}
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div class="title">
                            <h1>中班</h1>
                            <span>Middle shift</span>
                        </div>
                        <ul>
                            <li v-for="(item, index) of thirdShiftCapacity[1]" :key="index">
                                {{ item.name }} <br>
                                <span>{{ item.number }} {{ item.unitStandard }}</span> <br>
                                +{{ item.up }}
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div class="title">
                            <h1>晚班</h1>
                            <span>Nights shift</span>
                        </div>
                        <ul>
                            <li v-for="(item, index) of thirdShiftCapacity[2]" :key="index">
                                {{ item.name }} <br>
                                <span>{{ item.number }} {{ item.unitStandard }}</span> <br>
                                +{{ item.up }}
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- 产能柱状图 -->
                <div class="bar_chart">
                    <div>
                        <h1>三班比率</h1>
                        <span>Day shift</span>
                    </div>
                    <v-chart class="chart" :option="option" />
                </div>
            </section>
        </main>
    </section>
</template>

<script setup>
import axios from 'axios'
import { ref, onMounted, computed } from 'vue'
import VChart, { THEME_KEY } from "vue-echarts";

const equipmentOperationRate = ref([]) // 设备运转率
const thirdShiftCapacity = ref([]) // 三班产能
const ratio = ref([]) // 柱状图比率

/**
 * 初始化函数
 */
function init() {
    axios.get('/mock/productionSituation').then(res => {
        equipmentOperationRate.value = res.data
    })
    axios.get('/mock/thirdShiftCapacity').then(res => {
        thirdShiftCapacity.value = res.data
    })
    axios.get('/mock/ratio').then(res => {
        ratio.value = res.data
        // console.log(ratio.value.map(item => item.name))
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
                color: '#ccc', // x 轴标签字体颜色
                fontSize: 12 // x 轴标签字体大小
            }
        },
        yAxis: {
            type: 'category',
            data: ratio.value.map(item => item.name),
            axisLabel: {
                color: '#ccc', // x 轴标签字体颜色
                fontSize: 12 // x 轴标签字体大小
            }
        },
        series: [
            {
                data: ratio.value.map(item => item.number),
                type: 'bar',
                barWidth: 5, // 设置柱形宽度为 10
                itemStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 0,
                        colorStops: [
                            {
                                offset: 0,
                                color: '#2b4c6f' // 第一种颜色
                            },
                            {
                                offset: 0.5,
                                color: '#4992c7' // 第二种颜色
                            },
                            {
                                offset: 1,
                                color: '#4baada' // 第三种颜色
                            }
                        ]
                    }
                }
            }
        ]
    }
})

onMounted(() => {
    init()
})
</script>

<style scoped lang="scss">
.production_situation {
    width: 540px;
    background-color: #14202d;
    color: #ccc;
    border-right: 10px solid #000;

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

    main {
        display: flex;

        .equipment_operation_rate {
            width: 230px;

            h1 {
                margin: 10px;
            }

            div {
                overflow: hidden;
                height: 382px;
                margin-left: 10px;

                ul {
                    margin: 10px;
                    list-style-type: none;
                    margin: 0;
                    padding: 0;
                    font-size: 14px;
                    line-height: 28px;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    animation: moveUp 4s infinite forwards;
                }
            }
        }

        .capacity_list {
            width: 300px;

            .yield {
                margin: 10px;

                div {



                    .title {
                        display: flex;
                        align-items: center;

                        h1 {
                            margin: 10px 10px 10px 0;
                        }

                        span {
                            font-size: 10px;
                        }
                    }

                    ul {
                        list-style-type: none;
                        margin: 0;
                        padding: 0;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;


                        li {
                            background-color: #142437;
                            // margin: 0 10px;
                            font-size: 12px;
                            padding: 10px;
                            color: #a3d3fe;

                            span {
                                font-size: 16px;
                                font-weight: 600;
                                margin: 5px 0;
                            }
                        }
                    }
                }
            }

            .bar_chart {
                div {
                    display: flex;

                    h1 {
                        margin-right: 10px;
                    }
                }

                .chart {
                    width: 310px;
                    height: 200px;
                    margin-top: -55px;
                }
            }
        }
    }
}
</style>