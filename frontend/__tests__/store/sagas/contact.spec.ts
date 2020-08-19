import 'babel-polyfill'
import mockAdapter from 'axios-mock-adapter'
import { runSaga } from 'redux-saga'
import { store } from '../../../store/ducks/repositories/contact/sagas'
import api from '../../../services/api'
import { toast } from 'react-toastify'
 

const apiMock = new mockAdapter(api)


describe('Contact', () => {
  it('should be able to create a contact', async () => {
    const dispatch = jest.fn()
    const toastMock = jest.spyOn(toast, 'success')

    apiMock.onPost('contact').reply(201)

    await runSaga({ dispatch }, store, { payload: { data: {
      name: "name",
      email: "email@gmail.com",
      phone: "2199999999",
      order: "122",
      message: "message"
    }}}).toPromise()   

    expect(toastMock).toHaveBeenCalled()    
  })

  it('throw toast error if has happened something wrong', async () => {
    const dispatch = jest.fn()
    const toastMock = jest.spyOn(toast, 'error')

    apiMock.onPost('contact').reply(401)

    await runSaga({ dispatch }, store, { payload: { data: {
      name: "name",
      email: "email@gmail.com",
      phone: "2199999999",
      order: "122",
      message: "message"
    }}}).toPromise()

   

    expect(toastMock).toHaveBeenCalled()  
  })
})