import { useEffect, useRef } from 'react'
import { Container } from './styles'

export const InfiniteScroll = ({ search }) => {
  const scrollContainer = useRef(null)

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1
  }

  useEffect(() => {
    const observer = new IntersectionObserver(([div]) => {
      if (div.isIntersecting) {
        observer.disconnect()
        search()
      }
    }, options)
    observer.observe(scrollContainer.current)

    return () => {
      observer.disconnect()
    }
  }, [])

  return <Container ref={scrollContainer} />
}
