import React from 'react'
import Head from 'next/head'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
import styles from '../styles/payment.module.scss'

const Payment: React.FC = () => {
  return (
    <>
    <Head>
      <title>ReactCycle - Pagamento</title>
    </Head>
    <div id={styles.paymentContainer}>
      <div id={styles.paymentContent}>
        <IoMdCheckmarkCircleOutline size={250} />
        <h1>Compra finalizada!</h1>
      </div>
    </div>
    </>
  )
}

export default Payment