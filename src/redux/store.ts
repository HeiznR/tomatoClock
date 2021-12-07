import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import sideBar from "./Reducers/SideBar";
import handleTimer from "./Reducers/Timer";
import ToDoo from "./Reducers/ToDoo";

const rootReducer = combineReducers({
    sideBar: sideBar,
    timer: handleTimer,
    toDoo: ToDoo,
});
export type rootState = ReturnType<typeof rootReducer>;
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
