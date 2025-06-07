import { configureStore } from '@reduxjs/toolkit'
import transferPagesReducer  from './features/TransferPages/TransferPagesSlice'
import transferDataReducer from './features/TransferData/TransferDataSlice'
import WalletCardReducer from './features/WalletCard/WalletCardSlice'
import FirstCardReducer from './features/WalletCard/FirstCardSlice'
import SavingsGoalModalReducer from './features/SavingsGoalModal/SavingsGoalModalSlice'
import TriggerUpdateReducer from './features/TriggerUpdate/TriggerUpdate'

export const store = configureStore({
  reducer: {
    transferPages:transferPagesReducer,
    transferDataUpdate:transferDataReducer,
    walletCardSlice:WalletCardReducer,
    firstCardSlice:FirstCardReducer,
    savingsGoalModalSlice:SavingsGoalModalReducer,
    triggerUpdateSlice:TriggerUpdateReducer
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch