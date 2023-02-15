import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  min: 0,
  max: 10
}

const numbersSlice = createSlice({
  name: 'numbers',
  initialState,
  reducers: {
    changeMin: (state, action) => {
      state.min = action.payload
    },
    changeMax: (state, action) => {
      state.max = action.payload
    }
  }
})

export const { changeMin, changeMax } = numbersSlice.actions

export default numbersSlice.reducer