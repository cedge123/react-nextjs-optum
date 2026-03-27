


import { createSlice } from "@reduxjs/toolkit";

export type CounterState = {
    count: number
}

const initialState: CounterState = {
    count: 5
}





const slice = createSlice({
    initialState, 
    name: "counter",
    reducers: {

        increment: (currentState) => {

            currentState.count++;
        },
        decrement: (currentState) => {

            currentState.count--;
        },
    }
});

//action creators
export const {increment, decrement} = slice.actions;
export const counterReducer = slice.reducer;




