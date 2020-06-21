import React from 'react'
import { Switch, HashRouter } from 'react-router-dom'
import Route from './route'

import Home from '../pages/Home'
import Part from '../pages/Part'
import Bike from '../pages/Bike'
import Equipment from '../pages/Equipment'
import Register from '../pages/Register'
import Contact from '../pages/Contact'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
import Payment from '../pages/Payment'
import SearchList from '../pages/Search'
import Client from '../pages/Cart/Client'
import Address from '../pages/Cart/Address'

export default function Routes () {
  return (

    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/pecas" component={Part} />
      <Route path="/bikes" component={Bike} />
      <Route path="/equipamentos" component={Equipment} />
      <Route path="/cadastro" component={Register} />
      <Route path="/contato" component={Contact} />
      <Route path="/carrinho" component={Cart} />
      <Route path="/cliente" component={Client} />
      <Route path="/endereco" component={Address} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/finalizado" component={Payment} />
      <Route path="/busca" component={SearchList} />
    </Switch>

  )
}
