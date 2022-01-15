<template>
    <Content :title="title" :type="type" :results="results" />
</template>
<script>
import Content from '@/components/Content.vue'

import getMovies from '@/composables/movies/getMovies.js'

export default {
    name: 'PopularMovies',
    components: { Content },
    setup() {
        const { data, error, load } = getMovies('upcoming')

        load()

        return { title: 'Upcoming', type: 'movies', error, results: data }
    }
}
</script>