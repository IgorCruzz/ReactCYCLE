export enum RepositoriesTypes {
  SIGNUP_REQUEST = '@auth/SIGN_UP_REQUEST',
  SIGNUP_FALIURE = '@auth/SIGN_UP_FAILURE',
  SIGNUP_SUCCESS = '@auth/SIGN_UP_SUCCESS',
  REQUEST_DATA = '@auth/REQUEST_DATA',
  REQUEST_ADDRESS = '@auth/REQUEST_ADDRESS'
}

export interface Data {
  name?: string

  email?: string

  password?: string

  cpf?: string

  cnpj?: string

  stateRegistration?: string

  companyName?: string

  phone?: string

  gender?: string

  birth?: number
}

export interface Address {
  cep?: string

  address?: string

  number?: number

  complement?: string

  referency?: string

  neighborhood?: string

  city?: string

  state?: string
}

export interface SignUp {
  name?: string

  email?: string

  password?: string

  cpf?: string

  cnpj?: string

  stateRegistration?: string

  companyName?: string

  phone?: string

  gender?: string

  birth?: number

  cep?: string

  address?: string

  number?: number

  complement?: string

  referency?: string

  neighborhood?: string

  city?: string

  state?: string

}
