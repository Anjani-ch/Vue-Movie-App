<template>
    <div class="carousel-inner">
        <div v-for="(result, index) in results" :key="result.id" :class="[index === 0 ? 'active' : '', 'carousel-item']">
          <img :src="result.backdrop_url" class="w-100" :alt="result.id">

          <div class="carousel-caption mb-3">
            <h1 class="d-inline-block p-3">{{ result.original_title || result.name }}.</h1>
          </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'CarouselItem',
    props: ['results']
}
</script>
<style scoped>
  .carousel-caption h1 { background-color: rgba(0, 0, 0, .7); }

  @media(min-width: 1250px) {
      .carousel-item img { height: 85vh; }
  }
</style>