import { createAsyncThunk } from "@reduxjs/toolkit";
import { swaggerApi } from "services/swagger";

const REGISTER = "register"
const LOGIN = "login"
const LOGOUT = "logout"
const GET_CURRENT = "currrent"

export const registerNewUser = createAsyncThunk(
    REGISTER,
    async (user) => {
        try{
            const response = await swaggerApi.registerUser(user)
            localStorage.token = response.data.token
            localStorage.email = response.data.user.email
            return response.data
        }
        catch(e){
            alert(e.message)
            return {
                user: {
                    name: "",
                    email: ""
                },
                token: ""
            }
        }
    }
  )

export const loginUser = createAsyncThunk(
    LOGIN,
    async (user) => {
        try{
            const response = await swaggerApi.loginUser(user)
            localStorage.token = response.data.token
            localStorage.email = response.data.user.email
            return response.data
        }
        catch(e){
            alert(e.message)
            return {
                user: {
                    name: "",
                    email: ""
                },
                token: ""
            }
        }
    }
  )

export const logoutUser = createAsyncThunk(
    LOGOUT,
    async ({token, callback}) => {
        const response = await swaggerApi.logoutUser(token)
        localStorage.token = ''
        localStorage.email = ''
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
