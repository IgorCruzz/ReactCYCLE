import React, { useState } from 'react'
import { Container, Content } from './styles'
import { useHistory } from 'react-router-dom'
import Cards, { Focused } from 'react-credit-cards'

const Checkout: React.FC = () => {
  const [number, setNumber] = useState('')
  const [name, setName] = useState('')
  const [expiry, setExpiry] = useState('')
  const [cvc, setCvc] = useState('')
  const [focused, setFocused] = useState<Focused>('name')
  const history = useHistory()

  const handleSubmit = (e: any) => {
    e.preventDefault()

    history.push('/finalizado')
  }

  return (
    <Container>

      <Content>

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

      </Content>

    </Container>
  )
}

export default Checkout
