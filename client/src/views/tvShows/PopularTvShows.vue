<template>
    <Content :title="title" :type="type" :results="results" />
</template>
<script>
import Content from '@/components/Content.vue'

import getTvShows from '@/composables/tvShows/getTvShows.js'

export default {
    name: 'PopularMovies',
    components: { Content },
    setup() {
        const { data, error, load } = getTvShows('popular')

        load()

        return { title: 'Popular', type: 'tvShows', error, results: data }
    }
}
</script>