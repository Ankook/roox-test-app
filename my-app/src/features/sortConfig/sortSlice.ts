import { createSlice } from "@reduxjs/toolkit";
import { SortConfigState } from "./types";

const initialState: SortConfigState = {
  sortType: "none",
};

export const sortSlice = createSlice({
  name: "sortConfig",
  initialState,
  reducers: {
    setSort(state: SortConfigState, action) {
      state.sortType = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSort } = sortSlice.actions;

export default sortSlice.reducer;
