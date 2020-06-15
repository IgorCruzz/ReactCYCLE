import styled from 'styled-components'
import { lighten } from 'polished'

export const Container = styled.div`
  @media(max-width: 700px){
    padding: 5px;
  }

  width: 100%;
  padding: 40px;
  justify-content: center;
  align-items: center;

`
export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  header {
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    small {
      border-left: 2px solid #777777;;
      padding-left: 5px;
      margin-left: 15px;
      color: #777777;
    }
  }


  form {
    @media(max-width: 900px){
      width: 80%;
    }

    width: 50%;
    display: flex;

    flex-direction: column;


    input {
      padding: 5px;
      margin: 5px 0;
      width: 100%;
  }

    label {
      font-size: 16px;
    }

    textarea {
      padding: 5px;
      resize: vertical;
      height: 150px;
    }

    button {
      margin-top: 15px;
      background: #00BFFF;
      font-weight: bold;
      color: #FFFFFF;
      border: 0;
      padding: 10px;

      &:hover {
        background: ${lighten(0.2, '#00BFFF')};
      }
    }
  }

`
export const Location = styled.div`
  width: 40%;
  height: 200px;

`
