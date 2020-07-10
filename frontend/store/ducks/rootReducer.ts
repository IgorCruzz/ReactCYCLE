import { combineReducers } from 'redux'

import auth from './repositories/auth/reducer'
import signIn from './repositories/signIn/reducer'
import product from './repositories/product/reducer'
import cart from './repositories/cart/reducer'
import search from './repositories/search/reducer'
export default combineReducers({ auth, signIn, product, cart, search })
