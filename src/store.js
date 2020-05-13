import {createStore, applyMiddleware} from 'redux'
import {createLogicMiddleware} from 'redux-logic'
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import {storeConf} from './constants'
import logic from './logic'
import reducers from './reducers'


// FAKE BACKEND
import './fake-backend'

// LOGIC MIDDLEWARE
const logicMiddleware = createLogicMiddleware(logic)
const middleware = applyMiddleware(logicMiddleware)

// PERSIST
const key = storeConf.persistorKey
const persistConfig = {key, storage, whitelist: ['user', 'shell']}
const rootReducer = persistReducer(persistConfig, reducers);

// STORE
const store = createStore(rootReducer, middleware)
const persistor = persistStore(store)

export { store, persistor }