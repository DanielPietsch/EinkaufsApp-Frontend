<script setup lang="ts">
import { ref } from 'vue'
import ItemList from './components/ItemList.vue'

// Eine Liste von Beispielen, exakt aufgebaut wie euer Java-Backend-Objekt
const items = ref([
  { id: 1, name: 'Milch', done: false },
  { id: 2, name: 'Brot', done: true },
  { id: 3, name: 'Kaffee', done: false },
])
</script>

<template>
  <main style="max-width: 500px; margin: 40px auto; font-family: sans-serif">
    <h1>🛒 EinkaufsApp</h1>

    <!-- v-for iteriert über die Liste und übergibt jedes Item an die Unterkomponente -->
    <ItemList :items="items" />
  </main>
</template>
