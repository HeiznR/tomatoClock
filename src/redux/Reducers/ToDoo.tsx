import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAdd } from "../../types/Add";

interface IInitial {
    activeRecords: string[];
    doneRecords: string[];
    data: IAdd;
}

const initialState: IInitial = {
    activeRecords: [],
    doneRecords: [],
    data: {
        index: 2,
        type: "",
        value: "",
    },
};

const handleToDoo = createSlice({
    name: "handleTimer",
    initialState,
    reducers: {
        addRecord(state, action: PayloadAction<string>) {
            state.activeRecords.push(action.payload);
        },
        deleteRecord(state, action: PayloadAction<IAdd>) {
            if (action.payload.type === "active")
                state.activeRecords.splice(action.payload.index, 1);
            else state.doneRecords.splice(action.payload.index, 1);
        },
        addToDoneRecords(state, action: PayloadAction<IAdd>) {
            state.doneRecords.push(action.payload.value!);
            state.activeRecords.splice(action.payload.index, 1);
        },
    },
});

export default handleToDoo.reducer;
export const { addRecord, deleteRecord, addToDoneRecords } =
    handleToDoo.actions;
