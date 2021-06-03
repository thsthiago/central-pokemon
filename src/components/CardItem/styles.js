import styled from 'styled-components'

export const Container = styled.div`
  margin-bottom: 30px;
  height: 250px;
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

  div {
    background: ${(props) => (props.color ? props.color : '#E9FE6B')};
    width: 100%;
    height: 200px;
    border-radius: 10px 10px 80px 80px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100px;
      transition: transform 0.5s;
    }
  }

  h1 {
    text-align: center;
    font-size: 20px;
    padding-top: 10px;
  }

  @media (max-width: 528px) {
    height: 260px;
    width: 150px;

    h1 {
      padding-top: 15px;
      font-size: 16px;
    }
  }

  @media (max-width: 354px) {
    height: 280px;
    width: 70%;
  }
`
