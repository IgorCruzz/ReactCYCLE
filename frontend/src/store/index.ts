import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { persistStore } from 'redux-persist'
import persistReducer from './persistReducer'
import rootReducer from './ducks/rootReducer'
import rootSaga from './ducks/rootSaga'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(persistReducer(rootReducer), applyMiddleware(sagaMiddleware))
const persistor = persistStore(store)
sagaMiddleware.run(rootSaga)

export { store, persistor }
