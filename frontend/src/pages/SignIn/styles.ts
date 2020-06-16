import styled, { keyframes } from 'styled-components'

const login = keyframes`
  from {
    width: 0;
  }
  to {
    width: 300px;
  }
`

interface Props {
  readonly signed: Boolean
}

export const Container = styled.div<Props>`
  @media(max-width: 400px){
    width: 100%;
    right: 0;
  }
  display: ${props => props.signed ? 'none' : 'block'};
  border: 1px solid #777777;
  position: absolute;
  z-index: 2;
  top: 50px;
  right: 40px;
  width: 300px;
  height: 240px;
  padding: 20px;
  background: #FFFFFF;
  border-radius: 14px;
  animation: ${login} 0.1s linear;

  form {
    display: flex;
    flex-direction: column;

    #button {
      margin-top: 22px;
      background: #000000;
      font-size: 19px;
      padding: 6px 0;
    }

    label {
      font-size: 18px;
      margin-top: 18px;
    }


  }
`
