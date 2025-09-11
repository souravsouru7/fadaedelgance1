import { configureStore } from '@reduxjs/toolkit'
import adminAuthReducer from '../slices/adminAuthSlice.js'
import contactReducer from '../slices/contactSlice.js'

export const adminStore = configureStore({
  reducer: {
    adminAuth: adminAuthReducer,
    contact: contactReducer,
  },
})


