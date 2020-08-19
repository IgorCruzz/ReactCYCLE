import { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { PersistGate  } from 'redux-persist/integration/react'
import { persistor, store } from '../store'
import Header from '../components/header'
import Footer from '../components/footer'
import '../styles/main.global.scss'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <Header />
      <Component {...pageProps} />   
      <Footer />  
      </PersistGate>
    </Provider>
  )
}