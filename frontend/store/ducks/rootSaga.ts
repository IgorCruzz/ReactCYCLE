import { all } from 'redux-saga/effects'

import auth from './repositories/auth/sagas'
import signIn from './repositories/signIn/sagas'
import product from './repositories/product/sagas'
import contact from './repositories/contact/sagas'

export default function * rootSaga () {
  return yield all({
    auth,
    signIn,
    product,
    contact

  })
}
