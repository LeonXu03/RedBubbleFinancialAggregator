import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: "dark"
};

export const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === 'light' ? "dark" : 'light'; // if current state mode is light, change it to dark. if state mode is dark, change it to light. Toggle between light modes
        }
    }
})

export const {setMode} = globalSlice.actions;

export default globalSlice.reducer;