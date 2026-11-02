<script setup lang="ts">
import { ref, onMounted } from 'vue'
import ItemList from './components/ItemList.vue'

// Bauplan für ein Item definieren
interface Item {
  id: number
  name: string
  done: boolean
}

// Die Liste startet jetzt LEER (keine festen Dummy-Daten mehr im Frontend!)
const items = ref<Item[]>([])

// Diese Funktion holt die Daten per HTTP-GET vom Java-Backend
function loadItems() {
  const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL
  const endpoint = baseUrl + '/items'

  const requestOptions: RequestInit = {
    method: 'GET',
    redirect: 'follow',
  }

  fetch(endpoint, requestOptions)
    .then((response) => response.json())
    .then((result: Item[]) => {
      items.value = result // Speichert die Antwort vom Backend in unsere Liste
    })
    .catch((error) => console.log('Fehler beim Laden:', error))
}

// onMounted führt loadItems() automatisch aus, sobald die Seite im Browser lädt
onMounted(() => {
  loadItems()
})
</script>

<template>
  <main style="max-width: 500px; margin: 40px auto; font-family: sans-serif">
    <h1>🛒 EinkaufsApp</h1>
    <ItemList :items="items" />
  </main>
</template>
