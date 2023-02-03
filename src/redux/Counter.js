// Changing States
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    house: [],
    isToggled: "true",
    carpetArea: 510,
    userCarpetAreaValue: 0,
    bedroomQuantity: 1,
    bathroomQuantity: 1,
    floorPrice: 0,
    wallPrice: 0,
    ceilingPrice: 0,
    electricalsPrice: 0,
    windowsPrice: 0,
    doorPrice: 0,
    furniturePrice: 0,
    totalCost: 0,
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

        TOGGLE_LIVINGROOM: (state, action) => {
            if (!action.payload) {
                state.isToggled = "true";
            }
        },

        TOTAL_EXPENSE: (state, action) => {
            state.totalCost = action.payload;
          },
    },
})

// Action creators are generated for each case reducer function
export const {
    INCREMENT_BEDROOM,
    DECREMENT_BEDROOM,
    INCREMENT_BATHROOM,
    DECREMENT_BATHROOM,
    TOGGLE_LIVINGROOM,
    TOTAL_EXPENSE
} = counterSlice.actions

export default counterSlice.reducer

