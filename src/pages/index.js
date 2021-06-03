import { useSelector } from 'react-redux'
import { DescricaoPokemon } from '../components/DescricaoPokemon'
import { ListPokemon } from '../components/ListPokemon'
import Head from 'next/head'

export default function Home() {
  const descState = useSelector((state) => state.descricaoPokemon)

  return (
    <>
      <Head>
        <title>Central Pokémon | Pokémons</title>
      </Head>
      <ListPokemon />
      {!descState.descricaoPokemon && <DescricaoPokemon />}
    </>
  )
}
