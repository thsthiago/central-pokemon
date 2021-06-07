import { COLORS_POKEMONS } from '../types'
import api from '../../../services/api'

const initialState = {
  colors: []
}

api.getPokemonColorsList().then((response) => {
  if (response.results !== []) {
    initialState.colors = [
      ...response.results,
      response.results[3],
      response.results[7]
    ]
  }
})

export default function colorsPokemons(state = initialState, action) {
  switch (action.type) {
    case COLORS_POKEMONS: {
      const { colors } = action
      return {
        colors
      }
    }

    default: {
      return state
    }
  }
}
