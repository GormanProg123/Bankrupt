import { configureStore } from '@reduxjs/toolkit'
import transferPagesReducer  from './features/transferPages/TransferPagesSlice'
export const store = configureStore({
  reducer: {
    transferPages:transferPagesReducer,
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch