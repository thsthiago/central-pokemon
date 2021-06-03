import styled, { keyframes } from 'styled-components'

const animationPokemon = keyframes`
  from {
    top: -2000px;
  }
  to {
    top: 110px;
  }
`

const animationContainer = keyframes`
  from {
    bottom: -1000px;
  }
  to {
    bottom: 0px;
  }
`

export const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  background: url('https://images.alphacoders.com/473/thumb-1920-473848.png')
    no-repeat;
  background-size: cover;
  position: fixed;
  z-index: 30;
  top: 0;
  left: 0;

  > div {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding: 0 2%;

    button {
      background: transparent;
      position: absolute;
      top: 30px;
      right: 5%;

      img {
        width: 40px;
      }
    }

    > div {
      width: 100%;
      max-width: 800px;
      height: 80%;
      background: ${(props) => (props.color ? props.color : '#E9FE6B')};
      border-radius: 50px 50px 0px 0px;
      text-align: center;
      padding: 0 30px;
      display: flex;
      flex-direction: column;
      position: relative;
      animation: ${animationContainer} 0.5s;

      h1 {
        padding: 40px 0px 20px;
      }

      img {
        background: white;
        width: 230px;
        position: absolute;
        border-radius: 50%;
        padding: 40px;
        left: 50%;
        transform: translateX(-50%);
        top: 110px;
        animation: ${animationPokemon} 0.7s;
      }

      > div {
        background: white;
        border-radius: 50px 50px 0px 0px;
        flex: 1;
        margin-top: 150px;
        padding: 0 10px;
        padding-top: 70px;

        p {
          position: relative;
          z-index: 3;
          font-size: 20px;

          display: flex;
          flex-direction: column;
          align-items: center;

          @media (max-width: 600px) {
            font-size: 16px;
          }

          strong:first-of-type {
            color: #777777;
            padding-bottom: 5px;
          }
        }

        > p:last-of-type {
          font-size: 16px;
          margin-top: 40px;
          text-align: justify;
          padding: 0 20px;
        }

        div {
          margin: 20px 0px;
          display: flex;
          justify-content: center;
          gap: 50px;
          flex-wrap: wrap;
        }
      }

      @media (max-width: 540px) {
        > div {
          margin-top: 80px;
        }
      }

      @media (max-width: 400px) {
        height: 85%;

        > div {
          padding-top: 30px;
        }

        img {
          width: 200px;
        }
      }
    }

    @media (max-width: 500px) {
      button {
        background: transparent;
        position: absolute;
        top: 30px;
        right: 5%;

        img {
          width: 25px;
        }
      }
    }
  }
`
