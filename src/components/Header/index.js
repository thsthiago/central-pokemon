import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { Container, Nav } from './styles'

export function Header() {
  const [nav, setNav] = useState(true)
  const [span, setSpan] = useState(0)
  const itemWidth = useRef(null)
  const pokemonWidth = useRef(null)

  useEffect(() => {
    if (nav) {
      setSpan(pokemonWidth.current.clientWidth)
    } else {
      setSpan(itemWidth.current.clientWidth)
    }
  }, [nav])

  return (
    <Container>
      <div>
        <Nav nav={nav} span={span}>
          <img src="assets/logo.svg" alt="Central Pokémon" />

          <div>
            <nav>
              <div ref={pokemonWidth} onClick={() => setNav(true)}>
                <Link href="/">Pokémons</Link>
              </div>
              <div ref={itemWidth} onClick={() => setNav(false)}>
                <Link href="/itens">Itens</Link>
              </div>
              <span></span>
            </nav>
          </div>
        </Nav>
      </div>
      <div></div>
    </Container>
  )
}
