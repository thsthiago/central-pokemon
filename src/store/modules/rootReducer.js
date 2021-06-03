import { combineReducers } from 'redux'
import descricaoPokemon from './descPokemon/reducer'
import dataPokemon from './dataPokemon/reducer'

export default combineReducers({
  dataPokemon,
  descricaoPokemon
})
