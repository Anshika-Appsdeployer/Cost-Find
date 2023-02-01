// Changing States
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    house: [],
    isToggled: "true",
    carpetArea: 510,
    userCarpetAreaValue: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        INCREMENT_BEDROOM: (state) => {
            state.carpetArea += 120;
        },
        DECREMENT_BEDROOM: (state, action) => {
            if (action.payload > 1) {
                state.carpetArea -= 120;
            }

        },
        INCREMENT_BATHROOM: (state) => {
            state.carpetArea += 40;
        },
        DECREMENT_BATHROOM: (state, action) => {
            if (action.payload > 1) {
                state.carpetArea -= 40;
            }
        },
        TOGGLE_LIVINGROOM:(state) => {
            if(!isToggled){
                state.isToggled = "true";
            }
        }
    },
})

// Action creators are generated for each case reducer function
export const {
    INCREMENT_BEDROOM,
    DECREMENT_BEDROOM,
    INCREMENT_BATHROOM,
    DECREMENT_BATHROOM,
    TOGGLE_LIVINGROOM
} = counterSlice.actions

export default counterSlice.reducer

