<template>
    <section>
        <aside class="left">
            <div class="icon">
                <FundTwoTone twoToneColor="#eb2f96" :style="{ fontSize: '35px' }" />
            </div>
            <div class="title">
                建材智慧工厂生产看板
            </div>
        </aside>

        <aside class="right">
            <!-- 产量标准 -->
            <div v-for="(item, index) of ClinkerQty" :key="index">
                <StarFilled :style="{ color: item.color, fontSize: '13px' }" />
                <div class="data">
                    {{ item.content }}
                    <span>{{ content.dailyClinkerQty }}</span>
                    {{ item.unitStandard }}
                </div>
            </div>
            <!-- 时间日期 -->
            <div class="time">
                <li>{{ currentTime }}</li>
                <li>{{ currentDate() }}</li>
            </div>
        </aside>
    </section>
</template>

<script setup>
import axios from 'axios'
import { onMounted, ref, onUnmounted } from 'vue'
import { FundTwoTone, StarFilled } from '@ant-design/icons-vue';
import 'animate.css';
const content = ref([])
const ClinkerQty = ref([
    {
        color: '#fe5a00',
        content: '熟料日出库量',
        unitStandard: 'T'
    },
    {
        color: '#fe5a00',
        content: '熟料月出库量',
        unitStandard: 'T'
    },
    {
        color: '#fff',
        content: '单位标准',
        unitStandard: 'kg/T'
    },
])
const currentTime = ref(new Date());
let timerId


/**
 * 初始化函数
 */
async function init() {
    axios.get('/mock/clinkerQty').then(res => {
        content.value = res.data
    })
}

/**
 * 获取当前日期
 */
function currentDate() {
    // 创建一个 Date 对象实例
    var currentDate = new Date();

    // 获取当前的年、月、日
    var year = currentDate.getFullYear();
    var month = currentDate.getMonth() + 1; // 注意月份是从 0 开始计数的，所以需要加 1
    var day = currentDate.getDate();

    // 格式化日期字符串，例如：2024-01-16
    var formattedDate = year + '-' + (month < 10 ? '0' + month : month) + '-' + (day < 10 ? '0' + day : day);

    return formattedDate
}

/**
 * 获取当前时间
 */
function startTimer() {
    timerId = setInterval(() => {
        const currentDate = new Date();
        const Time = currentDate.toLocaleTimeString('zh-CN', { hour12: false });
        currentTime.value = Time;
    }, 1000);
}

/**
 * 组件销毁时清除计时
 */
function stopTimer() {
    clearInterval(timerId);
}

onMounted(() => {
    init()
    startTimer()
})
onUnmounted(stopTimer);

</script>

<style lang="scss" scoped>
section {
    display: flex;
    justify-content: space-between;
    height: 50px;
    background: linear-gradient(to bottom, #142437, #121b28);

    aside {
        height: 100%;
        display: flex;
        align-items: center;
    }

    .left {
        .icon {
            animation: flash;
            animation-duration: 5s;
            animation-iteration-count: infinite;
            margin: 0 10px;
        }

        .title {
            font-size: 25px;
            color: #fff;
        }
    }

    .right {
        div {
            display: flex;
            width: 161px;
            color: #fff;
        }

        .data {
            font-size: 10px;
            margin-left: 8px;

            span {
                font-size: 14px;
                color: #cde9fe;
                letter-spacing: 2px;
                position: relative;
                top: -5px;
            }
        }

        .time {
            list-style-type: none;
            display: flex;
            flex-direction: column;
            align-items: center;
            color: #cde9fe;
            font-size: 12px;
            width: 70px;
            margin-right: 30px;

            li:first-child {

                font-size: 18px;
            }
        }
    }
}
</style>