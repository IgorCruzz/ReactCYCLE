import { action } from 'typesafe-actions'
import { RepositoriesTypes, SignIn } from './types'

export const signInRequest = (data: SignIn) => action(RepositoriesTypes.SIGNIN_REQUEST, { data })
export const signInFailure = () => action(RepositoriesTypes.SIGNIN_FAILURE)
export const signInSuccess = (data: any) => action(RepositoriesTypes.SIGNIN_SUCCESS, { data })

export const logout = () => action(RepositoriesTypes.LOGOUT)
