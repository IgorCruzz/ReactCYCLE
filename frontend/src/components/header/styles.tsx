import styled, { keyframes } from 'styled-components'

import banner from '../../assets/FUNDO.jpg'

export const Container = styled.div`
  width: 100%;
  position: relative;
`

export const Content = styled.div`
  @media(max-width: 900px){
    height: 200px;
  }

  background: url(${banner}) no-repeat;
  background-size: cover;
  position: relative;
  height: 92vh;
  width: 100%;

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
    display: flex;
  }
`
export const Main = styled.section`
  height: 100%;
  width: 100%;
  background: rgba(30,144,255, 0.8);
  top: 0;
  left: 0;
  z-index: 4;
  position: fixed;
  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 200px;
    height: 150px;
    margin-bottom: 45px;
  }

  #close {
    position: absolute;
    top: 19px;
    left: 29px;
    font-size: 30px;
  }
  `
