import { swaggerApi } from "services/swagger"

const { createAsyncThunk, createAction } = require("@reduxjs/toolkit")

const ADD_CONTACT = "add_contact"
const REMOVE_CONTACT = "remove_contact"
const GET_CONTACTS = "get_contact"
const EDIT_CONTACT = "edit_contact"
const SET_FILTER = "set_filter"


export const getSavedContacts = createAsyncThunk(
    GET_CONTACTS,
    async (token) => {
      const response = await swaggerApi.getContacts(token)
      return response
    }
  )

export const addContact = createAsyncThunk(
  ADD_CONTACT,
  async ({token, contact}) => {
    const response = await swaggerApi.postContact(token, contact)
    return response
  }
)

export const deleteContact = createAsyncThunk(
  REMOVE_CONTACT,
  async ({token, id}) => {
    const response = await swaggerApi.deleteContact(token, id)
    return response
  }
)

export const editContact = createAsyncThunk(
  EDIT_CONTACT,
  async ({token, contact}) => {
    const response = await swaggerApi.editContact(token, contact)
    return response
  }
)

export const setFilter = createAction(SET_FILTER)