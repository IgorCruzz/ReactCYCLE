import React from 'react'
import Head from 'next/head'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
import { Container, Content } from '../styles/payment'

const Payment: React.FC = () => {
  return (
    <>
    <Head>
      <title>ReactCycle - Pagamento</title>
    </Head>
    <Container>
      <Content>
        <IoMdCheckmarkCircleOutline size={250} />
        <h1>Compra finalizada!</h1>
      </Content>
    </Container>
    </>
  )
}

export default Payment