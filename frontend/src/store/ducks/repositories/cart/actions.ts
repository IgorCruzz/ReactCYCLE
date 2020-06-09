import { action } from 'typesafe-actions'
import { RepositoriesTypes, Cart } from './types'

export const addProct = (data: Cart) => action(RepositoriesTypes.ADD_PRODUCT, { data })
export const removeProduct = (id: number) => action(RepositoriesTypes.REMOVE_PRODUCT, { id })
export const incrementAmount = (id: number) => action(RepositoriesTypes.INCREMENT_AMOUNT, { id })
export const decrementAmount = (id: number) => action(RepositoriesTypes.DECREMENT_AMOUNT, { id })
