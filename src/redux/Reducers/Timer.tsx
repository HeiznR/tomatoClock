import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitial {
  isActive: boolean;
}

const initialState: IInitial = {
  isActive: false,
};

const handleTimer = createSlice({
  name: "handleTimer",
  initialState,
  reducers: {
    setTimer(state) {
      state.isActive = !state.isActive;
    },
  },
});

export default handleTimer.reducer;
export const { setTimer } = handleTimer.actions;
