<!-- 
    生产时间 --- 侧边栏
 -->
<template>
    <section class="production_time">
        <header>
            <h1>运转时间</h1>
            <ul>
                <li v-for="(item, index) of data" :key="index">
                    {{ item.name }} {{ item.time }}
                </li>

                <div class="icon">
                    <div>
                        <RightOutlined :style="{ fontSize: '20px' }" />
                    </div>
                    <div>
                        <DownOutlined :style="{ fontSize: '20px' }" />
                    </div>
                </div>
            </ul>
        </header>

        <footer>
            <span>SEC-999</span>
            <ul>
                <li v-for="item in 4">
                    {{ 'IN' + item }}
                </li>
            </ul>
        </footer>
    </section>
</template>
  
<script setup>
import { ref, onMounted, computed } from "vue";
import axios from 'axios'
import { RightOutlined, DownOutlined } from '@ant-design/icons-vue';

const data = ref([])

/**
 * 初始化函数
 */
function init() {
    axios.get('/mock/runningTime').then(res => {
        data.value = res.data
    })
}

/**
 * 柱状图数据
 */
const option = computed(() => {
    return {}
})

onMounted(() => {
    init()
})
</script>

<style lang="scss" scoped>
.production_time {
    border-top: 10px solid #000;
    border-left: 10px solid #000;
    width: 10%;
    // height: 55.3125rem;
    height: 893px;
    background-color: #14202d;
    color: #ccc;

    header {
        h1 {
            font-size: 15px;
            text-align: center;
            margin: 20px 0;
        }

        ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
            margin: 0px 25px;
            background-color: #142437;
            padding: 10px 0;

            li {
                text-align: center;
                background-color: #1a3041;
                border-radius: 10%;
                margin: 0 5px 10px 5px;
            }
        }

        .icon {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 50px;

            div {
                background-color: #1a3041;
                text-align: center;
                width: 25px;
                height: 25px;
                margin-bottom: 10px;
            }
        }
    }

    footer {
        display: flex;
        flex-direction: column;
        align-items: center;

        span {
            font-size: 12px;
        }

        ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
            font-size: 10px;

            li {
                border-top: 1px solid #ccc;
                border-right: 1px solid #ccc;
                border-left: 1px solid #ccc;
                margin-bottom: 5px;
            }
        }
    }
}
</style>