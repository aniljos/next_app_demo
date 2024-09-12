import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./authReducer";

const reducers = combineReducers({
    auth: authReducer
});

export const store = configureStore({
    reducer: reducers
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;