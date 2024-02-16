import { createSlice } from "@reduxjs/toolkit";
import data from "../data/data.json";

const initialState = {
  data: data,
  selectedItem: "",
  newItem: "",
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
      state.selectedItem = state.data[random].name;
    },
    editItem: (state, action) => {
      state.newItem = action.payload;
    },
    addItem: (state) => {
      state.data.push({
        name: state.newItem,
        id: state.data.length + 1,
      });
    },
  },
});

export const { deleteTheItem, randomItem, editItem, addItem } =
  RaffleSlider.actions;
export default RaffleSlider.reducer;
