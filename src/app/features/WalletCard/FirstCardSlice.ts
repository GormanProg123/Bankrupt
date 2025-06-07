import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface firstCard {
    firstCardNumber:string
}


const initialState = {
    firstCardNumber:'',
}


export const FirstCardSlice = createSlice({
  name: 'FirstCard',
  initialState,
  reducers: {
    firstCard: (state,action: PayloadAction<firstCard>) => {
       state.firstCardNumber = action.payload.firstCardNumber
       console.log('first card number',action.payload.firstCardNumber)
    },
  },
})

  
export const { firstCard } = FirstCardSlice.actions

export default FirstCardSlice.reducer

