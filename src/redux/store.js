import { configureStore } from "@reduxjs/toolkit";
import changeBathroom from "./changeBathroom";


const store = configureStore({
    reducer: {
        changeBathroom,
    },
});
// ({
//     reducer: {
//       home: HouseReducer,
//     },
//   });

export default store;