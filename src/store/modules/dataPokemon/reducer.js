import { DATA_POKEMON } from '../types'

const initialState = {
  dataPokemon: {}
}

export default function dataPokemon(state = initialState, action) {
  switch (action.type) {
    case DATA_POKEMON: {
      const { pokemon } = action
      return {
        pokemon
      }
    }

    default: {
      return state
    }
  }
}
