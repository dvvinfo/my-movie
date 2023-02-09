<template>
  <page-layout>
    <template #title>Movie</template>
    <div>
      <tabs :tabs="tabsMock" :active-tab="activeTab" @on-tab-change="onTabChange" />
    </div>
  </page-layout>
</template>

<script setup lang="ts">
// @ts-ignore
import { ref } from '@vue/reactivity';
// @ts-ignore
import PageLayout from '../components/layout/PageLayout.vue';
// @ts-ignore
import Tabs from '../components/Tabs.vue';
import { tabsMock } from '../mocks/tabs';

const activeTab = ref<string>(tabsMock[0].id)

const onTabChange = (tabId: string) => {
activeTab.value = tabId
}
</script>

<style scoped></style>
