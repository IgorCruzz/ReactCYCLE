import { action } from 'typesafe-actions'
import { RepositoriesTypes } from './types'
export const searchRequest = (data: string) => action(RepositoriesTypes.SEARCH_REQUEST, { data })
