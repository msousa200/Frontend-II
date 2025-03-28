import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { useSelector } from "react-redux";

// Separate the component to its own file
export const Contador = () => {
    const count = useSelector((state: RootState) => state.counter.value);
};

// Define the interface for the state
interface CounterState {
    value: number;
}

// Define initial state
const initialState: CounterState = {
    value: 0
};

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },
    }
});

// Export all actions
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Export the reducer
export const counterReducer = counterSlice.reducer;