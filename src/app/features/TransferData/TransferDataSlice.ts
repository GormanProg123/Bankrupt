import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface TransferData {
  from_card_number: string,
  to_card_number:string,
  amount:number ,
}

const initialState: TransferData = {
  from_card_number: '',
  to_card_number:'',
  amount:0,
}

export const TransferDataSlice = createSlice({
  name: 'TransferData',
  initialState,
  reducers: {
    transferDataUpdate: (state,action: PayloadAction<TransferData>) => {
        state.from_card_number = action.payload.from_card_number;
        state.to_card_number = action.payload.to_card_number;
        state.amount = action.payload.amount;

        console.log(state)
    },
  },
})


export const { transferDataUpdate } = TransferDataSlice.actions

export default TransferDataSlice.reducer

