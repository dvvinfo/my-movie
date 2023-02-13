<template>
  <section
    class="bg-movie-black flex h-full min-w-0 flex-col overflow-y-auto pl-5 pr-5"
  >
    <div class="my-4 py-9 flex justify-between">
      <h1 v-if="title" class="text-4xl font-bold text-white">{{ title }}</h1>
      <h1 v-else class="text-4xl font-bold text-white">
        <slot name="title" />
      </h1>
      <div>
        <slot name="header" />
      </div>
    </div>
    <div>
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
import Title from "../../types/title";
defineProps<{
  title?: string
}>()
</script>

<style scoped></style>
