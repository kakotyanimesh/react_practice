import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    value : 0
}

export const counterSlice = createSlice({
    name: "counter", 
    initialState,
    reducers: {
        addvalue: (state) =>{
            state.value += 1
        },
        removeValue: (state) =>{
            state.value -= 1
        },
        multiplyValue: (state) =>{
            state.value *= 2
        },
        incrementByaction: (state, action) =>{
            state.value += action.payload
        }
    }
})

export const {addvalue, removeValue, multiplyValue} = counterSlice.actions

export default counterSlice.reducer