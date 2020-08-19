import 'babel-polyfill'
import mockAdapter from 'axios-mock-adapter'
import { runSaga } from 'redux-saga'
import { signUpFailure, signUpSuccess } from '../../../store/ducks/repositories/auth/actions'
import { store, create } from '../../../store/ducks/repositories/auth/sagas'
import api from '../../../services/api'
import { toast } from 'react-toastify'

const apiMock = new mockAdapter(api)

describe('Auth', () => {
  it('dispatch signUpSuccess if everything has been passed correctly', async () => {
    const dispatch = jest.fn()
    const toastMock = jest.spyOn(toast, 'success')

    apiMock.onPost('users').reply(201)

    await runSaga({ dispatch }, store, { payload: { data: {
      name: "name",
      email: "email@gmail.com",
      confirmEmail: "email@gmail.com",
      password: "123456789",
      confirmPassword: "123456789",
      cpf: 99999999999,
      phone: 99999999999,
      gender: "male",
      birth: "09031993",
      cep: 2545455,
      address: "address",
      number: 819,
      complement: "complement",
      referency: "referency",
      neighborhood: "neighborhood",
      city: "city",
      state: "RJ" 
    }}}).toPromise()

    expect(dispatch).toHaveBeenCalledWith(signUpSuccess())
    expect(toastMock).toHaveBeenCalled()
  })

  it('dispatch signUpFailure if anything has been passed incorrectly', async () => {
    const dispatch = jest.fn()
    const toastMock = jest.spyOn(toast, 'error')

    apiMock.onPost('users').reply(401)

    await runSaga({ dispatch }, store, { payload: { data: {
      name: "name",
      email: "email@gmail.com",
      confirmEmail: "email@gmail.com",
      password: "123456789",
      confirmPassword: "123456789",
      cpf: 99999999999,
      phone: 99999999999,
      gender: "male",
      birth: "09031993",
      cep: 2545455,
      address: "address",
      number: 819,
      complement: "complement",
      referency: "referency",
      neighborhood: "neighborhood",
      city: "city",
      state: "RJ" 
    }}}).toPromise()

    expect(dispatch).toHaveBeenCalledWith(signUpFailure())
    expect(toastMock).toHaveBeenCalled()
  })

  it('dispatch signUpSuccess if everything has been passed correctly', async () => {
    const dispatch = jest.fn()
    const toastMock = jest.spyOn(toast, 'success')

    apiMock.onPost('users').reply(201)

    await runSaga({ dispatch }, create, { payload: { address: {
      name: "name",
      email: "email@gmail.com",
      confirmEmail: "email@gmail.com",
      password: "123456789",
      confirmPassword: "123456789",
      cpf: 99999999999,
      phone: 99999999999,
      gender: "male",
      birth: "09031993",
      cep: 2545455,
      address: "address",
      number: 819,
      complement: "complement",
      referency: "referency",
      neighborhood: "neighborhood",
      city: "city",
      state: "RJ" 
    }}}).toPromise()

    expect(toastMock).toHaveBeenCalled()
  })

  it('dispatch Toast error if anything has been passed incorrectly', async () => {
    const dispatch = jest.fn()
    const toastMock = jest.spyOn(toast, 'error')

    apiMock.onPost('users').reply(401)

    await runSaga({ dispatch }, create, { payload: { address: {
      name: "name",
      email: "email@gmail.com",
      confirmEmail: "email@gmail.com",
      password: "123456789",
      confirmPassword: "123456789",
      cpf: 99999999999,
      phone: 99999999999,
      gender: "male",
      birth: "09031993",
      cep: 2545455,
      address: "address",
      number: 819,
      complement: "complement",
      referency: "referency",
      neighborhood: "neighborhood",
      city: "city",
      state: "RJ" 
    }}}).toPromise()

    expect(toastMock).toHaveBeenCalled()
  })
})