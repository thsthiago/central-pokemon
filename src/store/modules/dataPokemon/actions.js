import { DATA_POKEMON } from '../types'

export function dataPokemon(pokemon) {
  return {
    type: DATA_POKEMON,
    pokemon: pokemon
  }
}
