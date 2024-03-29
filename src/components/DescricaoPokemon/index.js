import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container } from './styles'
import * as descPokemon from '../../store/modules/descPokemon/actions'
import nameUpperCase from '../../utils/nameUpperCase'

export const DescricaoPokemon = () => {
  const dispath = useDispatch()
  const pokemon = useSelector((state) => state.infoPokemon.pokemon)

  const handlesDescricao = useCallback(() => {
    dispath(descPokemon.activeDesc())
  }, [])

  return pokemon ? (
    <Container color={pokemon.color}>
      <div>
        <button onClick={() => handlesDescricao()}>
          <img src="./assets/close.svg" />
        </button>

        <div>
          <h1>{nameUpperCase(pokemon.forms[0].name)}</h1>

          <img src={pokemon.sprites.front_default} />

          <div>
            <p>
              <strong>TIPO</strong>
              <strong>{pokemon.types[0].type.name}</strong>
            </p>

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

              <p>
                <strong>SATK</strong>
                <strong>{pokemon.stats[3].base_stat}</strong>
              </p>
              <p>
                <strong>SDEF</strong>
                <strong>{pokemon.stats[4].base_stat}</strong>
              </p>
              <p>
                <strong>SPD</strong>
                <strong>{pokemon.stats[5].base_stat}</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  ) : (
    <div />
  )
}
