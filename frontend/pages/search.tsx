import React, { useEffect, useState } from 'react'  
import { useSelector } from 'react-redux'
import Head from 'next/head'
import api from '../services/api' 
import { useRouter } from 'next/router'
import searchImage from '../public/assets/search.png'

import styles from  '../styles/search.module.scss'

interface RootState {
  search: {
    name: string
  }
}

interface Product {
  id: number,
  name: string,
  price: number,
  quantity: number,
  avatar_url: string
}

const SearchList: React.FC = () => {
  const search = useSelector((state: RootState) => state.search.name)
  const [products, setProducts] = useState<Product[]>([])
  const router = useRouter()
  

  useEffect(() => {
    if (search === '') {
      return
    }

    api.get(`product/busca?name=${search}`).then(response => {
      setProducts(response.data)     
    })
  }, [search])

  return (
    <>
    <Head>
      <title>ReactCycle - Buscar</title>
    </Head>
    <div id={styles.searchContainer}>
      <div id={styles.searchContainer}>       
        <div id={styles.searchImage}>
          <img src={searchImage} alt="banner" />
        </div>
        {products.length > 0 ? (
          <>
            <small>Voce pesquisou por: <strong>{search}</strong></small>

            <div id={styles.productGridLarge}>
              {products?.map(product => (

                <div id={styles.productLarge} key={product.id} onClick={() => {
                  router.push(`/product/${product.id}`) 
                }}>
                  <div >
                    <img
                      src={product.avatar_url}
                      alt="avatar" />
                  </div>
                  <p>{product.name}</p>
                  <strong>{Number(product.price).toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  })}</strong>
                </div>

              ))}

            </div>
          </>
        )
          : (
            <div id="no-products">
              <small>Voce pesquisou por: <strong>{search}</strong></small>
              <strong>Não há produtos com este nome</strong>
            </div>
          )}

      </div>
    </div>
    </>
  )
}

export default SearchList