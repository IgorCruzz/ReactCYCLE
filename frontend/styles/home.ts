import styled from 'styled-components' 

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
`

export const Content = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    margin: 20px 0;
  }
  a {
    &:hover {
      opacity: 0.7;
    }
  }
`