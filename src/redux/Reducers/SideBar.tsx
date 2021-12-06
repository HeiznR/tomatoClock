import { createSlice } from "@reduxjs/toolkit";

interface IInitial {
  isActive: boolean;
}

const initialState: IInitial = {
  isActive: false,
};

const sideBar = createSlice({
  name: "createSlece",
  initialState,
  reducers: {
    handleSideBar(state) {
      state.isActive = !state.isActive;
    },
  },
});

export default sideBar.reducer;
export const { handleSideBar } = sideBar.actions;
