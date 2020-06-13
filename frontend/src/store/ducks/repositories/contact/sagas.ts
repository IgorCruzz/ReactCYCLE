import { takeLatest, all, call } from 'redux-saga/effects'
import { RepositoriesTypes } from './types'
import { AnyAction } from 'redux'
import api from '../../../../services/api'
import { toast } from 'react-toastify'

export function * store (action: AnyAction) {
  try {
    yield call(api.post, 'contact', action.payload.data)
    toast.success('Mensagem enviada')
  } catch (err) {
    toast.error('Insira os dados corretamente')
  }
}

export default all([
  takeLatest(RepositoriesTypes.REQUEST_CONTACT, store)
])
