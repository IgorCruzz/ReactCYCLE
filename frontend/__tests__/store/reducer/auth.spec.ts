import Auth, { INITIAL_VALUES } from '../../../store/ducks/repositories/auth/reducer'
import * as AuthTypes from '../../../store/ducks/repositories/auth/actions'


describe('Auth', () => {
  it('SIGNUP_REQUEST', () => {
    const state = Auth(INITIAL_VALUES, AuthTypes.signUpRequest({
      name: "name",
      email: "email@gmail.com",     
      password: "123456789",    
      cpf: '99999999999',
      phone: '99999999999',
      gender: "male",
      birth: 19031993,
      cep: '2545455',
      address: "address",
      number: 819,
      complement: "complement",
      referency: "referency",
      neighborhood: "neighborhood",
      city: "city",
      state: "RJ" 
    }))

    expect(state).toStrictEqual({ loading: true, user: {}})
  })

  it('SIGNUP_FAILURE', () => {
    const state = Auth(INITIAL_VALUES, AuthTypes.signUpFailure())

    expect(state).toStrictEqual({ loading: false, user: {}})
  })

  it('SIGNUP_SUCCESS', () => {
    const state = Auth(INITIAL_VALUES, AuthTypes.signUpSuccess())

    expect(state).toStrictEqual({ loading: false, user: {}})
  })

  it('REQUEST_DATA', () => {
    const state = Auth(INITIAL_VALUES, AuthTypes.requestData({
      name: "name",
      email: "email@gmail.com",     
      password: "123456789",    
      cpf: '99999999999',
      phone: '99999999999',
      gender: "male",
      birth: 19031993  
    }))


    expect(state).toStrictEqual({ 
      loading: false, 
      user: {
      name: "name",
      email: "email@gmail.com",     
      password: "123456789",    
      cpf: '99999999999',
      phone: '99999999999',
      gender: "male",
      birth: 19031993  
      }
    })
  })

  it('REQUEST_ADDRESS', () => {
    

    const INITIAL_VALUES = {
      loading: false,
      user: { 
        name: "name",
        email: "email@gmail.com",      
        password: "123456789",   
        cpf: 99999999999,
        phone: 99999999999,
        gender: "male",
        birth: "09031993"
      }
    }

    const state = Auth(INITIAL_VALUES, AuthTypes.requestAddress({
        cep: '2545455',
        address: "address",
        number: 819,
        complement: "complement",
        referency: "referency",
        neighborhood: "neighborhood",
        city: "city",
        state: "RJ"   
    }))


    expect(state).toStrictEqual({ 
      loading: false, 
      user: {
        name: "name",
        email: "email@gmail.com",      
        password: "123456789",   
        cpf: 99999999999,
        phone: 99999999999,
        gender: "male",
        birth: "09031993",        
        cep: "2545455",
        address: "address",
        number: 819,
        complement: "complement",
        referency: "referency",
        neighborhood: "neighborhood",
        city: "city",
        state: "RJ"   
      }
    })
  })

  it('DEFAULT', () => {
    const state = Auth(undefined, {})

    expect(state).toStrictEqual(INITIAL_VALUES)
  })
})