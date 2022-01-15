<template>
    <div class="container py-5 d-flex flex-lg-row flex-column" v-if="result">
        <img class="me-5" :src="result.poster_url" :alt="result.id">

        <div class="ms-4 mt-lg-0 mt-3">
            <h1>{{ result.original_title || result.name }}</h1>
            <p class="fst-italic">{{ result.tagline }}</p>

            <h4 v-if="result.overview" class="mt-4">Overview</h4>
            <p class="fw-bold">{{ result.overview }}</p>

            <h5 class="mt-4">General</h5>
            <p class="fw-bold">Release: {{ result.release_date || result.first_air_date }}</p>
            <p class="fw-bold">Status: {{ result.status }}</p>
            <p v-if="result.runtime" class="fw-bold">Runtime: {{ result.runtime }}</p>
            
            <p v-if="result.budget" class="fw-bold">Budget: {{ result.budget }}</p>
            <p v-if="result.revenue" class="fw-bold">Revenue: {{ result.revenue }}</p>

            <p class="fw-bold">Vote Count: {{ result.vote_count }}</p>
            <p class="fw-bold">Vote Average: {{ result.vote_average }}</p>
            
            <h5 class="mt-4">Genres</h5>
            <span class="fw-bold" v-for="(genre, index) in result.genres" :key="genre.id">{{ index === 0 ? genre.name : `, ${genre.name}` }}</span>

            <h5 class="mt-4">Production Companies</h5>
            <ul class="p-0 fw-bold"><li v-for="company in result.production_companies" :key="company.id">{{ company.name }}</li></ul>

            <h5 class="mt-4">Production Contries</h5>
            <ul class="p-0 fw-bold"><li v-for="country in result.production_countries" :key="country.name">{{ country.name }}</li></ul>


        </div>
    </div>
</template>
<script>
import { useRoute } from 'vue-router'

import getMovie from '@/composables/movies/getMovie.js'
import getTvShow from '@/composables/tvShows/getTvShow.js'

export default {
    name: 'Details',
    setup() {
        const route = useRoute()

        const id = route.params.id

        let result

        if (route.path.includes('movies')) result = getMovie(id)
        else if (route.path.includes('tv-shows')) result = getTvShow(id)

        result.load()

        return { result: result.data }
    }
}
</script>
<style scoped>
    .container > img {
        width: 40%;
        border-radius: 20px;
    }

    ul { list-style: none; }

    .row img { width: 100%; }

    @media (max-width: 990px) {
        .container > img { width: 100%; }

        /* .container > div :first-child {  } */
    }
</style>