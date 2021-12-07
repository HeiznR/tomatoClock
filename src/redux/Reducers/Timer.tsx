import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitial {
  isActive: boolean;
  workLength: number;
  breakLength: number;
}

const initialState: IInitial = {
  isActive: false,
  workLength: 25,
  breakLength: 5,
};

const handleTimer = createSlice({
  name: "handleTimer",
  initialState,
  reducers: {
    setTimer(state, action) {
      state.isActive = !state.isActive;
    },
    setWorkLength(state, action: PayloadAction<number>) {
      state.workLength = action.payload;
    },
    setBreakLength(state, action: PayloadAction<number>) {
      state.breakLength = action.payload;
    },
  },
});

export default handleTimer.reducer;
export const { setTimer, setWorkLength, setBreakLength } = handleTimer.actions;
