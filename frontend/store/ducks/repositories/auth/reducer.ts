import produce from 'immer'
import { RepositoriesTypes } from './types'
 

export const INITIAL_VALUES = {
  loading: false,
  user: {}
}

export default function auth (state = INITIAL_VALUES, action: any) {
  return produce(state, draft => {
    switch (action.type) {
      case RepositoriesTypes.SIGNUP_REQUEST: {
        draft.loading = true
        break
      }
      case RepositoriesTypes.SIGNUP_FALIURE: {
        draft.loading = false
        break
      }
      case RepositoriesTypes.SIGNUP_SUCCESS: {
        draft.loading = false
        break
      }
      case RepositoriesTypes.REQUEST_DATA: {
        draft.user = action.payload.data
        break
      }
      case RepositoriesTypes.REQUEST_ADDRESS: {
        const data = {
          ...draft.user,
          ...action.payload.address
        }
        action.payload.address = data

        draft.user = data
        break
      }

      default:
    }
  })
}
