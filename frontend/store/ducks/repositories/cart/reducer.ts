import produce from 'immer'
import { RepositoriesTypes, Cart } from './types'
 

interface ICart {
  cart: Cart[]
}

export const INITIAL_VALUES: ICart = {
  cart: []
}

export default function CartA (state = INITIAL_VALUES, action: any) {
  return produce(state, draft => {
    switch (action.type) {
      case RepositoriesTypes.ADD_PRODUCT: {
        const productIndex = draft.cart.findIndex((product: Cart) => product.id === action.payload.data.id)

        if (productIndex >= 0) {
          draft.cart[productIndex].amount += 1
        } else {
          draft.cart.push({
            ...action.payload.data,
            amount: 1
          })
        }

        break
      }
      case RepositoriesTypes.REMOVE_PRODUCT: {
        const productIndex = draft.cart.findIndex((product: Cart) => product.id === action.payload.id)

        if (productIndex >= 0) {
          draft.cart.splice(productIndex, 1)
        }
        break
      }
      case RepositoriesTypes.INCREMENT_AMOUNT: {
        const productIndex = draft.cart.findIndex((product: Cart) => product.id === action.payload.id)

        if (draft.cart[productIndex].amount < draft.cart[productIndex].quantity) {
          draft.cart[productIndex].amount += 1
        }

        if (draft.cart[productIndex].amount === Number(draft.cart[productIndex].quantity)) {
          alert('Voce atingiu o limite do estoque')
        }
        break
      }
      case RepositoriesTypes.DECREMENT_AMOUNT: {
        const productIndex = draft.cart.findIndex((product: Cart) => product.id === action.payload.id)

        if (draft.cart[productIndex].amount > 1) {
          draft.cart[productIndex].amount -= 1
        }

        break
      }

      default:
    }
  })
}
