import styled from 'styled-components'
import { darken } from 'polished'

export const Section = styled.div`
  background:  #FFFFFF;
  display: flex;
  flex-direction: column;
  width: 1000px;
`

export const Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;


  img {
    width: 100%;
    border-radius: 70px 0 70px 0;
  }

`
export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns:  repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
  background: #FFFFFF;
  width: 100%;
  padding: 20px;
`

export const ProductGridLarge = styled.div`
  display: grid;
  grid-template-columns:  repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 20px;
  background: #FFFFFF;
  width: 100%;
  padding: 20px;
`

export const Product = styled.div`
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

export const Search = styled.div`
  width: 20%;
  margin-right: 30px;


  span {
    svg {
      color: #FFFFFF;
    }

    button {
      background:  #00BFFF;
      color: #FFFFFF;
      text-align: center;
      width: 100%;
      padding: 10px;
      margin-bottom: 20px;
      border: 0;
    }
  }

  strong {
    width: 100%;
    background: #00BFFF;
    display: block;
    color: #FFFFFF;
    font-weight: bold;
    text-align: center;
    font-size: 15px;
    padding: 5px;
  }

  ul {
    list-style: none;
    padding: 20px;
    li {
      color: #777777;
      font-size: 14px;
      line-height: 30px;
    }
  }

  div {
    background: #FFFFFF;
    color: #555484;
    display: flex;
    flex-direction: column;
    padding: 20px;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 50px;
      color: black;
      background: #ADD8E6;
      font-weight: bold;
      font-size: 13px;
      &:hover {
        color: ${darken(0.2, '#ADD8E6')};

      }
    }
 }
  `
export const Navigator = styled.div`
  margin-top: 10px;
  margin-right: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: #363636;

  button {
    background: none;
    border: 0;
    margin: 0 15px;
    display: flex;
    align-items;

    svg {
      color: #363636;
    }
  }

  #limit-page {
    visibility: hidden;
  }
`
export const PriceSearch = styled.div`
width: 100%;
  button {
    color: #777777;
    width: 100%;
    background: none;
    font-size: 11px;
    margin: 10px;
    border: 0;

    &:hover {
      color: ${darken(0.5, '#777777')};
    }
  }
`

export const WithoutProduct = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

  strong {
    color: #777777;
    margin: 10px;
  }

  svg {
    color: #777777;
  }
`
export const ProductLarge = styled.div`
 width: 350px;

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
