import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { Container, Nav } from './styles'
import { useRouter } from 'next/router'

export function Header() {
  const { pathname } = useRouter()
  const [nav, setNav] = useState(true)
  const [span, setSpan] = useState(0)
  const itemWidth = useRef(null)
  const pokemonWidth = useRef(null)

  useEffect(() => {
    setNav(pathname)
    if (pathname === '/') {
      setSpan(pokemonWidth.current.clientWidth)
    } else {
      setSpan(itemWidth.current.clientWidth)
    }
  }, [pathname])

  return (
    <Container>
      <div>
        <Nav nav={nav} span={span}>
          <img src="assets/logo.svg" alt="Central Pokémon" />

          <div>
            <nav>
              <div ref={pokemonWidth}>
                <Link href="/">Pokémons</Link>
              </div>
              <div ref={itemWidth}>
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
