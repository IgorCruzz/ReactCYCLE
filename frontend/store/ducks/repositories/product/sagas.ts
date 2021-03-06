import { takeLatest, call, put, all } from 'redux-saga/effects'
import { RepositoriesTypes } from './types'
import { createProductFailure, createProductSuccess } from './actions' 
import api from '../../../../services/api'

export function * store (action: any) {  try {
 
    yield call(api.post, 'product', action.payload.data)

    yield put(createProductSuccess())

    //window.location.reload()
  } catch (err) {
    yield put(createProductFailure())
  }
}

export default all([
  takeLatest(RepositoriesTypes.PRODUCT_STORE_REQUEST, store)
])
