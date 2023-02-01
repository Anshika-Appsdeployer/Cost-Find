import { configureStore } from "@reduxjs/toolkit";
import Counter from "./Counter";

const store = configureStore({
    reducer: {
        counter: Counter,
    },
});

export default store;