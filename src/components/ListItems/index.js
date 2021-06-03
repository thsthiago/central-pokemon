import { useEffect, useState } from 'react'
import { CardItem } from '../CardItem'
import { Container } from './styles'
import api from '../../services/api'

export const ListItem = () => {
  const [items, setItems] = useState()

  useEffect(() => {
    api
      .getItemsList()
      .then((response) => {
        const primeirosItems = response.results.splice(0, 12)
        setItems(primeirosItems)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <Container>
      {items &&
        items.map((item) => <CardItem name={item.name} key={item.name} />)}
    </Container>
  )
}
