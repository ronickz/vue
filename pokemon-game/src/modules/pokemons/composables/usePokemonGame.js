import { computed, onMounted, ref } from 'vue'
import { pokemonApi } from '../api/PokemonApi'

export const usePokemonGame = () => {
  const estadoJuego = ref('jugando')
  const pokemons = ref([])
  const isLoading = computed(() => pokemons.value.length === 0)
  const pokemonesAuxiliares = ref([])

  const obtenerPokemons = async () => {
    const response = await pokemonApi.get('/?limit=151')
    const pokemonsArray = response.data.results.map((pokemon) => {
      return {
        id: +pokemon.url.split('/').at(-2),
        name: pokemon.name,
      }
    })

    return pokemonsArray.sort(() => Math.random() - 0.5)
  }

  const opcionesMostradas = (cantidadDeOpciones) => {
    estadoJuego.value = 'jugando'
    pokemonesAuxiliares.value = pokemons.value.slice(0, cantidadDeOpciones)
    pokemons.value = pokemons.value.slice(cantidadDeOpciones)
  }

  onMounted(async () => {
    await new Promise((r) => setTimeout(r, 500)), (pokemons.value = await obtenerPokemons())
  })

  return {
    estadoJuego,
    isLoading,

    pokemonesAuxiliares,
    opcionesMostradas,
  }
}
