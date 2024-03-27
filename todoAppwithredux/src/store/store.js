import { configureStore } from '@reduxjs/toolkit'

import todoReducer from '../features/slice/TodoSlice'
export const store = configureStore({
  reducer: todoReducer,
})