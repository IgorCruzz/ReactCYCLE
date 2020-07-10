import styled, { keyframes, css } from 'styled-components'

const login = keyframes`
  from {
    width: 0;
  }
  to {
    width: 300px;
  }
`

interface Props {
  open?: boolean
  close?: boolean
}

export const Container = styled.div<Props>`
  @media(max-width: 400px){
    width: 100%;
    right: 0;
  }
  display: ${props => props.open ? 'block' : 'none'};
  ${props => props.close && css` display: none`};
  border: 1px solid #777777;
  position: absolute;
  z-index: 2;
  top: 70px;
  right: 40px;
  width: 300px;
  padding: 20px;
  background: #FFFFFF;
  border-radius: 14px;
  animation: ${login} 0.1s linear;
  #cancel {
      margin-top: 10px;
      color: #000000;
      width: 100%;
      font-size: 15px;
    }
  form {
    display: flex;
    flex-direction: column;
    #button {
      margin-top: 22px;
      background: #00BFFF;
      font-size: 19px;
      padding: 6px 0;
    }
    label {
      font-size: 18px;
      margin-top: 18px;
    }
  }
`