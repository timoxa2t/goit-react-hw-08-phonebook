import { addContact, deleteContact, getSavedContacts, setFilter } from "redux/actions/phonebook";

const { createReducer } = require("@reduxjs/toolkit");


export const contactsReducer = createReducer({}, {
    [addContact.fulfilled]: (state, {payload}) => {state.items.push(payload)},
    [deleteContact.fulfilled]: (state, {payload}) => {state.items = state.items.filter(item => item.id !== payload)},
    [getSavedContacts.fulfilled]: (state, {payload}) => {state.items = payload},
    [setFilter]: (state, {payload}) => {state.filter = payload},
})
