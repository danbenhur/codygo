import { configureStore } from "@reduxjs/toolkit";
import hotelsSlice from "./hotels-slice";
import chainsSlice from "./chains-slice";
import uiSlice from "./ui-slice";

const store = configureStore({
  reducer: {
    hotels: hotelsSlice.reducer,
    chains: chainsSlice.reducer,
    ui: uiSlice.reducer,
  },
});

export default store;
