import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body,html, #__next {
    width: 100%;
    height: 100vh;
  }
  body {
    background: #EFEFEF;
    overflow-x: hidden;
  }
  a, p, strong, span {
    font-family: 'Roboto', sans-serif;
  }
  h1, h2, h3, h4, h5{
    font-family: 'Roboto', sans-serif;
  }
  a {
    text-decoration: none;
  }
  button {
    cursor: pointer;
    border: none;
  }
  &::-webkit-scrollbar {
    width: 8px;
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: #777777;
    border-radius: 8px;
  }
`
