import { createSlice } from "@reduxjs/toolkit";

const hotelsSlice = createSlice({
  name: "hotels",
  initialState: { hotelsFullList: [] },
  reducers: {
    hotel(state, action) {
      state.hotelsFullList = action.payload.hotelsFullList;
    },
  },
});

export const hotelsActions = hotelsSlice.actions;
export default hotelsSlice;
