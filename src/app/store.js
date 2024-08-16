import { configureStore } from "@reduxjs/toolkit";
import addWidgetSlice from "./features/addWidgetSlice";

export const store = configureStore({
  reducer: { widget: addWidgetSlice },
});
