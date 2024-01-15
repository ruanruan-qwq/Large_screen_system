<template>
    <div>111</div>
    <ul>
        <li v-for="data, index of content.value" :key="index">
            data
        </li>
    </ul>
</template>

<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'

const content = ref([])

async function init() {
    axios.get('/mock/clinkerQty').then(res => {
        content.value = res.data
    })
}

onMounted(() => {
    init()
})

console.log(content.value)

</script>