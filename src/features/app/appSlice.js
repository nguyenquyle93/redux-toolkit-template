import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
    address: [],
    products: [],
    category: [],
  }

  export const appSlice = createSlice({
    name: 'appSlice',
    initialState,
    reducers: {
      addAddress: (state, action) => {
        state.address.push(action.payload)
      },
      delteAddress: (state, action) => {
        state.address.push(action.payload)
      },
      addProduct: (state, action) => {
        state.products.push(action.payload)
      },
      addCategory: (state, action) => {
        state.category.push(action.payload)
      },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { addAddress, addProduct, addCategory } = appSlice.actions
  
  export default appSlice.reducer