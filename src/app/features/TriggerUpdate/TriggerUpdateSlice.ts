import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ITriggerUpdate } from '../../../types/types'



const initialState = {
    cardsUpdate:false,
    savingsUpdate:false,
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
  },
})

  
export const { cardsUpdate,savingsUpdate } = triggerUpdateSlice.actions

export default triggerUpdateSlice.reducer

