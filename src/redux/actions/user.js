import { createAsyncThunk } from "@reduxjs/toolkit";
import { swaggerApi } from "services/swagger";

const REGISTER = "register"
const LOGIN = "login"
const LOGOUT = "logout"
const GET_CURRENT = "currrent"

export const registerNewUser = createAsyncThunk(
    REGISTER,
    async (user) => {
        const response = await swaggerApi.registerUser(user)
        return response.data
    }
  )

export const loginUser = createAsyncThunk(
    LOGIN,
    async (user) => {
        const response = await swaggerApi.loginUser(user)
        return response.data
    }
  )

export const logoutUser = createAsyncThunk(
    LOGOUT,
    async ({token, callback}) => {
        const response = await swaggerApi.logoutUser(token)
        callback()
        return response.data
    }
)

export const currentUser = createAsyncThunk(
    GET_CURRENT,
    async (user) => {
        const response = await swaggerApi.currentUser(user)
        return response.data
    }
)
