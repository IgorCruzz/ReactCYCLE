import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'
import { AiOutlineLogout } from 'react-icons/ai'
import { RiShoppingCartLine } from 'react-icons/ri'
import Login from '../../pages/SignIn'
import logo from '../../assets/logo.png'
import coroa from '../../assets/coroa.png'
import { Container, Content, Bar, NavBar, Profile } from './styles'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../store/ducks/repositories/signIn/actions'
import { searchRequest } from '../../store/ducks/repositories/search/actions'

interface RootState {
  signIn: {
    signed: boolean
    profile: any
  }
}

interface RootCart {
  cart: {
    cart: any

  }
}

const Header: React.FC = () => {
  const [open, setOpen] = useState(false)
  const signed = useSelector((state: RootState) => state.signIn.signed)
  const profile = useSelector((state: RootState) => state.signIn.profile)
  const ProductCounter = useSelector((state: RootCart) => state.cart.cart)
  const [search, setSearch] = useState('')
  const dispatch = useDispatch()
  const history = useHistory()

  const handleSearch = () => {
    if (search === '') {
      return
    }

    dispatch(searchRequest(search))
    history.push('/busca')
  }

  return (
    <Container>
      <Content>

        <NavBar>

          <main>
            <Link to="/equipamentos">Equipamentos</Link>
            <Link to="/pecas">Peças</Link>
            <Link to="/bikes">Bicicletas</Link>
            <Link to="/contato">Contato</Link>
          </main>
          {!signed && (
            <div>
              <button
                type="button"
                onClick={() => setOpen(true)}
              >Entrar</button>
              {open && < Login />}
              <Link to="/cadastro">Cadastrar</Link>
            </div>
          )}

          {signed && (
            <Profile>
              <p>Bem vindo, {profile.name}</p>
              <button type="button" onClick={() => dispatch(logout())}><AiOutlineLogout /></button>
            </Profile>
          )}

        </NavBar>

        <Link to="/">
          <img id="coroa" src={coroa} alt="coroa" />
          <img id="logo" src={logo} alt="logo" />
        </Link>

      </Content>
      <Bar>
        <div>

          <input type="search"
            value={search}
            onChange={e => setSearch(e.target.value)} />
          <button type="button" onClick={handleSearch}><FaSearch color="#FFFFFF" size={20}/></button>
        </div>

        <span>
          <Link to="/carrinho">Ver Carrinho <RiShoppingCartLine size={60}/></Link>
          {ProductCounter.length !== 0 ? (<strong>{ProductCounter.length}</strong>) : null }
        </span>
      </Bar>
    </Container>
  )
}

export default Header
