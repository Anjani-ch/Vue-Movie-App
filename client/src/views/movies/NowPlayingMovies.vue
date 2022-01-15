<template>
    <Content :title="title" :type="type" :results="results" />
</template>
<script>
import Content from '@/components/Content.vue'

import getMovies from '@/composables/movies/getMovies.js'

export default {
    name: 'NowPlayingMovies',
    components: { Content },
    setup() {
        const { data, error, load } = getMovies('now-playing')

        load()

        return { title: 'Now Playing', type: 'movies', error, results: data }
    }
}
</script>