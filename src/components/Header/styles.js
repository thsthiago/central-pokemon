import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 30%;
  position: relative;
  background: url('https://images.alphacoders.com/473/thumb-1920-473848.png');
  background-position: center 30%;
  background-size: cover;

  > div:first-of-type {
    position: relative;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
  }

  > div:last-of-type {
    position: absolute;
    bottom: 0;
    z-index: 2;
    background: linear-gradient(
      180deg,
      rgba(196, 196, 196, 0) 0%,
      #efefef 100%
    );
    width: 100%;
    height: 60%;
  }
`

export const Nav = styled.header`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 10px 3%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 30;

  img {
    height: 40px;
  }

  > div:first-of-type {
    nav {
      display: flex;
      gap: 50px;
      position: relative;
      z-index: 10;
      a {
        color: white;
      }

      span {
        position: absolute;
        bottom: -10px;
        left: ${(props) => (props.nav ? '0%' : '79%')};
        width: ${(props) => `${props.span}px`};
        height: 3px;
        background: white;
        display: block;
        transition: left 0.6s, width 0.6s;
      }
    }
  }

  @media (max-width: 690px) {
    flex-direction: column;
    gap: 20px;

    img {
      height: 30px;
    }
  }
`
