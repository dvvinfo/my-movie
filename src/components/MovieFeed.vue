<template>
  <div class=" mt-6">
    <Carousel :items-to-show="3.5">
      <Slide v-for="movie in movies" :key="movie.id">
        <movie-card v-bind:="movie" />
      </Slide>
    </Carousel>
  </div>
</template>

<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { movies } from '../mocks/movie'
import { Carousel, Slide } from 'vue3-carousel'
import MovieCard from './MovieCard.vue'
</script>

<style >
.carousel__viewport{
    @apply pl-4
}
</style>
