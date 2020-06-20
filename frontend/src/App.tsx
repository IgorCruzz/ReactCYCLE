import React from 'react'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import GlobalStyle from './styles/global'
import { Router } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Routes from './routes'
import history from './services/history'
import { store, persistor } from './store/index'

function App () {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <GlobalStyle />
          <Routes />
          <ToastContainer autoClose={3000} />
        </Router>
      </PersistGate>
    </Provider>
  )
}

export default App
