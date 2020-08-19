import { all, call, takeLatest, put } from 'redux-saga/effects'
import { RepositoriesTypes } from './types' 
import api from '../../../../services/api'
import { toast } from 'react-toastify'
import { signUpSuccess, signUpFailure } from './actions'
import { push } from 'react-router-redux'

export function * store (action: any) {
  try {
    yield call(api.post, 'users', action.payload.data)

    yield put(signUpSuccess())
    toast.success('Conta criada com sucesso!')
  } catch (err) {
    yield put(signUpFailure())
    toast.error('Erro ao criar conta!')
  }
}

export function * create (action: any) {
  try {
    yield call(api.post, 'users', action.payload.address)
    toast.success('Conta criada com sucesso!!!')
    push('/checkout')
  } catch (err) {
    toast.error('Erro ao criar a conta')
  }
}

export default all([
  takeLatest(RepositoriesTypes.SIGNUP_REQUEST, store),
  takeLatest(RepositoriesTypes.REQUEST_ADDRESS, create)
])
