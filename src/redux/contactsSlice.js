import { createSelector, createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./contactsOps";
import { selectNameFilter } from "./filtersSlice";

const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        loading: false,
        error: null
	},

    extraReducers: (builder) => builder
        .addCase(fetchContacts.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchContacts.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.items = action.payload;
        
        })
        .addCase(fetchContacts.rejected, (state, action) => {
            state.error = action.payload;
        })
        .addCase(addContact.pending, (state) => {
            state.loading = true;
        })
        .addCase(addContact.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.items.push(action.payload);
        })
        .addCase(addContact.rejected, (state, action) => {
            state.error = action.payload;
        })
        .addCase(deleteContact.pending, (state) => {
            state.loading = true;
        })
        .addCase(deleteContact.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            const index = state.items.findIndex((contact) => contact.id === action.payload.id);
            state.items.splice(index, 1);
        })
        .addCase(deleteContact.rejected, (state, action) => {
            state.error = action.payload;
        })
});



export const contactsSliceReducer = contactsSlice.reducer;

export const selectContacts = (state) => state.contacts.items;

export const selectIsLoading = (state) => state.contacts.loading;

export const selectError = (state) => state.contacts.error;

const filteredContacts = createSelector([selectContacts, selectNameFilter], (contacts, filter) => {
    return filter ? contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase())) : contacts;
});

export const selectFilteredContacts = (state) => filteredContacts(state);