import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface SavingsGoalModalState {
    modalState:boolean
}

const initialState = {
  modalState:false
}

export const savingsGoalModalSlice = createSlice({
  name: 'TransferData',
  initialState,
  reducers: {
    savingsModalState: (state,action: PayloadAction<SavingsGoalModalState>) => {
        state.modalState = action.payload.modalState
        console.log(state)
    },
  },
})

  
export const { savingsModalState } = savingsGoalModalSlice.actions

export default savingsGoalModalSlice.reducer

