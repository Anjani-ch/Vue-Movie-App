<template>
    <div class="col-lg-3 col-md-6 col-sm-12 my-2">
        <div class="card position-relative h-100">
            <img :src="result.backdrop_url" class="card-img-top d-block w-100" :alt="result.id">
            <span class="position-absolute text-warning top-0 start-0 py-1 px-2 d-inline-block">{{ result.vote_average }}</span>

            <div class="card-body d-flex flex-column">
                <h5 class="card-title">{{ result.original_title || result.name }}</h5>
                <router-link :to="{ name: linkName, params: { id: result.id } }" class="btn btn-dark mt-auto">Details</router-link>
            </div>
        </div>
    </div>
</template>
<script>
import { ref } from 'vue'

export default {
    name: 'Card',
    props: ['result', 'type'],
    setup({ type }) {
        const linkName = ref('')

        switch(type) {
            case 'movies':
                linkName.value = 'SingleMovie'
                break
            case 'tvShows':
                linkName.value = 'SingleTvShow'
                break
        }

        return { linkName }
    }
}
</script>
<style scoped>
span { background-color: rgba(0, 0, 0, .6); }
</style>