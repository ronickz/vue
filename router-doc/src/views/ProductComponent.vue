<template>
  <h1>Vista Producto numero: 5</h1>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const getData = async () => {
  const response = await fetch(`https://travel-dummy-api.netlify.app/${route.params.id}`)
  const data = await response.json()
  console.log(data)
}

onMounted(getData)
</script>
