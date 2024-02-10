import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const RaffleSlider = createSlice({
  name: "raffle",
  initialState,
});

export default RaffleSlider.reducer;
