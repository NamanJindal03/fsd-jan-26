import { createSlice } from "@reduxjs/toolkit";
import { fetchRandomCounterValue } from "./counterThunk";

const counterSlice = createSlice({
    name: 'Counter',
    initialState: {
        counter: 0,
        loading: false, 
        error: null
    },
    reducers: {
        increment(state, action){
            return state + action.payload //to get a number by which we will be incrementing
        },
        decrement(state, action){
            return state - action.payload //to get a number by which we will be decrementing
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRandomCounterValue.pending, (state) => {
                state.loading = true;
                state.error = null
            })
            .addCase(fetchRandomCounterValue.fulfilled, (state, action) => {
                state.loading = false;
                state.counter = action.payload
            })
            .addCase(fetchRandomCounterValue.rejected, (state) => {
                state.loading = false;
                state.error = "Api failed"
            })
    }
})

export const {increment, decrement} = counterSlice.actions;
export default counterSlice.reducer;