import { configureStore } from "@reduxjs/toolkit";
import {contactsSliceReducer} from './contacts/slice'
import {changeFilterReducer} from './filters/slice'

import authReducer from './auth/slice'


export const store = configureStore({
    reducer: {
        contacts: contactsSliceReducer,
        filters: changeFilterReducer,
        auth: authReducer,
    },
});