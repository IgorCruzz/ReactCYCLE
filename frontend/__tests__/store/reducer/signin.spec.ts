import signIn, { INITIAL_VALUES } from '../../../store/ducks/repositories/signIn/reducer'
import * as Signin from '../../../store/ducks/repositories/signIn/actions'

describe('SignIn', () => {
  it('SIGN_IN_SUCCESS', () => {
    const state = signIn(INITIAL_VALUES, Signin.signInSuccess({
      name: 'username',
      email: 'email@gmail.com'
    }))

    expect(state).toStrictEqual({ 
      signed: true, 
      profile: 
      {
      name: 'username',
      email: 'email@gmail.com'
    }})
  })

  it('LOGOUT', () => {
    const state = signIn(INITIAL_VALUES, Signin.logout())

    expect(state).toStrictEqual({ signed: false, profile: []})
  })

  it('DEFAULT', () => {
    const state = signIn(undefined, {})  

    expect(state).toStrictEqual(INITIAL_VALUES)
  })
 
})