import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitial {
    isActive: boolean;
    workLength: number;
    breakLength: number;
}

const initialState: IInitial = {
    isActive: false,
    workLength: 1800,
    breakLength: 300,
};

const handleTimer = createSlice({
    name: "handleTimer",
    initialState,
    reducers: {
        setTimer(state) {
            state.isActive = !state.isActive;
        },
        setWorkLength(state, action: PayloadAction<number>) {
            state.workLength = action.payload * 60;
        },
        setBreakLength(state, action: PayloadAction<number>) {
            state.breakLength = action.payload * 60;
        },
    },
});

export default handleTimer.reducer;
export const { setTimer, setWorkLength, setBreakLength } = handleTimer.actions;
