import { INFO_POKEMON } from '../types'

export function infoPokemon(pokemon) {
  return {
    type: INFO_POKEMON,
    pokemon: pokemon
  }
}
