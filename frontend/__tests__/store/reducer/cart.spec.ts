import Cart, { INITIAL_VALUES } from '../../../store/ducks/repositories/cart/reducer'
import * as CartTypes from '../../../store/ducks/repositories/cart/actions'
window.alert = jest.fn();

describe('Cart', () => {
  it('ADD_PRODUCT', () => {
    const state = Cart(INITIAL_VALUES, CartTypes.addProct({
      id: 1,
      avatar_url: 'avatar_url',
      price: 54.99,
      name: 'name',
      quantity: 99
    }))

    expect(state).toStrictEqual({
      cart: [{
      id: 1,
      avatar_url: 'avatar_url',
      price: 54.99,
      name: 'name',
      quantity: 99,
      amount: 1
    }]})
  })

  it('if a product already exists at the cart increase the amount',  () => {
    const INITIAL_VALUES = {
      cart: [{
        id: 1,
        avatar_url: 'avatar_url',
        price: 54.99,
        name: 'name',
        quantity: 99,
        amount: 1
      }]
    }
   
    const state =  Cart(INITIAL_VALUES, CartTypes.addProct({
      id: 1,
      avatar_url: 'avatar_url',
      price: 54.99,
      name: 'name',
      quantity: 99
    }))    

    expect(state).toStrictEqual({
      cart: [{
      id: 1,
      avatar_url: 'avatar_url',
      price: 54.99,
      name: 'name',
      quantity: 99,
      amount: 2
    }]})

  })

  it('REMOVE_PRODUCT', () => {
    const INITIAL_VALUES = {
      cart: [{
        id: 1,
        avatar_url: 'avatar_url',
        price: 54.99,
        name: 'name',
        quantity: 99,
        amount: 1
      }]
    }

    const state = Cart(INITIAL_VALUES, CartTypes.removeProduct(1))

    expect(state).toStrictEqual({
      cart: []
    })
  })

  it('INCREMENT_AMOUNT', () => {
    const INITIAL_VALUESs = {
      cart: [{
        id: 1,
        avatar_url: 'avatar_url',
        price: 54.99,
        name: 'name',
        quantity: 99,
        amount: 1
      }]
    }

    const state = Cart(INITIAL_VALUESs, CartTypes.incrementAmount(1))

    expect(state).toStrictEqual({
      cart: [{
      id: 1,
      avatar_url: 'avatar_url',
      price: 54.99,
      name: 'name',
      quantity: 99,
      amount: 2
      }]
    })
  })

  it('Dont increment amount if the product has been hit the stock', () => {
    const INITIAL_VALUESs = {
      cart: [{
        id: 1,
        avatar_url: 'avatar_url',
        price: 54.99,
        name: 'name',
        quantity: 99,
        amount: 99
      }]
    } 

    const state = Cart(INITIAL_VALUESs, CartTypes.incrementAmount(1))

    expect(window.alert).toBeCalled()
    expect(state).toStrictEqual({
      cart: [{
        id: 1,
        avatar_url: 'avatar_url',
        price: 54.99,
        name: 'name',
        quantity: 99,
        amount: 99
      }]
    })
  })

  it('DECREMENT_AMOUNT', () => {
    const INITIAL_VALUESs = {
      cart: [{
        id: 1,
        avatar_url: 'avatar_url',
        price: 54.99,
        name: 'name',
        quantity: 99,
        amount: 2
      }]
    }

    const state = Cart(INITIAL_VALUESs, CartTypes.decrementAmount(1))

    expect(state).toStrictEqual({
      cart: [{
      id: 1,
      avatar_url: 'avatar_url',
      price: 54.99,
      name: 'name',
      quantity: 99,
      amount: 1
      }]
    })
  })

  it('DEFAULT', () => {
    const state = Cart(undefined, {})

    expect(state).toStrictEqual(INITIAL_VALUES)
  })
})