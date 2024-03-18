import { configureStore } from '@reduxjs/toolkit'

import carrinhoReducer from './reducers/carrinho'
import favoritarReducer from './reducers/favoritar'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    favorito: favoritarReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
