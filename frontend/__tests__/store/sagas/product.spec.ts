import 'babel-polyfill'
import { store } from '../../../store/ducks/repositories/product/sagas'
import mockAdapter from 'axios-mock-adapter'
import api from '../../../services/api'
import { runSaga } from 'redux-saga'
import { createProductSuccess, createProductFailure } from '../../../store/ducks/repositories/product/actions'

const apiMock = new mockAdapter(api)
 

describe('Product', () => {
  it('dispatch createProductSuccess if everything has been correct', async () => {
    const dispatch = jest.fn()

    apiMock.onPost('product').reply(201)

    await runSaga({ dispatch }, store, { payload: { data: {
      name: "ProductName",
      quantity: 10,
      price: 500.50,
      category: "Bicicletas",
      avatar: 5
    }}}).toPromise()

    expect(dispatch).toHaveBeenCalledWith(createProductSuccess())
  })

  it('dispatch createProductFailure if anything has incorrect', async () => {
    const dispatch = jest.fn()

    apiMock.onPost('product').reply(401)

    await runSaga({ dispatch }, store, { payload: { data: {
      name: "ProductName",
      quantity: 10,
      price: 500.50,
      category: "Bicicletas",
      avatar: 5
    }}}).toPromise()

    expect(dispatch).toHaveBeenCalledWith(createProductFailure())
  })
})