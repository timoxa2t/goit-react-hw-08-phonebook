
import axios from "axios";

const baseUrl = "https://connections-api.herokuapp.com/"

const GET = "GET"
const POST = "POST"
const PATCH = "PATCH"
const DELETE = "DELETE"


function addBearerTokenToHeaders(headers, token){
    headers.Authorization = `Bearer ${token}`
}

function get(path, token = "", data = {}){
    const headers = {}
    if(token !== ""){
        addBearerTokenToHeaders(headers, token)
    }  
    return axios({
        method: GET,
        url: baseUrl + path,
        data,
        headers
    })
}

function post(path, token = "", data = {}){
    const headers = {}
    if(token !== ""){
        addBearerTokenToHeaders(headers, token)
    }  
    return axios({
        method: POST,
        url: baseUrl + path,
        data,
        headers
    })
}

function del(path, token = "", id){
    const headers = {}
    if(token !== ""){
        addBearerTokenToHeaders(headers, token)
    }  
    return axios({
        method: DELETE,
        url: baseUrl + path + id,
        headers
    })
}

function patch(path, token = "", id, data = {}){
    const headers = {}
    if(token !== ""){
        addBearerTokenToHeaders(headers, token)
    }  
    return axios({
        method: PATCH,
        url: baseUrl + path + "/" + id,
        data,
        headers
    })
}

function registerUser(user){
    return post('users/signup', "", user)
}

function loginUser(user){
    return post('users/login', "",user)
}

function logoutUser(token){
    return post('users/logout', token)
}

function currentUser(token){
    return get('users/current', token)
}

async function getContacts(token){
    const res = await get('contacts/', token)
    return res.data
}

async function postContact(token, contact){
    const res = await post('contacts/', token, contact)
    return res.data
}

async function deleteContact(token, contactId){
    await del('contacts/', token, contactId)
    return contactId
}

async function editContact(token, contact){
    const res = await patch('contacts/', token, contact.id, contact)
    return res.data
}


export const swaggerApi = {
    registerUser,
    loginUser,
    logoutUser,
    currentUser,
    getContacts,
    postContact,
    deleteContact,
    editContact
}