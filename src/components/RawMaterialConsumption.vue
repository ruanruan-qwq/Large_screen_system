<!-- 
    原材料日购进 & 日消耗
    原材料当月消耗
 -->
<template>
    <section>
        <header>
            <div class="title">
                <h1>原材料日购进&消耗</h1>
                <span>Daily purch as e and cons um ption</span>
            </div>
            <ul>
                <li v-for="(item, index) of content" :key="index">
                    <div>
                        <AlignLeftOutlined twoToneColor="#2472e3" />
                        <p class="title_data">{{ item.type }} <br> <span>{{ item.english }}</span></p>
                    </div>
                    <div>
                        <PlusOutlined twoToneColor="#fb5c5c" />
                        <p><span class="data_number">{{ ' ' + item.add }}</span> {{ item.unitStandard }}</p>
                    </div>
                    <div>
                        <MinusOutlined twoToneColor="#0aa6ff" />
                        <p><span class="data_number">{{ item.decrease }}</span> {{ item.unitStandard }}</p>
                    </div>
                </li>
            </ul>
            <div class="data_map">
                <div>
                    <h1>日进购</h1>
                    <v-chart class="chart1" :option="option1" />
                </div>
                <div>
                    <h1>日消耗</h1>
                    <v-chart class="chart2" :option="option2" />
                </div>
            </div>
        </header>

        <footer>
            <div class="footer_title">
                <h1>原材料当月消耗</h1>
                <span>Works hop historioal output</span>
            </div>
            <main>
                <ul>
                    <li v-for="(item, index) of monthlyCost" :key="index">
                        {{ item.value }} {{ item.encoding }} {{ item.number }}
                    </li>
                </ul>
            </main>
        </footer>
    </section>
</template>

<script setup>
import axios from 'axios'
import { ref, onMounted, computed } from 'vue'
import { AlignLeftOutlined, PlusOutlined, MinusOutlined } from '@ant-design/icons-vue';
import VChart, { THEME_KEY } from "vue-echarts";

const content = ref([]) // 原材料日增加 -- 减少数据
const monthlyCost = ref([]) // 原材料月消耗数据
const dailyIncrease = ref([]) // 日增加饼图数据
const dailyDecreasing = ref([]) // 日减少饼图数据
const selectedIndex = ref(0)
let legendCounter = 0

/**
 * 初始化函数
 */
function init() {
    axios.get('/mock/rawMaterialConsumption').then(res => {
        content.value = res.data

        // 日增加
        dailyIncrease.value = content.value.map(item => {
            return { value: item.add, name: item.type }
        })

        // 日减少
        dailyDecreasing.value = content.value.map(item => {
            return { value: item.decrease, name: item.type }
        })
    })

    axios.get('/mock/monthlyCost').then(res => {
        monthlyCost.value = res.data
        // console.log(monthlyCost.value)
    })
}

/**
 * 饼图数据 --- 日增加
 */
const option1 = computed(() => {
    return {
        legend: {
            orient: 'horizontal',
            bottom: 'bottom',
            height: '60%',  //图例容器的高度，超过会换行展示
            icon: 'rect',  //图标样式设置
            itemWidth: 10,   //图标宽设置
            itemHeight: 10,  //图标长设置
            itemGap: 12,  //图标之间的距离,
            textStyle: {	// 设置样式
                color: '#fff'
            }
        },
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: ['60%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: { // 饼图强调状态
                    label: {
                        show: true,
                        formatter: '{d}% \n\n{b}',
                        color: 'white', // 设置文本颜色为白色
                        textBorderColor: 'transparent' // 去除描边效果
                    }
                },
                data: dailyIncrease.value,
                itemStyle: {
                    color: function (params) {
                        // 定义颜色数组
                        var colorList = [
                            '#2472e3', '#3caafe', '#3caafe', '#2fd4fb'
                        ];
                        // 根据name获取对应颜色
                        var index = params.dataIndex;
                        return colorList[index];
                    },
                }
            }
        ]
    }
})

/**
 * 饼图数据 --- 日减少
 */
const option2 = computed(() => {
    return {
        legend: {
            orient: 'horizontal',
            bottom: 'bottom',
            height: '60%',  //图例容器的高度，超过会换行展示
            icon: 'rect',  //图标样式设置
            itemWidth: 10,   //图标宽设置
            itemHeight: 10,  //图标长设置
            itemGap: 12,  //图标之间的距离,
            textStyle: {	// 设置样式
                color: '#fff'
            }
        },
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: ['60%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: { // 饼图强调状态
                    label: {
                        show: true,
                        formatter: '{d}% \n\n{b}',
                        color: 'white', // 设置文本颜色为白色
                        textBorderColor: 'transparent' // 去除描边效果
                    }
                },
                data: dailyDecreasing.value,
                itemStyle: {
                    color: function (params) {
                        // 定义颜色数组
                        var colorList = [
                            '#2472e3', '#3caafe', '#3caafe', '#2fd4fb'
                        ];
                        // 根据name获取对应颜色
                        var index = params.dataIndex;
                        return colorList[index];
                    },
                }
            }
        ]
    }
})

onMounted(() => {
    init()
})

</script>

<!-- <style lang="scss" scoped>
section {
    background-color: #ccc;

    header {
        ul {
            list-style-type: none;

            li {
                display: flex;
                align-items: center;
                justify-content: space-evenly;
            }
        }

        .data_map {
            display: flex;

            .chart1,
            .chart2 {
                width: 150px;
                height: 200px;
            }
        }
    }

    footer {
        main {

            overflow: hidden;

            ul {
                height: 200px;
                animation: moveUp 4s infinite forwards;

                li {
                    line-height: 30px;
                }
            }
        }
    }
}
</style> -->

<style lang="scss" scoped>
section {
    margin: 0 10px;
    background-color: #14202d;
    background-color: #14202d;
    color: #ccc;
    height: 42.3125rem;
    width: 300px;
    border-top: 10px solid #000;

    header {
        border-bottom: 10px solid #000;
        height: 510px;

        .title {
            margin: 10px;

            span {
                font-size: 10px;
                background: #cccccc5d;
                display: block;
                width: 180px;
            }
        }

        ul {
            list-style-type: none;
            margin: 0;
            padding: 0;

            li {
                width: 100%;
                display: flex;
                // justify-content: center;
                // justify-content: space-between;

                div {
                    background-color: #142437;
                    width: 30%;
                    height: 20px;
                    margin: 10px 10px;
                    display: flex;
                    align-items: center;
                    // justify-content: center;
                    justify-content: space-evenly;

                    p {
                        // margin-left: 5px;
                        margin-bottom: 0;
                    }
                }
            }
        }

        .data_map {
            display: flex;
            margin-top: 50px;

            div {
                display: flex;
                flex-direction: column;
                align-items: center;

                h1 {
                    background-color: #3e4957;
                    width: 90%;
                    text-align: center;
                }
            }

            .chart1,
            .chart2 {
                width: 150px;
                height: 200px;
                margin-top: -40px;
            }
        }
    }

    footer {
        height: 355px;
        background-color: #14202d;

        .footer_title {
            margin: 10px;

            span {
                font-size: 10px;
                background: #cccccc5d;
                display: block;
                width: 180px;
            }
        }

        main {
            overflow: hidden;
            height: 290px;

            ul {
                list-style-type: none;
                margin: 0;
                padding: 0;
                font-size: 14px;
                line-height: 28px;
                // display: flex;
                // flex-direction: column;
                // align-items: center;
                margin: 10px;
                animation: moveUp 4s infinite forwards;

            }
        }
    }
}

.data_number {
    color: #a3d3fe;
    font-weight: 600;
    font-size: 16px;
}

.title_data {
    font-size: 12px;

    span {
        font-size: 10px;

    }
}
</style>

<style>
@keyframes moveUp {
    0% {
        transform: translateY(0);
    }

    25% {
        transform: translateY(-25px);
    }

    50% {
        transform: translateY(-55px);
    }

    75% {
        transform: translateY(-90px);
    }

    100% {
        transform: translateY(-125px);
    }
}
</style>