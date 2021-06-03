import { DATA_POKEMON, DESCRICAO_POKEMON } from '../types'

const initialState = {
  descricaoPokemon: false
}

export default function descricaoPokemon(state = initialState, action) {
  switch (action.type) {
    case DESCRICAO_POKEMON: {
      const newState = { ...state }
      newState.descricaoPokemon = !newState.descricaoPokemon
      return newState
    }

    default: {
      return state
    }
  }
}
