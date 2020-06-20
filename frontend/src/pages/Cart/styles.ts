import styled from 'styled-components'
import { darken } from 'polished'
export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`
export const Content = styled.div`

  width: 80%;
  padding: 20px;

  h1 {
   color: #1C1C1C;
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    a {
    text-decoration: none;
    color: #000000;
    font-size: 15px;
  }

  button {
    background: #00BFFF;
    color: #FFFFFF;
    font-weight: bold;
    border: 0;
    padding: 10px;
  }
  }
   span {
     display: flex;
     justify-content: flex-end;
     margin: 10px;
   }

  #tableResponsive {
    width: 100%;
    overflow-x: auto;
    border-spacing: 0;

    table {
    margin: 25px;
    width: 100%;
    font-size: 15px;
    border-collapse: collapse;

      thead {
        text-align: left;
        color: #FFFFFF;
        background:  #00BFFF;

        tr {
          height: 40px;

          th {
            padding: 5px;
          }
        }

      }

      tbody {

        tr {
          background: #EEEEEE;

          &:hover {
            background: ${darken(0.1, '#EEEEEE')};
          }


          td {
            padding: 5px;
            div {
              @media(max-width: 1100px){
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
              }
              width: 100px;
            }
            button {
              background: none;
              border: 0;

              display: flex;
              align-items: center;

              svg {
                color: #000000;
              }
            }

            img {
              border-radius: 10px;
              width: 100px;
              height: 100px;
            }
            input {
              width: 50px;
              padding-left: 5px;
            }
            svg {
              color: #1C1C1C;
            }
        }
        }
      }
  }
  }

`
export const NoProduct = styled.div`
  @media(max-width: 750px){
    display: flex;
    text-align:center;
  }

  width: 80%;
  height: 400px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #808080;

  svg {
    color: #808080;
    height: 200px;
    width: 200px;
  }
`
