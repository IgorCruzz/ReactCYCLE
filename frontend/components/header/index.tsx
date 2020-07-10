import React, { useState } from 'react'
import  Link  from 'next/link'
import { useRouter } from 'next/router'
import { FaSearch } from 'react-icons/fa'
import { AiOutlineLogout } from 'react-icons/ai'
import { RiShoppingCartLine } from 'react-icons/ri'
import { BsJustify } from 'react-icons/bs'  
import { useSelector, useDispatch } from 'react-redux' 
import { logout } from '../../store/ducks/repositories/signIn/actions'
import { searchRequest } from '../../store/ducks/repositories/search/actions'
import { Container, Content, Bar, NavBar, Profile, Mobile, Main } from './styles'
import logo from "../../assets/logo.png"
import Login from '../login'

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
  const signed = useSelector((state: RootState) => state.signIn.signed)
  const profile = useSelector((state: RootState) => state.signIn.profile)
  const ProductCounter = useSelector((state: RootCart) => state.cart.cart)
  const [main, setMain] = useState(false)
  const [login, setLogin] = useState(false)
  const [search, setSearch] = useState('')
  const dispatch = useDispatch()
  const router = useRouter()
 

  const handleSearch = () => {
    if (search === '') {
      return
    }

    dispatch(searchRequest(search))
    router.push('/search')
  }

  return (
    <Container>
      <Content>
        {!signed && <Login open={login} close={() => setLogin(false)} />}
        <NavBar>
          <Mobile>
            <button type="button" id="hamburguer" onClick={() => setMain(true)}><BsJustify size={35} color="#FFFFFF"/></button>
            <span>{!signed
              ? (
                <>
                  <button type="button" onClick={() => setLogin(true)}>Entrar</button>
                  <Link href="/register"><a>Cadastrar</a></Link>
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
                {profile.length !== 0 ? (
                  <p>Olá, {profile.name}</p>
                )
                  : (
                    <p>Olá, visitante</p>
                  )
                }
                <span id="search">
                  <input type="search"
                    value={search}
                    placeholder="Encontre o produto ideal"
                    onChange={e => setSearch(e.target.value)} />
                  <button type="button" onClick={() => {
                    handleSearch()
                    setMain(false)
                  }}><FaSearch color="#1E90FF" size={20}/></button>
                </span>

                <Link href="/equipments"><a onClick={() => setMain(false)}>Equipamentos</a></Link>
                <Link href="/parts"><a onClick={() => setMain(false)}>Peças</a></Link>
                <Link href="/bikes"><a onClick={() => setMain(false)}>Bicicletas</a></Link>
                <Link href="/contact"><a onClick={() => setMain(false)}>Contato</a></Link>
              </Main>
            )}

          </Mobile>

          <main>
            <Link href="/equipments"><a>Equipamentos</a></Link>
            <Link href="/parts"><a>Peças</a></Link>
            <Link href="/bikes"><a>Bicicletas</a></Link>
            <Link href="/contact"><a>Contato</a></Link>
          </main>
          {!signed && (
            <div id="auth">
              <button
                type="button"
                onClick={() => setLogin(true)}
              >Entrar</button>

              <Link href="/register"><a>Cadastrar</a></Link>
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
          <Link href="/"><a><img src={logo} alt="logo" /></a></Link>

        </div>
      </Content>
      <Bar>
        <div>
          <input type="search"
            placeholder="Encontre o produto ideal"
            value={search}
            onChange={e => setSearch(e.target.value)} />
          <button type="button" onClick={handleSearch}><FaSearch color="#FFFFFF" size={20}/></button>
        </div>

        <span>
          <Link href="/cart"><a><p>Ver Carrinho</p><RiShoppingCartLine size={60}/></a></Link>
          {ProductCounter.length !== 0 ? (<strong>{ProductCounter.length}</strong>) : null }
        </span>
      </Bar>
    </Container>
  )
}

export default Header
