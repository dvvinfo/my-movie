<template>
  <page-layout padding-less>
    <template #title>Movie</template>
    <div class="mx-4">
    <tabs
      :tabs="tabsMock"
      :active-tab="activeTab"
      @on-tab-change="onTabChange"
    />
    <content-row >
      <main-banner />
      <flash-news />
    </content-row>
  </div>
    <content-row class="flex-col">
      <h1 class="text-2xl text-white font-bold mx-4">Special for you</h1>
      <movie-feed />
    </content-row>
  </page-layout>
</template>

<script setup lang="ts">
// @ts-ignore
import { ref } from '@vue/reactivity'
// @ts-ignore
import PageLayout from '../components/layout/PageLayout.vue'
// @ts-ignore
import Tabs from '../components/Tabs.vue'
import MainBanner from '../components/MainBanner.vue'
import FlashNews from '../components/FlashNews.vue'
import ContentRow from '../components/ContentRow.vue'
import MovieFeed from '../components/MovieFeed.vue'
import { tabsMock } from '../mocks/tabs'

const activeTab = ref<string>(tabsMock[0].id)

const onTabChange = (tabId: string) => {
  activeTab.value = tabId
}
</script>

<style scoped></style>
