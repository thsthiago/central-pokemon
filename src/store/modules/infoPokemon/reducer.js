import { INFO_POKEMON } from '../types'

const initialState = {
  infoPokemon: {}
}

export default function infoPokemon(state = initialState, action) {
  switch (action.type) {
    case INFO_POKEMON: {
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
