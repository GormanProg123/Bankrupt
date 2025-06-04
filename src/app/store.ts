import { configureStore } from '@reduxjs/toolkit'
import transferPagesReducer  from './features/TransferPages/TransferPagesSlice'
import transferDataReducer from './features/TransferData/TransferDataSlice'
import WalletCardReducer from './features/WalletCard/WalletCardSlice'

export const store = configureStore({
  reducer: {
    transferPages:transferPagesReducer,
    transferDataUpdate:transferDataReducer,
    walletCardSlice:WalletCardReducer,
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch