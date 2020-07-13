import styled from 'styled-components'

export const Container = styled.div`
  @media(max-width: 900px){
    padding: 15px;
  }
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
`
export const Content = styled.div`
  @media(max-width: 900px){
    width: 100%;
  }
  width: 50%;
  form {
    border: 1px solid #F8F8FF;
    padding: 20px;
    font-size: 15px;
    #email {
      @media(max-width: 400px){
        flex-direction: column;
      }
      align-items: center;
      display: flex;
     span {
      @media(max-width: 400px){
         width: 100%;
       }
        width: 50%;
        margin-left: 2px;
      }
    }
    #password {
      @media(max-width: 400px){
        flex-direction: column;
      }
      align-items: center;
      display: flex;
     span {
       @media(max-width: 400px){
         width: 100%;
       }
        width: 50%;
        margin-left: 2px;
      }
    }
    #cnpj {
      @media(max-width: 1200px){
        flex-direction: column;
      }
      margin-top: 10px;
      display: flex;
      align-items: center;
    }
    select {
      padding: 10px;
      background: #F8F8FF;
      border-radius: 10px;
      margin-left: 10px;
    }
    #radio {
      display: flex;
      align-items: center;
      justify-content: start;
      label {
        margin: 0 10px;
      }
    }
    input {
      margin: 7px 0;
      height: 35px;
      border-radius: 10px;
      background: #F8F8FF;
      border: 0;
      padding-left: 15px;
    }
    #checkCpf {
      @media(max-width: 1200px){
        flex-direction: column;
      }
      display: flex;
      justify-content: space-between;
      input {
      width: 100%;
      margin-right: 15px;
      }
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