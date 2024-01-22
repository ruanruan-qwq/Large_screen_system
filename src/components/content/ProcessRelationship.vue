<template>
    <section class="clinker_production_relationship">
        <header>
            <h1>各熟料产品与车间生产工序关系</h1>
            <span>Clinker produots</span>
        </header>
        <footer>
            <div ref="chartContainer" class="chart"></div>
        </footer>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts';

// 读取本地数据文件
// var graph = require('../../assets/test.josn.json');
import graph from '../../assets/test.josn.json'

const chartContainer = ref(null);

onMounted(() => {
    // 初始化echarts实例
    var myChart = echarts.init(chartContainer.value);
    // 定义配置项变量
    var option;



    // 遍历节点数据，设置节点标签属性
    graph.nodes.forEach(function (node) {
        node.label = {
            // show: node.symbolSize > 30
            show: true, // 修改为 true,节点的名称不仅在鼠标悬停时显示，而是始终显示在页面中
            position: 'inside', // 添加 position 属性
            formatter: '{b}', // 可根据需要自定义格式
            textBorderColor: '#fff', // 设置文字描边颜色
            color: '#fff', // 文字颜色
            textBorderWidth: 0, // 设置文字描边宽度
        };
    });

    // 色湖之不同节点的颜色
    graph.nodes.forEach(function (node) {
        if (node.category === 0) {
            node.itemStyle = {
                color: '#fff' // 设置类别为 category1 的节点颜色为红色
            };
        } else if (node.category === 1) {
            node.itemStyle = {
                color: 'blue' // 设置类别为 category2 的节点颜色为绿色
            };
        } else {
            node.itemStyle = {
                color: 'skyblue' // 设置其他类别的节点颜色为蓝色
            };
        }
    });

    // 配置项
    option = {
        // 标题
        title: {
            // text: 'Les Miserables',
            // subtext: 'Circular layout',
            top: 'bottom',
            left: 'right'
        },
        // 提示框
        tooltip: {},
        // 图例
        legend: [
            // {
            //     data: graph.categories.map(function (a) {
            //         return a.name;
            //     })
            // }
        ],
        // 动画效果
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        // 系列
        series: [
            // 单一颜色
            {
                name: 'Les Miserables',
                type: 'graph',
                layout: 'circular',
                circular: {
                    rotateLabel: true
                },
                data: graph.nodes,
                links: graph.links,
                categories: graph.categories,
                roam: true,
                label: {
                    position: 'right',
                    formatter: '{b}'
                },
                lineStyle: {
                    color: '#fff',
                    curveness: 0.3
                }
            }
        ]
    };

    // 应用配置项到echarts实例
    myChart.setOption(option);
})

</script>

<style scoped lang="scss">
.clinker_production_relationship {
    width: 400px;
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
        height: 500px;

        .chart {
            height: 400px;
            width: 400px;
        }

    }
}
</style>