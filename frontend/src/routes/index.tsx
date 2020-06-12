import React from 'react'
import { Switch, BrowserRouter as Router } from 'react-router-dom'
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

export default function Routes () {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact={false} path="/pecas" component={Part} />
        <Route exact={false} path="/bikes" component={Bike} />
        <Route exact={false} path="/equipamentos" component={Equipment} />
        <Route exact={false} path="/cadastro" component={Register} />
        <Route exact={false} path="/contato" component={Contact} />
        <Route exact={false} path="/carrinho" component={Cart} />
        <Route exact={false} path="/checkout" component={Checkout} />
        <Route exact={false} path="/finalizado" component={Payment} />
        <Route exact={false} path="/busca" component={SearchList} />
      </Switch>
    </Router>
  )
}
