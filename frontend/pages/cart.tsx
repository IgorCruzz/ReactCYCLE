import React, { useEffect } from 'react'
import { AiFillPlusCircle, AiFillMinusCircle, AiOutlineArrowLeft, AiFillCloseCircle } from 'react-icons/ai'
import { FaRegSadTear } from 'react-icons/fa'
import styles from '../styles/cart.module.scss'
import  Link  from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import { removeProduct, incrementAmount, decrementAmount } from '../store/ducks/repositories/cart/actions'
import PaypalButton from '../components/PaypalButton'

interface rootState {
  cart: {
    cart: any
  }
}

interface signedState {
  signIn: {
    signed: boolean
  }
}

const Cart: React.FC = () => {
  const products = useSelector((state: rootState) => state.cart.cart)
  const signed = useSelector((state: signedState) => state.signIn.signed)
  const dispatch = useDispatch()
  const router = useRouter()

  useEffect(() => {
    window.scrollTo(0, 600)
  }, [])

  return (
    <>
    <Head>
      <title>ReactCycle - Carrinho</title>
    </Head>
    <div id={styles.cartContainer}>
      {products.length === 0 ? (

        <div id={styles.cartNoProducts}>
          <h1>Seu carrinho está vazio</h1>
          <FaRegSadTear />
        </div>
      )
        : (
          <div id={styles.cartContent}>

            <h1>Carrinho</h1>

            <div id={styles.tableResponsive}>
              <table>
                <thead>
                  <tr>
                    <th>Foto</th>
                    <th>Produto</th>
                    <th>Quantidade</th>
                    <th>Preço</th>
                    <th>Subtotal</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {products.map((product: any) => (
                    <tr key={product.id}>
                      <td>
                        <img src={product.avatar_url} alt="img" />
                      </td>
                      <td>{product.name}</td>
                      <td>
                        <div>
                          <button type="button" onClick={() => dispatch(decrementAmount(product.id))}><AiFillMinusCircle /></button>
                          <input type="number" readOnly value={product.amount} />
                          <button type="button" onClick={() => dispatch(incrementAmount(product.id))}><AiFillPlusCircle /></button>
                        </div>
                      </td>
                      <td>{Number(product.price).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</td>
                      <td>{Number(product.amount * product.price).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</td>
                      <td> <button type="button"><AiFillCloseCircle size={30} color="#FF0000" onClick={() => dispatch(removeProduct(product.id))} /></button>  </td>
                    </tr>
                  ))}

                </tbody>
              </table>
            </div>

            <span>
              <strong>Total: {products.reduce((sum: number, product: any) => sum + (Number(product.price) * product.amount), 0).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</strong>
            </span>

            <div>
              <Link href="/">
                <a>
                <AiOutlineArrowLeft />
                      Continuar fazendo compra
                </a>
              </Link>
              <button type="button" onClick={() => {
                signed ? router.push('/checkout')
                  : router.push('/client')
              }}>Continuar</button>
            </div>

          </div>
        )}

    </div>
    </>
  )
}

export default Cart