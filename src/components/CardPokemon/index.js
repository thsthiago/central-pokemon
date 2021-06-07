import { Container } from './styles'
import { useDispatch } from 'react-redux'
import nameUpperCase from '../../utils/nameUpperCase'

import * as descPokemon from '../../store/modules/descPokemon/actions'
import * as infoPokemon from '../../store/modules/infoPokemon/actions'
import { useCallback, useEffect, useState } from 'react'
import api from '../../services/api'

export const CardPokemon = ({ name, color }) => {
  const dispath = useDispatch()
  const [pokemon, setPokemon] = useState()
  const [nome, setNome] = useState('')

  const handlesDescricao = useCallback(() => {
    dispath(descPokemon.activeDesc())
    dispath(infoPokemon.infoPokemon({ ...pokemon, color: color }))
  }, [pokemon, color])

  useEffect(() => {
    api
      .getPokemonByName(name)
      .then((response) => {
        setPokemon(response)
        setNome(nameUpperCase(response.forms[0].name))
      })
      .catch((err) => console.log(err))
  }, [])

  return pokemon ? (
    <Container
      onClick={() => handlesDescricao()}
      color={(color && color) || '#E9FE6B'}>
      <div>
        <img src={pokemon.sprites.front_default} />
      </div>
      <h1>{nome}</h1>
      <div>
        <p>
          <strong>HP</strong>
          <strong>{pokemon.stats[0].base_stat}</strong>
        </p>
        <p>
          <strong>ATK</strong>
          <strong>{pokemon.stats[1].base_stat}</strong>
        </p>
        <p>
          <strong>DEF</strong>
          <strong>{pokemon.stats[2].base_stat}</strong>
        </p>
      </div>
    </Container>
  ) : (
    <Container />
  )
}
