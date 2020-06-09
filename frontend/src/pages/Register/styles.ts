import styled, { keyframes } from 'styled-components'
import { lighten } from 'polished'

const background = '#D3D3D3'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
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
  width: 80%;

  small {
    margin-left: 15px;
    color: #777777;
  }

  #title {
    display: flex;
    align-items: center;

    svg {
      margin-right: 10px;
      height: 20px;
    }

    h4 {
      font-size: 15px;
    }
  }

  #tables {
    display: flex;
  }

  hr {
    margin-bottom: 15px;
  }


  form {
    display: flex;
    flex-direction: column;
    color: #1C1C1C;

    strong {
      font-size: 15px;
    }

    input {
      padding: 10px;
      border-radius: 7px;
      border: 1px solid #C0C0C0;
      height: 30px;
    }

    button {
      margin-top: 15px;
      width: 150px;
      align-self: flex-end;
      border: 0;
      background: #000000;
      color: #FFFFFF;
      font-weight: bold;
      text-align: center;
      padding: 15px;

      &:hover {
        background: ${lighten(0.1, '#000000')};
      }

      svg {
        animation: ${animate} 1s linear infinite;
      }
    }
  }
`

export const Title = styled.div`
  margin-bottom: 25px;
  display: flex;
  align-items: center;

  h4 {
    padding-right: 10px;
    border-right: 1px solid #777777;
  }

`

export const DataAccess = styled.div`
      width: 100%;
      background: ${background};
      padding: 20px;

      #title {
          margin-bottom: 10px;
        }

    #tabela {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
        grid-gap: 10px;

        span {
        display: flex;
        align-items: center;

        label {
        display: block;
        font-size: 15px;
        font-weight: bold;
      }

      svg {
        height: 19px;
      }
      }

      input {
        width: 100%;
      }

      }
    }
`

export const AccessTypes = styled.div`
  margin: 10px 0;
  padding: 20px;
  background: ${background};
  width: 100%;


  div {
    display: flex;
  }

  #teste {

    display: flex;
    align-items: center;

    label {
    font-size: 17px;
  }

  input {
    margin: 0 15px;
  }

  }


`
export const PersonalData = styled.div`
  width: 50%;

  background: ${background};
  padding: 20px;
  margin-right: 10px;

  display: flex;
  flex-direction: column;

  label {
    font-size: 15px;
    font-weight: bold;
  }
  select {
    height: 30px;
    border-radius: 7px;
    width: 60px;
  }

  input {
    margin: 4px 0;
  }

  div {
    display: flex;

    svg {
      margin-right: 15px;
    }
  }
`

export const Address = styled.div`
  width: 50%;
  background: ${background};
  padding: 20px;

  display: flex;
  flex-direction: column;


  label {
    font-size: 15px;
    font-weight: bold;
  }

  input {
    margin: 4px 0;
  }

  div {
    display: flex;

    svg {
      margin-right: 15px;
    }
  }
`
