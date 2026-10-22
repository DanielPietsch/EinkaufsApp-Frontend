<script setup lang="ts">
// Erwartet genau das Item-Objekt aus dem Backend/App.vue
defineProps<{
  item: {
    id: number
    name: string
    done: boolean
  }
}>()
</script>

<template>
  <div class="item-row" :class="{ 'is-done': item.done }">
    <!-- Checkbox spiegelt das boolean-Feld 'done' wider -->
    <input type="checkbox" :checked="item.done" />

    <!-- Name des Artikels -->
    <span class="item-name">{{ item.name }}</span>

    <!-- ID aus dem Long-Feld -->
    <span class="item-id">#{{ item.id }}</span>
  </div>
</template>

<style scoped>
.item-row {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 14px;
  margin-bottom: 8px;
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 6px;
}

.item-name {
  font-size: 1rem;
}

.item-id {
  margin-left: auto;
  font-size: 0.8rem;
  color: #6c757d;
}

.is-done .item-name {
  text-decoration: line-through;
  color: #adb5bd;
}
</style>
