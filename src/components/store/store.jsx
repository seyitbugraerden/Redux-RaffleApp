import { configureStore } from "@reduxjs/toolkit";
import RaffleAppSlice from "../Slice/RaffleAppSlice";

export const store = configureStore({
  reducer: {
    raffle: RaffleAppSlice,
  },
});
