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
  },
});

export const { deleteTheItem } = RaffleSlider.actions;
export default RaffleSlider.reducer;
