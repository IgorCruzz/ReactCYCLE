import React, { useState, useRef } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'
import { AiOutlineLogout } from 'react-icons/ai'
import { RiShoppingCartLine } from 'react-icons/ri'
import { BsJustify } from 'react-icons/bs'
import Login from '../../pages/SignIn'
import { FormHandles } from '@unform/core'
import logo from '../../assets/logo.png'
import { Container, Content, Bar, NavBar, Profile, Mobile, Main } from './styles'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../store/ducks/repositories/signIn/actions'
import { searchRequest } from '../../store/ducks/repositories/search/actions'

interface RootState {
  signIn: {
    signed: boolean
    profile: any
  }
}

interface Errors {
  [key: string]: string
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
  const [main, setMain] = useState(false)
  const [login, setLogin] = useState(false)
  const [search, setSearch] = useState('')
  const dispatch = useDispatch()
  const history = useHistory()
  const formRef = useRef<FormHandles>(null)

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
        {open && < Login />}
        <NavBar>
          <Mobile>
            <button type="button" id="hamburguer" onClick={() => setMain(true)}><BsJustify size={35} color="#FFFFFF"/></button>
            <span>{!signed
              ? (
                <>
                  <button type="button" onClick={() => setOpen(true)}>Entrar</button>
                  <Link to="/cadastro">Cadastrar</Link>
                </>
              ) : (
                <>
                  <strong>Olá, {profile.name}</strong>
                  <button type="button" onClick={() => dispatch(logout())}><AiOutlineLogout /></button>
                </>
              )
            }
            </span>

            {main && (
              <Main>
                <button type="button" id="close" onClick={() => setMain(false)}>X</button>
                <img src={logo} alt="logo"/>

                <Link to="/equipamentos" onClick={() => setMain(false)}>Equipamentos</Link>
                <Link to="/pecas" onClick={() => setMain(false)}>Peças</Link>
                <Link to="/bikes" onClick={() => setMain(false)}>Bicicletas</Link>
                <Link to="/contato" onClick={() => setMain(false)}>Contato</Link>
              </Main>
            )}

          </Mobile>

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
        <div id="logo">
          <img src={logo} alt="logo" />
        </div>
      </Content>
      <Bar>
        <div>
          <input type="search"
            value={search}
            onChange={e => setSearch(e.target.value)} />
          <button type="button" onClick={handleSearch}><FaSearch color="#FFFFFF" size={20}/></button>
        </div>

        <span>
          <Link to="/carrinho"><p>Ver Carrinho</p><RiShoppingCartLine size={60}/></Link>
          {ProductCounter.length !== 0 ? (<strong>{ProductCounter.length}</strong>) : null }
        </span>
      </Bar>
    </Container>
  )
}

export default Header
