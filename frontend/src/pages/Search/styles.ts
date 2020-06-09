import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;


`

export const Content = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items:center;
  div {

    a {
      color: #FFFFFF;
      text-decoration: none;
    }
  }

  small {
    margin: 10px;
    font-size: 12px;
  }

`

export const Image = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;


  img {
    width: 70%;
    align-self: center;
    border-radius: 70px 0 70px 0;
  }

`

export const ProductGridLarge = styled.div`
  margin-top: 20px;
  width: 70%;
  display: grid;
  grid-template-columns:  repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
  background: #FFFFFF;
  padding: 20px;
  justify-content: center;
`
export const ProductList = styled.div`
  width: 250px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    border: 1px solid  #00BFFF;
  }

  div {
    height: 230px;
    width: 100%;

    img {
      width: 100%;
      height: 100%;
    }
  }

  p {
    margin-bottom: 10px;
    font-size: 15px;
    font-weight: bold;
  }

  small {
    color: #777777;
    text-decoration: line-through;
    font-size: 18px;
  }

  strong {
    color: #00BFFF;
  }
  `
export const NoFound = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #777777;
`
