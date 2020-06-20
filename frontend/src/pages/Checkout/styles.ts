import styled from 'styled-components'
import 'react-credit-cards/es/styles-compiled.css'
import { lighten } from 'polished'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

`
export const Content = styled.div`
  @media(max-width: 1100px){
    flex-direction: column;
  }

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 60%;
  margin: 100px;

  form {
    width: 400px;


    button {
      width: 100%;
      background: #00BFFF;
      border: 0;
      color: #FFFFFF;
      font-weight: bold;
      padding: 11px;
      border-radius: 15px;

      &:hover {
        background: ${lighten(0.1, '#00BFFF')};
    }
    }

    input {
      width: 100%;
      margin: 10px 0;
      border-radius: 15px;
      border: 0;
      padding: 10px;
      font-size: 15px;
    }

    div {
      display: flex;

      input {
        margin-left: 5px;
        width: 100%;
        border-radius: 15px;
        border: 0;
      }
    }
  }
`
