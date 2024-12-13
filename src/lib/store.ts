import { configureStore } from '@reduxjs/toolkit'
import reducer from './slice'

export const store = configureStore({
  reducer: reducer,
})

// Infer the type of the store
export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']