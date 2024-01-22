<script setup>

import ProductionSituation from './ProductionSituation.vue'
import ProcessRelationship from './ProcessRelationship.vue'
import ProductionConsumption from './ProductionConsumption.vue'


</script>


<template>
    <section class="assembly">
        <header>
            <div>
                <ProductionSituation></ProductionSituation>
            </div>
            <div>
                <ProcessRelationship></ProcessRelationship>
            </div>
        </header>
        <footer>
            <ProductionConsumption></ProductionConsumption>
        </footer>
    </section>
</template>



<style scoped lang="scss">
.assembly {
    display: flex;
    flex-direction: column;

    header {
        height: 520px;
        overflow: hidden;
        display: flex;

    }
}
</style>