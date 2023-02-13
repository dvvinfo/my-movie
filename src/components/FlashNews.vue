<template>
  <stack>
    <div class="w-full  bg-white rounded-2xl p-6 drop-shadow-md rotate-3">
      <div class="news-top">
        <img
          :src="currentSlide.image"
          alt="flash news poster"
          class="rounded-2xl "
        />
        <h2 class="text-orange mt-2 font-bold text-m">🔥 Not news</h2>
        <p class="mt-2 font-bold">{{ currentSlide.text }}</p>
      </div>
      <div class="news-footer mt-4 flex justify-between">
        <p class="text-gray-400 ">{{ currentSlide.date }}</p>
        <p class="text-gray-900 flex">11/5 <ArrowRightIcon class="w-6 ml-2" /></p>
      </div>
    </div>
  </stack>
</template>

<script setup lang="ts">
import Stack from './Stack.vue'
import { flashNews } from '../mocks/news'
import { ArrowRightIcon } from '@heroicons/vue/24/solid';

const currentSlide = flashNews[0]
</script>

<style scoped></style>
