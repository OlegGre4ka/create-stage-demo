import stepsSlice from "./slices/stepSlice";

const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
    reducer: {
        steps:  stepsSlice
    }
});