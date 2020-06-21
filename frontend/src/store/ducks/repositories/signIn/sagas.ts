import { takeLatest, call, put, all } from 'redux-saga/effects'
import api from '../../../../services/api'
import { AnyAction } from 'redux'
import { RepositoriesTypes } from './types'
import { signInFailure, signInSuccess } from './actions'

export function * store (action: AnyAction) {
  try {
    const response = yield call(api.post, 'session', action.payload.data)

    const user = yield call(api.get, `users/${response.data.id}`)
    console.log(user)

    yield put(signInSuccess(user.data))
  } catch (erro) {
    yield put(signInFailure())
  }
}

export default all([
  takeLatest(RepositoriesTypes.SIGNIN_REQUEST, store)
])
