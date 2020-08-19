import { action } from 'typesafe-actions'
import { RepositoriesTypes, SignUp, Data, Address } from './types'

export const signUpRequest = (data: SignUp) => action(RepositoriesTypes.SIGNUP_REQUEST, { data })
export const signUpFailure = () => action(RepositoriesTypes.SIGNUP_FALIURE)
export const signUpSuccess = () => action(RepositoriesTypes.SIGNUP_SUCCESS)
export const requestData = (data: Data) => action(RepositoriesTypes.REQUEST_DATA, { data })
export const requestAddress = (address: Address) => action(RepositoriesTypes.REQUEST_ADDRESS, { address })
