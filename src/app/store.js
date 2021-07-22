import { configureStore } from '@reduxjs/toolkit'
import appReducer from '../features/app/appSlice'
import productReducer from '../features/app/productSlice'

const store = configureStore({
    reducer: {
        app: appReducer,
        product: productReducer,
    },
  })

export default store;