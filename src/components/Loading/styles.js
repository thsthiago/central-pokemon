import styled, { keyframes } from 'styled-components'

const animationLoading = keyframes`
  0% {
    width: 13px;
    height: 13px;
  }
  50% {
    width: 20px;
    height: 20px;
  }
  100% {
    width: 13px;
    height: 13px;
  }
`

export const Container = styled.div`
  width: 150px;
  height: 40px;
  margin: 10px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3px;

  span {
    display: block;
    background: url('./assets/loading.svg') no-repeat;
    background-position: center;
    background-size: cover;
  }

  span:nth-of-type(1) {
    animation: ${animationLoading} 1.5s infinite;
  }

  span:nth-of-type(2) {
    animation: ${animationLoading} 1.7s infinite;
  }

  span:nth-of-type(3) {
    animation: ${animationLoading} 1.9s infinite;
  }
`
