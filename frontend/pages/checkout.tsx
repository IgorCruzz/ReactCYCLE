import React, { useState } from 'react'
import styles from '../styles/checkout.module.scss'
import { useRouter } from 'next/router'
import Cards, { Focused } from 'react-credit-cards'
import Head from 'next/head'

const Checkout: React.FC = () => {
  const [number, setNumber] = useState('')
  const [name, setName] = useState('')
  const [expiry, setExpiry] = useState('')
  const [cvc, setCvc] = useState('')
  const [focused, setFocused] = useState<Focused>('name')
  const router = useRouter()

  const handleSubmit = (e: any) => {
    e.preventDefault()

    router.push('/finalizado')
  }

  return (
    <>
    <Head>
      <title>ReactCycle - Checkout</title>
    </Head>
    <div id={styles.checkoutContainer}>
      <div id={styles.checkoutContent}>

        <Cards
          number={number}
          name={name}
          expiry={expiry}
          cvc={cvc}
          focused={focused}
        />

        <form onSubmit={handleSubmit}>
          <input
            name="number"
            placeholder="Numero do cartão"
            type="text"
            onChange={(e: any) => setNumber(e.target.value)}
            onClick={() => setFocused('number') }
          />
          <input
            name="name"
            placeholder="Nome no cartão"
            type="text"
            onChange={(e: any) => setName(e.target.value)}
            onClick={() => setFocused('name') }
          />
          <div>
            <input
              name="expiry"
              placeholder="Validade"
              type="text"
              onChange={(e: any) => setExpiry(e.target.value)}
              onClick={() => setFocused('expiry') }
            />
            <input
              name="cvc"
              placeholder="Código de segurança"
              type="text"
              onChange={(e: any) => setCvc(e.target.value)}
              onClick={() => setFocused('cvc') }
            />
          </div>
          <button type="submit">Finalizar compra</button>
        </form>

      </div>

    </div>
    </>
  )
}

export default Checkout