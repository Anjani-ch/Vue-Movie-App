<template>
    <div class="row">
        <Card v-for="result in results" :key="result.id" :result="result" :type="type" />
    </div>
</template>
<script>
import Card from '@/components/cards/Card.vue'

export default {
    name: 'Cards',
    components: { Card },
    props: ['results', 'type']
}
</script>
<style>
    
</style>