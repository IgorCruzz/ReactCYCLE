import { action } from 'typesafe-actions'
import { RepositoriesTypes, Product } from './types'

export const createProductRequest = (data: Product) => action(RepositoriesTypes.PRODUCT_STORE_REQUEST, { data })
export const createProductFailure = () => action(RepositoriesTypes.PRODUCT_STORE_FAILURE)
export const createProductSuccess = () => action(RepositoriesTypes.PRODUCT_STORE_SUCCESS)
