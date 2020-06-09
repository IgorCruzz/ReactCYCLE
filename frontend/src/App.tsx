import React from 'react'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import GlobalStyle from './styles/global'
import { ToastContainer } from 'react-toastify'
import Routes from './routes'

import { store, persistor } from './store/index'

function App () {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>

        <GlobalStyle />
        <Routes />
        <ToastContainer autoClose={3000} />

      </PersistGate>
    </Provider>
  )
}

export default App
