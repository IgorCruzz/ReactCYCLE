import { Provider } from 'react-redux'
import { PersistGate  } from 'redux-persist/integration/react'
import { persistor, store } from '../store'
import Header from '../components/header'
import Footer from '../components/footer'
import GlobalStyle from '../styles/global'

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <Header />
      <Component {...pageProps} />   
      <Footer />
      <GlobalStyle />
      </PersistGate>
    </Provider>
  )
}