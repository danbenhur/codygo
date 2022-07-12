import { configureStore } from "@reduxjs/toolkit";
import hotelsSlice from "./hotels-slice";
import uiSlice from "./ui-slice";
import favSlice from "./fav-slice";

const store = configureStore({
  reducer: {
    hotels: hotelsSlice.reducer,
    ui: uiSlice.reducer,
    fav: favSlice.reducer,
  },
});

export default store;
