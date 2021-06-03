import styled from 'styled-components'

export const Container = styled.div`
  margin-bottom: 30px;
  height: 400px;
  width: 230px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);

  cursor: url('./assets/searchpokemon.svg'), pointer;

  &:hover {
    div:first-of-type img {
      transform: scale(1.2);
    }
  }

  div:first-of-type {
    background: ${(props) => (props.color ? props.color : '#E9FE6B')};
    width: 100%;
    height: 250px;
    border-radius: 10px 10px 100px 100px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 180px;
      transition: transform 0.5s;
    }
  }

  h1 {
    padding-top: 25px;
    font-size: 20px;
  }

  div:last-of-type {
    padding-top: 30px;
    display: flex;
    gap: 30px;

    p {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      strong:first-of-type {
        color: #777777;
        padding-bottom: 5px;
      }
    }
  }

  @media (max-width: 528px) {
    height: 280px;
    width: 150px;
    padding-bottom: 10px;

    h1 {
      padding-top: 15px;
      font-size: 16px;
    }

    div:last-of-type {
      padding-top: 20px;
      display: flex;
      gap: 30px;

      p {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 14px;

        strong:first-of-type {
          color: #777777;
          padding-bottom: 5px;
        }
      }
    }
  }

  @media (max-width: 354px) {
    height: 280px;
    width: 70%;
  }
`
