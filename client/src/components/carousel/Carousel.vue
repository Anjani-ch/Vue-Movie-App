<template>
    <div :id="id" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button v-for="(result, index) in results" :key="result.id" type="button" :data-bs-target="'#' + id" :data-bs-slide-to="index" :class="{ 'active': index === 0 }" :aria-current="index === 0" :aria-label="`Slide ${index + 1}`"></button>
      </div>

      <CarouselItems :results="results" />

      <button class="carousel-control-prev" type="button" :data-bs-target="'#' + id" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      
      <button class="carousel-control-next" type="button" :data-bs-target="'#' + id" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
</template>
<script>
import CarouselItems from '@/components/carousel/CarouselItems.vue'

export default {
    name: 'Carousel',
    components: { CarouselItems },
    props: ['id', 'results']
}
</script>