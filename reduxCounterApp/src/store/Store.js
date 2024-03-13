import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,

  },
})


// counterReducer is a syntaxtical naming convention use by many developer 
// i can use any naming for that , here we are just using counterslice as counterreducer 
