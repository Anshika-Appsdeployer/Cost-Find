import { createSlice } from '@reduxjs/toolkit'

const initialState = {

}

export const counterSlice = toggleSlice({
    name: 'counter',
    initialState,
    reducers: {
        
    }
});

export const {
    TOGGLE_ACTION,
} = counterSlice.actions

export default counterSlice.reducer