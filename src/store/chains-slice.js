import { createSlice } from "@reduxjs/toolkit";

const chainsSlice = createSlice({
  name: "chains",
  initialState: { allUnchecked: true, selectedChains: [] },
  reducers: {
    toggleAllUnchecked(state) {
      if (state.allUnchecked) {
        state.allUnchecked = false;
      } else {
        state.allUnchecked = true;
      }
    },

    addToSelectedChains(state, action) {
      const newItem = action.payload;

      state.selectedChains = [...state.selectedChains, newItem];
    },
    removeFromSelectedChains(state, action) {
      const selectedChains = state.selectedChains;
      const valueToRemove = action.payload;
      const filteredItems = selectedChains.filter(
        (item) => item !== valueToRemove
      );
      state.selectedChains = filteredItems;
    },
    purgeAll(state) {
      state.selectedChains = [];
      state.allUnchecked = true;
    },
  },
});

export const chainsActions = chainsSlice.actions;
export default chainsSlice;
