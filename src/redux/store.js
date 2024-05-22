import { configureStore } from "@reduxjs/toolkit";
import { contactsSliceReducer } from "./contactsSlice";
import { changeFilterReducer } from "./filtersSlice";
import authReducer from "./auth/slice";


export const store = configureStore({
    reducer: {
        contacts: contactsSliceReducer,
        filters: changeFilterReducer,
        auth: authReducer,
    },
});