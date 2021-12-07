import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitial {
    mass: string[];
}

const initialState: IInitial = {
    mass: [],
};

const handleToDoo = createSlice({
    name: "handleTimer",
    initialState,
    reducers: {
        addRecord(state, action: PayloadAction<string>) {
            state.mass.push(action.payload);
        },
    },
});

export default handleToDoo.reducer;
export const { addRecord } = handleToDoo.actions;
