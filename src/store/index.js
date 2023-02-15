import { configureStore } from "@reduxjs/toolkit";
import numbersSlice from "./features/numbersSlice";

const store = configureStore({
  reducer: {
    numbers: numbersSlice
  },
})

export { store }