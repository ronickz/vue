<template lang="">
  <section v-if="isLoading" class="flex flex-col justify-center items-center w-screen h-screen">
    <h1 class="tex-3xl">Espere por favor</h1>
    <h3 class="animate-pulse">Cargando Pokemon</h3>
  </section>

  <section v-else class="flex flex-col justify-center items-center w-screen h-screen">
    <h1>Quien es</h1>

    <!-- Foto Pokemon -->
    <PokemonPicture />
    <!-- Opciones  -->
    <PokemonOptions />
  </section>
</template>

<script setup>
import PokemonPicture from '../components/PokemonPicture.vue'
import PokemonOptions from '../components/PokemonOptions.vue'
import { usePokemonGame } from '../composables/usePokemonGame'

const { estadoJuego, isLoading } = usePokemonGame()
</script>
