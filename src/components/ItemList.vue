<script setup lang="ts">
import ItemEntry from './ItemEntry.vue'

defineProps<{
  items: { id: number; name: string; done: boolean }[]
}>()
</script>

<template>
  <ItemEntry v-for="item in items" :key="item.id" :item="item" />
</template>