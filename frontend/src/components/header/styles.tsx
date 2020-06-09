import styled, { keyframes } from 'styled-components'

import banner from '../../assets/FUNDO.jpg'

export const Container = styled.div`
  width: 100%;
`

const animate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const Content = styled.div`
  background: url(${banner}) no-repeat;
  background-size: cover;
  position: relative;
  height: 92vh;
  width: 100%;

  #coroa {
    margin-left: 90px;
    margin-top: 50px;
    width: 300px;
    height: 300px;
    animation: ${animate} 16s linear infinite;
  }

  #logo {
    position: absolute;
    left: 90px;
    top: 200px;
    width: 290px;
    height: 160px;
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
    a {
      text-decoration: none;
      color: #FFFFFF;
      margin: 0 15px;
      font-weight: bold;
    }
  }
`

export const Bar = styled.div`

  width: 100%;
  height: 70px;
  background: #00BFFF;
  padding: 0 15px;

  display: flex;
  align-items: center;
  justify-content: space-between;


  span {
    display: flex;
    position: relative;


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

    input {
    border-radius: 10px 0 0 20px;
    background: #FFFFFF;

    width: 600px;
    border: 0;
    height: 40px;
    padding-left: 15px;
  }

  button {
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
      margin-left: 10px;
      color: #FFFFFF;
    }
  }
`

export const NavBar = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
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
