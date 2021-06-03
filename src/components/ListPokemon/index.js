import { Container } from './styles'
import { CardPokemon } from '../CardPokemon'

import api from '../../services/api'
import { useEffect, useState } from 'react'

export const ListPokemon = () => {
  const [pokemons, setPokemons] = useState()
  const [colors, setColors] = useState()

  useEffect(() => {
    api
      .getPokemonsList()
      .then((response) => {
        const primeirosPokemons = response.results.splice(0, 12)
        setPokemons(primeirosPokemons)

        api
          .getPokemonColorsList()
          .then((response) => {
            const primeirasColors = response.results.splice(0, 12)
            response.results !== [] && setColors(primeirasColors)
          })
          .catch((err) => console.log(err))
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <Container>
      {pokemons &&
        pokemons.map((pokemon, index) => (
          <CardPokemon
            key={pokemon.name}
            color={colors && colors[index] && colors[index].name}
            name={pokemon.name}
          />
        ))}
    </Container>
  )
}
