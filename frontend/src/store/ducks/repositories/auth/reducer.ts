import produce from 'immer'
import { RepositoriesTypes } from './types'
const INITIAL_VALUES = {
  loading: false

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

      default:
    }
  })
}
