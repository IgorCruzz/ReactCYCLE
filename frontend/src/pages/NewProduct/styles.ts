import styled, { keyframes } from 'styled-components'
import { lighten } from 'polished'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(0 ,0 , 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;

  display:flex;
  align-items: center;
  justify-content: center;
`
const animate = keyframes`
  from {
    width: 0px;
  }
  to {
    width: 500px;
  }
`

export const Content = styled.div`
  padding: 20px;
  width: 500px;
  animation: ${animate} 0.1s linear;
  background: #FFFFFF;
  position: relative;

  #close {
    color: #000000;
    height: 50px;
    width: 50px;
    position: absolute;
    right: 0;
    top: 0;
    border: 0;
    background: none;
    font-size: 30px;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;

  #avatar {
    display: flex;
    justify-content: center;

    #label {

      margin-top: 25px;
      margin-left: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      border: 2px dotted #000000;
      width: 50%;
      height: 220px;
      border-radius: 10px;
      margin-bottom: 15px;

      svg {
        color: #DDDDDD;
        height: 70px;
        width: 70px;
      }

    img {
      width: 100%;
      height: 100%;
      border-radius: 10px;
    }

    input {
      display: none;
    }
  }
  }

  label {
    color: #1C1C1C;

  }

  button {
    width: 100%;
    border: 0;
    color: #FFFFFF;
    font-weight: bold;
    text-align: center;
    padding: 10px;
    background:  #00BFFF;
    margin-top: 10px;

    &:hover {
      background ${lighten(0.1, '#000000')};
    }
  }

  input {
    margin-bottom: 5px;
    padding: 5px;
    border-radius: 10px;
    height: 40px;
    border: 1px solid #777777;

  }
  }
  font-size: 16px;
`
