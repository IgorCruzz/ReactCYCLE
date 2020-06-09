import React from 'react'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
import { Container, Content } from './styles'

const Payment: React.FC = () => {
  return (
    <Container>
      <Content>
        <IoMdCheckmarkCircleOutline size={250} />
        <h1>Compra finalizada!</h1>
      </Content>
    </Container>
  )
}

export default Payment
