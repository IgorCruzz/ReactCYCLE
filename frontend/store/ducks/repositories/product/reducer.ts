import produce from 'immer'
import { RepositoriesTypes } from './types'
 

export const INITIAL_VALUES = {
  loading: false
}

export default function Product (state = INITIAL_VALUES, action: any) {
  return produce(state, draft => {
    switch (action.type) {
      case RepositoriesTypes.PRODUCT_STORE_REQUEST: {
        draft.loading = true
        break
      }
      case RepositoriesTypes.PRODUCT_STORE_FAILURE: {
        draft.loading = false
        break
      }
      case RepositoriesTypes.PRODUCT_STORE_SUCCESS: {
        draft.loading = false
        break
      }
      default:
    }
  })
}
