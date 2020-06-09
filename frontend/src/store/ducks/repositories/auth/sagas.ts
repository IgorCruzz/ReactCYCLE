import { all, call, takeLatest, put } from 'redux-saga/effects'
import { RepositoriesTypes } from './types'
import api from '../../../../services/api'
import { toast } from 'react-toastify'

import { signUpSuccess, signUpFailure } from './actions'

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

export default all([
  takeLatest(RepositoriesTypes.SIGNUP_REQUEST, store)
])
