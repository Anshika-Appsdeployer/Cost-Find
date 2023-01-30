// State: changeBedroom
import { createSlice } from '@reduxjs/toolkit' // createSlice is an API

const initialState = {
    carpetArea: 510,
    userCarpetAreaValue: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        INCREMENT_BEDROOM: (state) => {
            state.value += 1;
            state.carpetArea += 120;
        },
        DECREMENT_BEDROOM: (state) => {
            state.value -= 1
        },
        INCREMENT_BATHROOM: (state) => {
            state.value += 1
        },
        DECREMENT_BATHROOM: (state) => {
            state.value -= 1
        },
    },
})

// Action creators are generated for each case reducer function
export const {
    INCREMENT_BEDROOM,
    DECREMENT_BEDROOM,
    INCREMENT_BATHROOM,
    DECREMENT_BATHROOM
} = counterSlice.actions

export default counterSlice.reducer

