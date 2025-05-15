import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CurrentPage {
  value: number
}

const initialState: CurrentPage = {
  value: 1,
}

export const transferPagesSlice = createSlice({
  name: 'transferPages',
  initialState,
  reducers: {
    nextPage: (state) => {
        if(state.value < 3){
            state.value += 1
        }
    },
    previousPage: (state) => {
        if(state.value > 1){
            state.value -= 1
        }
      
    },
  },
})


export const { nextPage, previousPage } = transferPagesSlice.actions

export default transferPagesSlice.reducer

