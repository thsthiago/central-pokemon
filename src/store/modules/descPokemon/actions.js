import { DATA_POKEMON, DESCRICAO_POKEMON } from '../types'

export function activeDesc() {
  return {
    type: DESCRICAO_POKEMON
  }
}

export function dataPokemon() {
  return {
    type: DATA_POKEMON
  }
}
