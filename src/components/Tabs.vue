<template>
  <div>
    <nav class="flex space-x-4">
      <a
        class="rounded-md p-5 py-2 text-white drop-shadow-sm hover:bg-orange cursor-pointer"
        :class="tab.id === activeTab ? 'bg-orange' : 'bg-movie-black-200'"
        v-for="tab in tabs"
        :key="tab.id"
        @click="$emit('on-tab-change', tab.id)"
      >
        <span class="pr-1">{{ tab.emoji }}</span>
        <span>{{ tab.title }}</span>
      </a>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { Tab } from '../types/tabs'

defineProps<{
  tabs: Tab[]
  activeTab: string
}>()

defineEmits<{
   'on-tab-change': [tab: string]
}>()
</script>

<style scoped></style>
