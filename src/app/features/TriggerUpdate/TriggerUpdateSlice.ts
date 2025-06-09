import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ITriggerUpdate } from '../../../types/types'



const initialState = {
    cardsUpdate:false,
    savingsUpdate:false,
    savingsDepTopUp:false
}


export const triggerUpdateSlice = createSlice({
  name: 'TriggerUpdate',
  initialState,
  reducers: {
    cardsUpdate: (state,action: PayloadAction<ITriggerUpdate>) => {
       state.cardsUpdate = action.payload.cardsUpdate
       console.log(action.payload.cardsUpdate)
    },
    savingsUpdate: (state,action: PayloadAction<ITriggerUpdate>) => {
        state.savingsUpdate = action.payload.savingsUpdate
        console.log(action.payload.savingsUpdate)
    },
    savingsDepTopUp: (state,action: PayloadAction<ITriggerUpdate>) => {
        state.savingsDepTopUp = action.payload.savingsDepTopUp
        console.log(action.payload.savingsDepTopUp)
    },
  },
})

  
export const { cardsUpdate,savingsUpdate, savingsDepTopUp} = triggerUpdateSlice.actions

export default triggerUpdateSlice.reducer

