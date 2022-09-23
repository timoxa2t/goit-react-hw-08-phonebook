import { configureStore } from "@reduxjs/toolkit"
import { contactsReducer } from "./reducers/phonebook"
import { userReducer } from "./reducers/user"

const inititalState = {
    contacts: {
      items: [],
      filter: ''
    },
    user: {
        email: '',
        name: '',
        token: ''
    }
  }
  

export const store = configureStore({
    reducer:{
        contacts: contactsReducer,
        user: userReducer
    },
    preloadedState: inititalState
})

// store.dispatch(getSavedContacts())