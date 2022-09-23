import { createReducer } from "@reduxjs/toolkit";
import { currentUser, loginUser, logoutUser, registerNewUser } from "redux/actions/user";

export const userReducer = createReducer({}, {
    [registerNewUser.fulfilled]: (state, {payload}) => {state = payload},
    [loginUser.fulfilled]: (state, {payload}) => {
        state.name = payload.user.name
        state.email = payload.user.email
        state.token = payload.token
    },
    [logoutUser.fulfilled]: (state, {payload}) => {state.token = ""},
    [currentUser.fulfilled]: (state, {payload}) => {state = payload},
})

