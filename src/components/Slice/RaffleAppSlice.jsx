import { createSlice } from "@reduxjs/toolkit";
import data from "../data/data.json";

const initialState = {
  data: data,
};

const RaffleSlider = createSlice({
  name: "raffle",
  initialState,
});

export default RaffleSlider.reducer;
