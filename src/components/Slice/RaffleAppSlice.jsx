import { createSlice } from "@reduxjs/toolkit";
import data from "../data/data.json";

const initialState = {
  data: data,
};

const RaffleSlider = createSlice({
  name: "raffle",
  initialState,
  reducers: {
    deleteTheItem: (state, action) => {
      const itemId = action.payload;
      state.data = state.data.filter((item) => item.id !== itemId);
    },
    randomItem: (state) => {
      const random = Math.floor(Math.random() * state.data.length);
      console.log(state.data[random].name);
    },
  },
});

export const { deleteTheItem, randomItem } = RaffleSlider.actions;
export default RaffleSlider.reducer;
