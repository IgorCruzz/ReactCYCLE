import produce from 'immer'
import { RepositoriesTypes } from './types' 

export const INITIAL_VALUES = {
  name: ''
}

export default function Search (state = INITIAL_VALUES, action: any) {
  return produce(state, draft => {
    switch (action.type) {
      case RepositoriesTypes.SEARCH_REQUEST: {
        draft.name = action.payload.data     
        break
      }
      default:
    }
  })
}
