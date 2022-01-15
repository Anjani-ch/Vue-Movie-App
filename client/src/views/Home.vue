<template>
  <div v-if="carouselMovies && showcaseMovies && showcaseTvShows">
    <Carousel id="homeCarousel" :results="carouselMovies" />
    <Content title="Popular Movies" :results="showcaseMovies" type="movies" />
    <Content title="Popular TV Shows" :results="showcaseTvShows" type="tvShows" />
  </div>
</template>

<script>
import Content from '@/components/Content.vue'
import Carousel from '@/components/carousel/Carousel.vue'

import getMovies from '@/composables/movies/getMovies.js'
import getTvShows from '@/composables/tvShows/getTvShows.js'

export default {
  name: 'Home',
  components: { Carousel, Content },
  setup() {
      const carousel = getMovies('popular', 5)
      const movieShowcase = getMovies('popular', 4)
      const tvShowShowcase = getTvShows('popular', 4)

      carousel.load()
      movieShowcase.load()
      tvShowShowcase.load()

      return {
        carouselMovies: carousel.data,
        carouselError: carousel.error,
        showcaseMovies: movieShowcase.data,
        movieShowcaseError: movieShowcase.error,
        showcaseTvShows: tvShowShowcase.data,
        tvShowShowcaseError: tvShowShowcase.error
      }
  }
}
</script>
