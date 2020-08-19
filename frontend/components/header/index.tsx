import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FaSearch } from 'react-icons/fa'
import { AiOutlineLogout } from 'react-icons/ai'
import { RiShoppingCartLine } from 'react-icons/ri'
import { BsJustify } from 'react-icons/bs'
import Login from '../login'
import logo from '../../public/assets/logo.png'
import styles from './styles.module.scss'
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
    <div id={styles.Container}>
    <div id={styles.Content}>
      {!signed && <Login open={login} close={() => setLogin(false)} />}

      <div id={styles.NavBar}>
        
        <div id={styles.Mobile}>
          <button type="button" id={styles.hamburguer} data-testid="hamburguer" onClick={() => setMain(true)}><BsJustify size={35} color="#FFFFFF"/></button>
          <span>{!signed
            ? (
              <div data-testid="sign-data">
                <button type="button" data-testid="join" onClick={() => setLogin(true)}>Entrar</button>
                <Link href="/register"><a>Cadastrar</a></Link>
              </div>
            ) : (
              <div data-testid="profile-data">
                <strong>Olá, {profile.name}</strong>
                <button type="button" data-testid="logout-mobile" onClick={() => dispatch(logout())}><AiOutlineLogout /></button>
              </div>
            )
          }
          </span>

          {main && (
            <div id={styles.Main} data-testid="mobile-menu">
              <button type="button"  data-testid="close-mobile-menu" id={styles.close} onClick={() => setMain(false)}>X</button>
              {profile.length !== 0 ? (
                <p data-testid="username">Olá, {profile.name}</p>
              )
                : (
                  <p>Olá, visitante</p>
                )
              }
              <span id={styles.search}>
                <input type="search"
                  data-testid="search-product-hamburguer"
                  value={search}
                  placeholder="Encontre o produto ideal"
                  onChange={e => setSearch(e.target.value)} />
                <button 
                  type="button" 
                  data-testid="search-product-button-hamburguer"
                  onClick={() => {
                  handleSearch()
                  setMain(false)
                }}><FaSearch color="#1E90FF" size={20}/></button>
              </span>

                <Link href="/equipments" data-testid="equip-link"><a data-testid="equip-link" onClick={() => setMain(false)}>Equipamentos</a></Link>
                <Link href="/parts"><a data-testid="part-link" onClick={() => setMain(false)}>Peças</a></Link>
                <Link href="/bikes"><a data-testid="bike-link" onClick={() => setMain(false)}>Bicicletas</a></Link>
                <Link href="/contact"><a data-testid="contact-link" onClick={() => setMain(false)}>Contato</a></Link>
            </div>
          )}
        </div>

        <main>
            <Link href="/equipments"><a>Equipamentos</a></Link>
            <Link href="/parts"><a>Peças</a></Link>
            <Link href="/bikes"><a>Bicicletas</a></Link>
            <Link href="/contact"><a>Contato</a></Link>
        </main>

        {!signed ? (
          <div id={styles.auth}>
            <button
              data-testid="open-modal"
              type="button"
              onClick={() => setLogin(true)}
            >Entrar</button>

            <Link href="/register"><a>Cadastrar</a></Link>
          </div>
        ):
        (
          <div id={styles.Profile}>
            <p>Bem vindo, {profile.name}</p>
            <button type="button" data-testid="logout" onClick={() => dispatch(logout())}><AiOutlineLogout size={27} /></button>
          </div>
        )}      

      </div>


      <div id={styles.logo}>
      <Link href="/"><a><img src={logo} alt="logo" /></a></Link>
      </div>

    </div>
    
    <div id={styles.Bar}>
      <div>
        <input type="search"
          data-testid="search-product"
          placeholder="Encontre o produto ideal"
          value={search}
          onChange={e => setSearch(e.target.value)} />
        <button type="button"  data-testid="search-product-button" onClick={handleSearch}><FaSearch color="#FFFFFF" size={20}/></button>
      </div>

      <span>
      <Link href="/cart"><a><p>Ver Carrinho</p><RiShoppingCartLine size={60}/></a></Link>
        {ProductCounter.length !== 0 ? (<strong data-testid="productCounter">{ProductCounter.length}</strong>) : null }
      </span>
    </div>
  </div>
  )
}

export default Header
