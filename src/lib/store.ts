import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import cartReducer from '@/lib/features/cart/cartSlice'
import orderSlice from './features/checkout/orderSlice'
import userReducer from './features/user/userSlice'
import productReducer from './features/product/productSlice'

export const store = () => {
  return configureStore({
    reducer: {
      cart: cartReducer,
      order: orderSlice,
      user: userReducer,
      products: productReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  })
}

// export const store = configureStore({
//   reducer: reducer,
// })

// Infer the type of the store
export type AppStore = ReturnType<typeof store>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector