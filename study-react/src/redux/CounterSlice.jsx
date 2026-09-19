import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'Counter',
    initialState: 0,
    reducers: {
        increment(state, action){
            return state + action.payload //to get a number by which we will be incrementing
        },
        decrement(state, action){
            return state - action.payload //to get a number by which we will be decrementing
        }
    }
})

export const {increment, decrement} = counterSlice.actions;
export default counterSlice.reducer;