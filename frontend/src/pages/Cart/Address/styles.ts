import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
`
export const Content = styled.div`
  width: 50%;

  a {
    text-decoration: none;
    color: #000000;
    display: flex;
    align-items: center;
    font-size: 15px;

    svg {
      margin-right: 10px;
    }


    &:hover {
      color: #00BFFF;
    }
  }

  form {
    border: 1px solid #F8F8FF;
    padding: 20px;
    font-size: 15px;

    input {
      margin: 7px 0;
      height: 35px;
      border-radius: 10px;
      background: #F8F8FF;
      border: 0;
      padding-left: 15px;
    }


    button {
      margin: 15px 0;
      width: 100%;
      color: #FFFFFF;
      font-weight: bold;
      padding: 10px 0;
      background: #00BFFF;
      border: 0;
    }
  }
`
