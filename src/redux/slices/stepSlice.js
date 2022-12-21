import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step: 1
};

const stepsSlice = createSlice({
  name: "steps",
  initialState,
  reducers: {
    updateStep: (state, action) => {
      console.log(action.payload, "payload")
        state.step = action.payload;
      },
  }
});

const { actions, reducer } = stepsSlice;
export const {
  updateStep
} = actions;
export default reducer;
