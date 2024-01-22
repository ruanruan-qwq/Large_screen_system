<script setup>
import TopBar from './components/topbar.vue'
import SideBar from './components/SideBar.vue'
import RawMaterialConsumption from './components/RawMaterialConsumption.vue'
import ComprehensiveContent from './components/content/ComprehensiveContent.vue'
import RunningTime from './components/RunningTime.vue'
</script>

<template>
  <section class="body">
    <TopBar />
    <main class="main">
      <SideBar />
      <RawMaterialConsumption />
      <ComprehensiveContent />
      <RunningTime />
    </main>
  </section>
</template>

<style scoped>
.body {
  background-color: #000;

}

.main {
  display: flex;
}
</style>
