import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { Container, Content, Available, Unavailable } from './styles'
import { useDispatch } from 'react-redux'
import { addProct } from '../../store/ducks/repositories/cart/actions'
import { useHistory } from 'react-router-dom'
import { BsCheck, BsX } from 'react-icons/bs'
import ReactImageMagnify from 'react-image-magnify'

interface Props extends RouteComponentProps {
  close: () => void,
  product: {
    id: number,
    avatar_url: string,
    name: string,
    price: number,
    quantity: number
  }
}

interface rootState {
  cart: {
    cart: {
      id: number,
      avatar_url: string,
      price: number,
      name: string,
      quantity: number
    }
  }
}

export const ModalProduct: React.FC<Props> = ({ close, product }: Props) => {
  const dispatch = useDispatch()
  const history = useHistory()

  const productData = { id: product.id, avatar_url: product.avatar_url, name: product.name, price: product.price, quantity: product.quantity }

  const handleCart = () => {
    dispatch(addProct(productData))
    history.push('/carrinho')
  }

  return (
    <Container>
      <Content>
        <button id="close" type="button" onClick={close}>X</button>
        <div>
          <ReactImageMagnify {...{
            smallImage: {
              isFluidWidth: false,
              src: product.avatar_url,
              width: 400,
              height: 400
            },
            largeImage: {
              src: product.avatar_url,
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
            <Available>
              <BsCheck />
              <strong>Produto disponivel</strong>
            </Available>
          )}

          <h1>{Number(product.price).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          })}</h1>
          {product.quantity >= 1 ? (
            <button type="button" onClick={() => handleCart()}>Adicionar ao carrinho</button>
          ) : (
            <Unavailable>
              <BsX />
              <strong>Produto indisponivel</strong>
            </Unavailable>
          )}

        </aside>
      </Content>
    </Container>
  )
}
export default ModalProduct
