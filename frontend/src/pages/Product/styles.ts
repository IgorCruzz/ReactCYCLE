import styled, { keyframes } from 'styled-components'
import { lighten } from 'polished'

export const Container = styled.div`
  width: 100%;
  height: 100%;
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
    width: 800px;
  }
`

export const Content = styled.div`
 @media(max-width: 360px){
      padding: 20px;
      width: 100%;
    }
  @media(max-width: 700px){
    width: 100%;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  padding: 20px;
  width: 800px;
  animation: ${animate} 0.1s linear;
  position: relative;
  display: flex;
  background: #FFFFFF;

  #close {
    height: 50px;
    width: 50px;
    position: absolute;
    right: 0;
    top: 0;
    border: 0;
    background: none;
    font-size: 30px;

  }

  img {
    @media(max-width: 900px){
      margin-top: 20px;
      height: 200px;
      width: 100%;
    }
    height: 400px;
    width: 400px;
  }

  aside {
    @media(max-width: 700px){
      width: 100%;
      margin-left: 0;
    }
    margin-left: 35px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    div {
      p {
      @media(max-width: 700px){
        text-align:center;
      }
      font-size: 30px;
      margin-top: 20px;
      font-weight: bold;
    }
      small {
        font-size: 13px;
        color: #777777;
      }
    }

    h1 {
      @media(max-width: 700px){
        margin: 15px;
      }
      color: #D2691E;
    }

    button {
      @media(max-width: 700px){
        width: 100%;
        margin-top: 5px;
      }

      margin-top: 20px;
      width: 100%;
      padding: 10px;
      font-weight: bold;
      text-align: center;
      background:  #00BFFF;
      color: #FFFFFF;
      border: 0;

      &:hover {
        background: ${lighten(0.1, '#00BFFF')};
      }
    }
  }
`
export const Unavailable = styled.div`
  display: flex;
  color: #FFFFFF;
  width: 100%;
  padding: 15px;
  font-weight: bold;
  background: #B22222;
`
export const Available = styled.div`
  @media(max-width: 700px){
    margin: 10px;
  }
  display: flex;
  color: green;
`
