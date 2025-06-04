import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { CurrentCard } from '../../../types/types'

const initialState:CurrentCard = {
    currentCardId:1,
    currentCardNumber:'',
    currentCardHistory:{
      history:[]
    }
}


export const WalletCardSlice = createSlice({
  name: 'WalletCard',
  initialState,
  reducers: {
    currentCard: (state,action: PayloadAction<CurrentCard>) => {
       state.currentCardId = action.payload.currentCardId
       state.currentCardNumber = action.payload.currentCardNumber
       state.currentCardHistory = action.payload.currentCardHistory
       console.log(action.payload)
    },
  },
})

  
export const { currentCard } = WalletCardSlice.actions

export default WalletCardSlice.reducer

