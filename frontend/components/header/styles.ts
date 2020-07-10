import styled from 'styled-components'
import { darken } from 'polished' 
import banner from '../../assets/FUNDO.jpg'
import banner2 from '../../assets/fundo2.png'

export const Container = styled.div`
  width: 100%;
  position: relative;
`

export const Content = styled.div`
  @media(max-width: 900px){
    height: 300px;
    background: url(${banner2}) no-repeat;
     background-size: cover;
  }
  background: url(${banner}) no-repeat;
  background-size: cover;
  position: relative;
  height: 92vh;
  width: 100%;
  #auth{
    @media(max-width: 900px){
      display: none;
    }
    background: #00BFFF;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
  }
  #logo {
    @media(max-width: 900px){
      justify-content: center;
      height: 70%;
    }
    height: 80%;
    justify-content: center;
    display: flex;
    align-items: center;
    img {
      @media(max-width: 900px){
      width: 120px;
      height: 120px;
    }
      margin-left: 20px;
      width: 400px;
      height: 400px;
      &:hover {
        opacity: 0.7;
      }
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
        color: ${darken(0.1, '#00BFFF')};
      }
    }
  }
  main {
    @media(max-width: 900px){
      display: none;
    }
    height: 40px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    background: #1E90FF;
    a {
      padding: 10px;
      text-decoration: none;
      color: #FFFFFF;
      margin: 0 15px;
      font-weight: bold;
      &:hover {
        border-radius: 20px;
        background: #00BFFF;
        color: #FFFFFF;
      }
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
    justify-content: start;
    width: 80%;
    input {
    @media(max-width: 900px){
      max-width: 90%;
    }
    border-radius: 10px 0 0 20px;
    background: #FFFFFF;
    width: 100%;
    max-width: 60%;
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
  @media(max-width: 900px){
    background: none;
  }
  padding: 20px;
  display: flex;
  justify-content: space-between;
  background: #00BFFF;
  div{
    @media(max-width: 900px){
      display: none;
    }
  }
`
export const Profile = styled.div`
  display: flex;
  background: #00BFFF;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border-radius: 10px;
  p {
    color: #FFFFFF;
    font-weight: bold;
  }
  button {
    display:flex;
    align-items: center;
    justify-content: center;
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
    p {
        color: #FFFFFF;
      }
    #search {
      width: 100%;
      margin: 20px 0;
      padding: 10px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      input {
        padding-left: 15px;
        height: 50px;
        color: #FFFFFF;
        border: 1px solid #777777;
        background: #1C1C1C;
        width: 90%;
        border-radius: 10px;
      }
      button {
        top: 19px;
        right: 45px;
        position: absolute;
        margin-left: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
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
  background: rgba(0,0,0, 0.9);
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