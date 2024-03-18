import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type FavoritoState = {
  itens: Produto[]
}

const initialState: FavoritoState = {
  itens: []
}

const favoritoSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const favoritos = action.payload

      if (state.itens.find((f) => f.id === favoritos.id)) {
        state.itens = state.itens.filter((item) => item.id !== favoritos.id)
      } else {
        state.itens = [...state.itens, favoritos]
      }
    }
  }
})

export const { favoritar } = favoritoSlice.actions

export default favoritoSlice.reducer
