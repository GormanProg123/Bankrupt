import { configureStore } from '@reduxjs/toolkit'
import transferPagesReducer  from './features/TransferPages/TransferPagesSlice'
import transferDataReducer from './features/TransferData/TransferDataSlice'

export const store = configureStore({
  reducer: {
    transferPages:transferPagesReducer,
    transferDataUpdate:transferDataReducer,
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch