import { Container } from './styles'
import { CardPokemon } from '../CardPokemon'

import api from '../../services/api'
import { useEffect, useState } from 'react'
import { InfiniteScroll } from '../InfiniteScroll'
import { useDispatch, useSelector } from 'react-redux'
import * as colorsPokemons from '../../store/modules/colorsPokemons/actions'
import { Loading } from '../Loading'

export const ListPokemon = (props) => {
  const [pokemons, setPokemons] = useState(null)
  const [numPokemons, setNumPokemons] = useState()
  const [loading, setLoading] = useState(false)
  const { colors } = useSelector((state) => state.colorsPokemons)
  const dispath = useDispatch()

  const searchPokemons = () => {
    setLoading(true)
    const config = {
      limit: 12,
      offset: pokemons.length
    }

    api
      .getPokemonsList(config)
      .then((response) => {
        setPokemons([...pokemons, ...response.results])
        setLoading(false)
      })
      .catch((err) => console.log(err))
    if (colors.length < numPokemons) {
      const newColors = []

      for (let index = 0; index < 12; index++) {
        newColors.push(colors[geraColor()])
      }
      dispath(colorsPokemons.colorsPokemons([...colors, ...newColors]))
    }
  }

  const geraColor = () => Math.floor(Math.random() * (9 - 0) - 0)

  useEffect(() => {
    api
      .getPokemonsList()
      .then((response) => {
        const primeirosPokemons = response.results.slice(0, 12)
        setNumPokemons(response.count)
        setPokemons(primeirosPokemons)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <>
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
      {pokemons && !loading && pokemons.length !== numPokemons && (
        <InfiniteScroll search={() => searchPokemons()} />
      )}
      {!loading && <Loading />}
    </>
  )
}
