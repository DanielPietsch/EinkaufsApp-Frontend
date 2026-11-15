<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits<{ created: [item: { id: number; name: string; done: boolean }] }>()
const nameField = ref('')

function save() {
  if (nameField.value.trim() === '') return
  const endpoint = import.meta.env.VITE_BACKEND_BASE_URL + '/items'
  fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: nameField.value, done: false }),
  })
    .then((response) => response.json())
    .then((item) => {
      emit('created', item)
      nameField.value = ''
    })
    .catch((error) => console.log('Fehler beim Speichern:', error))
}
</script>

<template>
  <form @submit.prevent="save">
    <input v-model="nameField" placeholder="Neuer Artikel" />
    <button type="submit">Hinzufügen</button>
  </form>
</template>
