<template>
  <stack>
    <transition :name="!isBackDirection ? 'slide-fade' : 'slide-fade-reverse'">
    <div v-show="!loading" class="w-full bg-white rounded-2xl p-6 drop-shadow-md rotate-3">
      <div class="news-top">
        <img
          :src="currentSlide.image"
          alt="flash news poster"
          class="rounded-2xl"
        />
        <h2 class="text-orange mt-2 font-bold text-m">🔥 Not news</h2>
        <p class="mt-2 font-bold">{{ currentSlide.text }}</p>
      </div>
      <div class="news-footer mt-4 flex justify-between">
        <p class="text-gray-400">{{ currentSlide.date }}</p>
        <p class="text-gray-900 flex">
          <ArrowLeftIcon
            v-if="currentSlideIndex > 0"
            class="w-6 mr-2 cursor-pointer"
            @click="prevSlide"
          />
          {{ currentSlideIndex + 1 }}/{{ flashNews.length }}
          <ArrowRightIcon
            v-if="!isLastSlide"
            class="w-6 ml-2 cursor-pointer"
            @click="nextSlide"
          />
          <span v-else class="w-6 ml-2 block"></span>
        </p>
      </div>
    </div>
  </transition>
  </stack>
</template>

<script setup lang="ts">
import Stack from './Stack.vue'
import { flashNews } from '../mocks/news'
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/vue/24/solid'
import { ref } from '@vue/reactivity'
import { fleshNews } from '../types/fleshNews'
import { computed } from '@vue/runtime-core'

// Slider
const isBackDirection = ref<boolean>(false)
const currentSlideIndex = ref<number>(0)
const currentSlide = computed(() => flashNews[currentSlideIndex.value])
const isLastSlide = computed(
  () => currentSlideIndex.value >= flashNews.length - 1
)

const nextSlide = () => {
  if (isLastSlide.value) {
    return
  }
  isBackDirection.value = false
  toggleLoading()
  currentSlideIndex.value++
}
const prevSlide = () => {
  if (currentSlideIndex.value === 0) {
    return
  }
  isBackDirection.value = true
  toggleLoading()
  currentSlideIndex.value--
}

// Animation
const loading = ref<boolean>(false)

const toggleLoading = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 300);
}
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s ease;
}
.slide-fade-enter {
  transform: translateX(100px) ;
  opacity: 0;
}
.slide-fade-leave-to {
  transform: translateX(-100px) ;
  opacity: 0;
}


.slide-fade-reverse-enter-active {
  transition: all .3s ease;
}
.slide-fade-reverse-leave-active {
  transition: all .3s ease;
}
.slide-fade-reverse-enter {
  transform: translateX(-100px) ;
  opacity: 0;
}
.slide-fade-reverse-leave-to {
  transform: translateX(100px) ;
  opacity: 0;
}


</style>
