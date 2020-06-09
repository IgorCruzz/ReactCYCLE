import styled from 'styled-components'
import { darken } from 'polished'

export const Container = styled.div`
  width: 100%;
  background: #000000;
  height: 200px;
  padding: 20px;
`
export const Content = styled.div`
  display: flex;
  justify-content: space-between;
    img {
      height: 150px;
      width: 240px;
      margin-left: 100px;
    }

    article {
      display: flex;
      width: 600px;
      justify-content: space-around;

  a {
      text-decoration: none;
      color: #FFFFFF;
      font-size: 10px;
      margin-bottom: 7px;

    &:hover {
      color: ${darken(0.2, '#FFFFFF')};
    }
    }
  div {

    display: flex;
    flex-direction: column;
    color: #FFFFFF;

    strong {
      margin-bottom: 15px;
      color: #00BFFF;
    }

    p {
      font-size: 10px;
    }
  }

  span {
    display: flex;
    flex-direction: column;
    color: #FFFFFF;

    strong {
      margin-bottom: 15px;
      color: #00BFFF;
    }
  }
    }
`
