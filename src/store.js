import React from 'react'
import { createStore, applyMiddleware  } from 'redux'
import thunk from 'redux-thunk';
import { compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import Reducers from './reducers'

const persistConfig = {
  key: 'root',
  storage,
}

const pReducer = persistReducer( persistConfig, Reducers);
const store = createStore(pReducer, applyMiddleware(thunk))
const persistor = persistStore(store)

export {store, persistor}