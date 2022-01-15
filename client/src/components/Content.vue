<template>
    <div class="container">
        <h1 class="my-4">{{ title }}</h1>
        <Cards :results="results" :type="type" />
    </div>
</template>
<script>
import Cards from '@/components/cards/Cards.vue'

export default {
    name: 'Content',
    components: { Cards },
    props: ['title', 'results', 'type']
}
</script>
<style>
    
</style>