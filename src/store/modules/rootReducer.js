import { combineReducers } from 'redux'
import descricaoPokemon from './descPokemon/reducer'
import infoPokemon from './infoPokemon/reducer'
import colorsPokemons from './colorsPokemons/reducers'

export default combineReducers({
  infoPokemon,
  descricaoPokemon,
  colorsPokemons
})
