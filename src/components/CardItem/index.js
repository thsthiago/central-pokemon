import { useEffect, useState } from 'react'
import api from '../../services/api'
import nameUpperCase from '../../utils/nameUpperCase'
import { Container } from './styles'

export const CardItem = ({ name }) => {
  const [item, setItem] = useState()
  const [nome, setNome] = useState()

  useEffect(() => {
    api
      .getItemByName(name)
      .then((response) => {
        setItem(response)
        setNome(nameUpperCase(name))
      })
      .catch((err) => console.log(err))
  }, [])

  if (!item) return <Container />

  return (
    <Container>
      <div>
        <img src={item.sprites.default} />
      </div>

      <h1>{nome}</h1>
    </Container>
  )
}
