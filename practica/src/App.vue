<template>
  <input type="text" />
  <p>Escribiste {{ characterCounter }}/200</p>
  <button v-on:click="agregarLibro">Agregar libro</button>
</template>

<script setup>
import { computed, ref } from 'vue'

const character = ref('')
const characterCounter = computed(() => {
  return character.value.length
})

const w = () => {}
</script>
