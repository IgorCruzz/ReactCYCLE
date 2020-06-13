import produce from 'immer'
import { RepositoriesTypes } from './types'
import { AnyAction } from 'redux'
const INITIAL_VALUES = {
  loading: false
}

export default function product (state = INITIAL_VALUES, action: AnyAction) {
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
