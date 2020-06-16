import styled from 'styled-components'
import { darken } from 'polished'
import banner from '../../assets/FUNDO.png'

export const Container = styled.div`
  width: 100%;
  position: relative;
`

export const Content = styled.div`
  @media(max-width: 900px){
    height: 200px;
    background: none;
  }

  background: url(${banner}) no-repeat;
  background-size: cover;
  position: relative;
  height: 92vh;
  width: 100%;

  #logo {
    @media(max-width: 900px){
      justify-content: center;
      height: 50%;
    }


    height: 80%;

    display: flex;
    align-items: center;

    img {
      @media(max-width: 900px){
      width: 200px;
      height: 90%;
    }

      margin-left: 10px;
      width: 500px;
      height: 300px;
    }
  }

  div {
    button {
      background: none;
      font-weight: bold;
      font-size: 25px;
      color: #FFFFFF;
      border: 0;
    }

    a {
      text-decoration: none;
      color: #FFFFFF;
      margin: 0 15px;
      font-weight: bold;

      &:hover {
        color: #00BFFF;;
      }
    }
  }

  main {
    @media(max-width: 900px){
      display: none;
    }
    a {
      text-decoration: none;
      color: #FFFFFF;
      margin: 0 15px;
      font-weight: bold;
    }
  }
`

export const Bar = styled.div`
  @media(max-width: 900px){
    display:flex;

  }

  width: 100%;
  background: #00BFFF;
  padding: 0 15px;

  display: flex;
  align-items: center;
  justify-content: space-between;


  span {
    display: flex;
    position: relative;

    a {
      @media(max-width: 900px){
        background: red;
        height: 50px;
        width: 60px;
        background:  #1E90FF;
        display: flex;
        align-items: center;
        justify-content:center;
      }
    }

    p {
      @media(max-width: 900px){
        display: none;
      }

    }
    strong {
      @media(max-width: 900px){
        background: #00008B;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        top: 2px;
        right: 10px;

        display: flex;
        align-items: center;
        justify-content: center;
      }

      color: #FFFFFF;
      position: absolute;
      top: 15px;
      right: 20px;
      font-size: 20px;

    }
  }

  div {
    display: flex;
    justify-content: center;
    width: 50%;

    input {
    @media(max-width: 900px){
      max-width: 900px;
    }

    border-radius: 10px 0 0 20px;
    background: #FFFFFF;
    width: 100%;
    max-width: 600px;
    border: 0;
    height: 40px;
    padding-left: 15px;
  }

  button {
    @media(max-width: 900px){
     width: 50px;
    }
    border-radius: 0 20px 10px 0;
    height: 40px;
    width: 100px;
    border: 0;
    background: #1E90FF;
  }

  }
    a {
    text-decoration: none;
    color: #FFFFFF;
    font-size: 16px;

    display: flex;
    align-items: center;

    svg {
      @media(max-width: 900px){
        height: 35px;
        width: 35px;
        margin-left: 0;
      }
      margin-left: 10px;
      color: #FFFFFF;
    }
  }
`

export const NavBar = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;

  div{
    @media(max-width: 900px){
      display: none;
    }
  }
`
export const Profile = styled.div`
  display: flex;

  p {
    color: #FFFFFF;
    font-weight: bold;
  }

  button {
    margin-left: 25px;
  }
`
export const Mobile = styled.span`
  display: none;
  @media(max-width: 900px){
    background: rgba(30,144,255, 0.9);
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-radius: 30px;
    align-items: center;

    strong {
      color: #FFFFFF;
      font-size: 18px;
      margin-right: 15px;
    }

    button {
      margin-right: 10px;
      margin-top: 5px;
    }

    #hamburguer {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 10px;
    }
  }
`
export const Main = styled.section`
  height: 100%;
  width: 100%;
  background: rgba(30,144,255, 0.9);
  top: 0;
  left: 0;
  z-index: 4;
  position: fixed;


  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 200px;
    height: 150px;
    margin-bottom: 45px;
  }

  a {
    width: 100%;
    height: 70px;
    background: ${darken(0.1, '#1E90FF')};
    border-top: 1px solid #1E90FF;
    border-bottom: 1px solid #1E90FF;
    margin: 15px;
    display: flex;
    align-items:center;
    justify-content: center;
  }

  #close {
    position: absolute;
    top: 19px;
    left: 29px;
    font-size: 30px;
  }
  `
