<script setup lang="ts">
// @ts-ignore
import SidebarLayout from './components/layout/SidebarLayout.vue';
</script>

<template>
  <div class="flex h-screen flex-col">
    <div class="flex flex-1 overflow-hidden">
      <sidebar-layout />
      <main class="min-w-0  flex-1 ">
        <router-view />
      </main>
    </div>
  </div>
</template>

<style scoped></style>
