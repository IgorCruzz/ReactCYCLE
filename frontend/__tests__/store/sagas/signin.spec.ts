import 'babel-polyfill' 
import MockAdapter from 'axios-mock-adapter'
import api from '../../../services/api'
import { runSaga } from 'redux-saga'
import { store } from '../../../store/ducks/repositories/signIn/sagas'
import { signInFailure, signInSuccess, signInRequest } from '../../../store/ducks/repositories/signIn/actions'

const apiMock = new MockAdapter(api)

describe('saga', () => {
  it('dispatch signInSuccess if data has passed correctly', async () => {
    const dispatch =  jest.fn()
   
    apiMock.onPost('session', { email: 'email@gmail.com', password: '123456789'}).reply(201, {
      id: 1,
      email: 'email@gmail.com', 
      password: '123456789',
      token: 'token'
    })    
    
    apiMock.onGet('user/1').reply(200, {
      id: 1,
      email: 'email@gmail.com', 
      password: '123456789',
      token: 'token'
    })

    await runSaga({ dispatch }, store,  { payload: {data: { email: 'email@gmail.com', password: '123456789'}}}).toPromise() 

    expect(dispatch).toHaveBeenCalledWith(signInSuccess({
      id: 1,
      email: 'email@gmail.com', 
      password: '123456789',
      token: 'token'
    }))
  })
  
  it( 'dispatch signInFailure if the data has any value incorrect', async () => {
    const dispatch = jest.fn()

    apiMock.onPost('session',  { email: 'email@gmail.com', password: 'wrong-password'}).reply(401)

    await runSaga({ dispatch }, store,  { payload: {data: { email: 'email@gmail.com', password: 'wrong-password'}}}).toPromise() 

    expect(dispatch).toHaveBeenCalledWith(signInFailure())
  })
})