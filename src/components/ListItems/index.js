import { useEffect, useState } from 'react'
import { CardItem } from '../CardItem'
import { Container } from './styles'
import api from '../../services/api'
import { InfiniteScroll } from '../InfiniteScroll'
import { Loading } from '../Loading'

export const ListItem = () => {
  const [itens, setItens] = useState()
  const [numItens, setNumItens] = useState()
  const [loading, setLoading] = useState(false)

  const searchItens = () => {
    setLoading(true)

    const config = {
      limit: 12,
      offset: itens.length
    }

    api
      .getItemsList(config)
      .then((response) => {
        setItens([...itens, ...response.results])
        setLoading(false)
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    api
      .getItemsList()
      .then((response) => {
        const primeirosItems = response.results.splice(0, 12)
        setNumItens(response.count)
        setItens(primeirosItems)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <>
      <Container>
        {itens &&
          itens.map((item) => <CardItem name={item.name} key={item.name} />)}
      </Container>
      {itens && !loading && itens.length !== numItens && (
        <InfiniteScroll search={() => searchItens()} />
      )}
      {!loading && <Loading />}
    </>
  )
}
