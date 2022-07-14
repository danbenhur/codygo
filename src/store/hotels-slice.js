import { createSlice } from "@reduxjs/toolkit";
import { hotels } from "../components/hotels";

const hotelsSlice = createSlice({
  name: "hotels",
  initialState: { hotelsFullList: hotels },
  reducers: {
    filterHotelList(state, action) {
      state.hotelsFullList = state.hotelsFullList.filter(
        (hotel) => hotel.chain_name === action.payload.chain_name
      );
    },
  },
});

export const hotelsActions = hotelsSlice.actions;
export default hotelsSlice;
