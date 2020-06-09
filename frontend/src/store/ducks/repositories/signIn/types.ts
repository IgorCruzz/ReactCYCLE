export enum RepositoriesTypes {
  SIGNIN_REQUEST = '@auth/SIGN_IN_REQUEST',
  SIGNIN_FAILURE = '@auth/SIGN_IN_FAILURE',
  SIGNIN_SUCCESS = '@auth/SIGN_IN_SUCCESS',
  LOGOUT = '@auth/LOGOUT'
}

export interface SignIn {
  email: string,
  password: string
}
