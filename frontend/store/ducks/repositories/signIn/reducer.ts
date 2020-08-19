import produce from 'immer'
import { RepositoriesTypes } from './types'
import { AnyAction } from 'redux'

export const INITIAL_VALUES = {
  signed: false,
  profile: []
}

export default function signIn (state = INITIAL_VALUES, action: AnyAction | any) {
  return produce(state, draft => {
    switch (action.type) {
      case RepositoriesTypes.SIGNIN_SUCCESS: {
        draft.signed = true
        draft.profile = action.payload.data 
        break
      }
      case RepositoriesTypes.LOGOUT: {
        draft.signed = false
        draft.profile = []
        break
      }
      default:
    }
  })
}
