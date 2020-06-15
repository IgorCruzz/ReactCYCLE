import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ProductGridLarge, Product, Search, Image, Section, Navigator, PriceSearch, WithoutProduct, ProductLarge } from '../../styles/page'
import { AiOutlinePlusSquare } from 'react-icons/ai'
import { FaRegSadTear } from 'react-icons/fa'
import { GrPrevious, GrNext } from 'react-icons/gr'
import Page from '../../components/page'
import bikes from '../../assets/bikes.png'
import NewProduct from '../NewProduct'
import ModalProduct from '../Product'
import { useSelector } from 'react-redux'
import api from '../../services/api'

interface rootState {
  signIn: {
    signed: boolean
  }
}

interface Product {
  id: number,
  name: string,
  price: number,
  quantity: number,
  avatar_url: any,
}

const Home: React.FC = () => {
  const [open, setOpen] = useState(false)
  const [openProduct, setOpenProduct] = useState(false)
  const [products, setProducts] = useState<Product[]>([])
  const [product, setProduct] = useState({ id: 1, avatar_url: '', name: '', price: 0, quantity: 0 })
  const signed = useSelector((state: rootState) => state.signIn.signed)
  const [page, setPage] = useState(1)
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(999999)

  useEffect(() => {
    async function loadProducts () {
      const response = await api.get<any>(`product?category=Bicicletas&page=${page}&min=${min}&max=${max}`)
      setProducts(response.data)
    }
    loadProducts()
  }, [page, min, max])

  return (
    <Page>
      {open && <NewProduct close={() => setOpen(false)} category="Bicicletas" />}
      {openProduct && <ModalProduct product={product} close={() => setOpenProduct(false)}/>}
      <Search>
        {signed && (
          <span>
            <button type="button" onClick={ () => setOpen(true)}>
              <AiOutlinePlusSquare />
              <strong>Adicionar Produto</strong>
            </button>
          </span>
        )}

        <div>
          <strong>Categorias</strong>

          <div>
            <Link to="/pecas">Peças</Link>
            <Link to="/equipamentos">Equipamentos</Link>
            <Link to="/bikes">Bicicletas</Link>
          </div>

          <strong>Faixa de Preço</strong>

          <PriceSearch>
            <button onClick={() => {
              setMin(25)
              setMax(50)
            }}>de R$ 25,00 até R$ 49,99</button>

            <button onClick={() => {
              setMin(50)
              setMax(70)
            }}>de R$ 50,00 até R$ 69,99</button>

            <button onClick={() => {
              setMin(70)
              setMax(100)
            }}>de R$ 70,00 até R$ 99,99</button>

            <button onClick={() => {
              setMin(100)
              setMax(200)
            }}>de R$ 100,00 até R$ 199,99</button>

            <button onClick={() => {
              setMin(200)
              setMax(400)
            }}>de R$ 200,00 até R$ 399,99</button>

            <button onClick={() => {
              setMin(400)
              setMax(600)
            }}>de R$ 400,00 até R$ 599,99</button>

            <button onClick={() => {
              setMin(600)
              setMax(99999)
            }}>de R$ 600,00 acima</button>
          </PriceSearch>
        </div>
      </Search>

      <Section>
        <Image>
          <img src={bikes} alt="bikes" />
        </Image>

        <Navigator>
          <button id={page <= 1 ? 'limit-page' : ''} onClick={() => setPage(page - 1)}><GrPrevious /></button>
          <strong>{page}</strong>
          <button id={products?.length < 12 ? 'limit-page' : ''} onClick={() => setPage(page + 1)}><GrNext /></button>
        </Navigator>
        {products.length === 0 ? (
          <WithoutProduct>
            <strong>Não existem produtos nessa categoria ou na faixa de preço</strong>
            <FaRegSadTear size={100}/>
          </WithoutProduct>
        ) : (
          <ProductGridLarge>
            {products?.map(product => (

              <ProductLarge key={product.id} onClick={() => {
                setProduct({ id: product.id, avatar_url: product.avatar_url, name: product.name, price: product.price, quantity: product.quantity })
                setOpenProduct(true)
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
              </ProductLarge>

            ))}

          </ProductGridLarge>

        )}
      </Section>
    </Page>
  )
}

export default Home
