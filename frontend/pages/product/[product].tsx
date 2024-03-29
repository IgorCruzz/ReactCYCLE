import React, { useEffect } from 'react'
import Head from 'next/head'
import { GetStaticPaths, GetStaticProps } from 'next'
import { RouteComponentProps } from '@reach/router'
import styles from '../../styles/product.module.scss'
import { useDispatch } from 'react-redux'
import { addProct } from '../../store/ducks/repositories/cart/actions'
import { useRouter } from 'next/router'
import { BsCheck, BsX } from 'react-icons/bs'
import ReactImageMagnify from 'react-image-magnify'
import api from '../../services/api'

interface Props extends RouteComponentProps { 
  product: {
    id: number,
    avatar_data: {
      created_at: string
      id: number
      name: string
      updated_at: string
      url: string
    },
    name: string,
    price: number,
    quantity: number
  }
}

export const getStaticPaths: GetStaticPaths  = async () => {
  const products =  await api.get('/product')

  const paths = products.data.map(product => {  
     return {
      params: {
        product: product.id.toString()
      } 
     } 
  })
 
  return {
    paths,
    fallback: false
    
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  
  const product = await api.get(`/product/${params.product}`) 

  return {
    props: {
      product: product.data
    }
  }
}

export const Product: React.FC<Props> = ({ product }) => {
  const dispatch = useDispatch()
  const router = useRouter()   

  const productData = { id: product.id, avatar_url: product.avatar_data.url, name: product.name, price: product.price, quantity: product.quantity }

 

  const handleCart = () => {
    dispatch(addProct(productData))
    router.push('/cart')
  }

  return (
    <div id={styles.productContainer}>
      <div id={styles.productContent}>    
        <div>
          <ReactImageMagnify {...{
            smallImage: {
              isFluidWidth: false,
              src: product.avatar_data.url

            },
            largeImage: {
              src: product.avatar_data.url,
              width: 500,
              height: 500
            }
          }} />
        </div>

        <aside>
          <div>
            <p>{product.name}</p>
            <small>codigo: {product.id}</small>
          </div>
          {product.quantity >= 1 && (
            <div id={styles.productAvailable}>
              <BsCheck />
              <strong>Produto disponivel</strong>
            </div>
          )}

          <h1>{Number(product.price).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          })}</h1>
          {product.quantity >= 1 ? (
            <button type="button" onClick={() => handleCart()}>Adicionar ao carrinho</button>
          ) : (
            <div id={styles.productUnavailable}>
              <BsX />
              <strong>Produto indisponivel</strong>
            </div>
          )}

        </aside>
      </div>
    </div>
  )
}
export default Product