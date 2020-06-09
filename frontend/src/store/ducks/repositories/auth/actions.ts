import { action } from 'typesafe-actions'
import { RepositoriesTypes, SignUp } from './types'

export const signUpRequest = (data: SignUp[]) => action(RepositoriesTypes.SIGNUP_REQUEST, { data })
export const signUpFailure = () => action(RepositoriesTypes.SIGNUP_FALIURE)
export const signUpSuccess = () => action(RepositoriesTypes.SIGNUP_SUCCESS)
