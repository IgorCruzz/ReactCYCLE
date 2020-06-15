import React from 'react'
import { AiFillPlusCircle, AiFillMinusCircle, AiOutlineArrowLeft, AiFillCloseCircle } from 'react-icons/ai'
import { FaRegSadTear } from 'react-icons/fa'
import { Container, Content, NoProduct } from './styles'
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { removeProduct, incrementAmount, decrementAmount } from '../../store/ducks/repositories/cart/actions'

interface rootState {
  cart: {
    cart: any
  }
}

const Cart: React.FC = () => {
  const products = useSelector((state: rootState) => state.cart.cart)
  const dispatch = useDispatch()
  const history = useHistory()

  return (
    <Container>
      {products.length === 0 ? (

        <NoProduct>
          <h1>Seu carrinho está vazio</h1>
          <FaRegSadTear />

        </NoProduct>
      )
        : (
          <Content>

            <h1>Carrinho</h1>

            <div id="tableResponsive">
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
              <strong>{products.reduce((sum: number, product: any) => sum + (Number(product.price) * product.amount), 0).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</strong>
            </span>

            <div>
              <Link to="/">
                <AiOutlineArrowLeft />
                      Continuar fazendo compra
              </Link>
              <button type="button" onClick={() => history.push('/checkout')}>Continuar</button>
            </div>

          </Content>
        )}

    </Container>
  )
}

export default Cart
