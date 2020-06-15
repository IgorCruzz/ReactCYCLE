import styled from 'styled-components'
import { darken } from 'polished'

export const Container = styled.div`
 @media(max-width: 400px){
    display: flex;
    flex-direction: column;

  }

  width: 100%;
  background: #000000;
  padding: 20px;
`
export const Content = styled.div`
  @media(max-width: 850px){
    display: flex;
    flex-direction: column;
  }

  display: flex;
  justify-content: space-between;



    article {
      @media(max-width: 500px){
    flex-direction: column;
  }

      display: flex;
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
export const Image = styled.div`
  display: flex;

  @media(max-width: 500px){
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 25px;
  }

  img {
      @media(max-width: 500px){
        margin: 10px 0;
        height: 80px;
        width: 150px;
      }

      height: 150px;
      width: 240px;
    }`