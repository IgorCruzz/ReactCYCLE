import Product, {  INITIAL_VALUES } from '../../../store/ducks/repositories/product/reducer'
import * as ProductTypes from '../../../store/ducks/repositories/product/actions'


describe('Product', () => {
  it('STORE_REQUEST', () => {
    const state = Product(INITIAL_VALUES, ProductTypes.createProductRequest({
      name: 'productName',
      price: 599.99,
      quantity: '20',
      category: 'bikes',
      avatar: 'avatar',
    }))

    expect(state).toStrictEqual({ loading: true })
  })

  it('STORE_FAILURE', () => {
    const state = Product(INITIAL_VALUES, ProductTypes.createProductFailure())

    expect(state).toStrictEqual({ loading: false})
  })

  it('STORE_SUCCESS', () => {
    const state = Product(INITIAL_VALUES, ProductTypes.createProductSuccess())

    expect(state).toStrictEqual({ loading: false})
  })

  it('DEFAULT', () => {
    const state = Product(undefined, {})

    expect(state).toStrictEqual({ loading: false})
  })
})