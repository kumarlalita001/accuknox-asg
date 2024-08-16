import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: true, // closed by default
};

export const addWidgetSlice = createSlice({
  name: "addCloseWidget",
  initialState,
  reducers: {
    openAddWidget: (state) => {
      state.value = false;
    },
    closeAddWidget: (state) => {
      state.value = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { openAddWidget, closeAddWidget } = addWidgetSlice.actions;

export default addWidgetSlice.reducer;
