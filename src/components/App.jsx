
import React from "react";
import Contacts from "pages/Contacts";
import { Route, Routes } from "react-router-dom";
import Register from "pages/Register";
import Login from "pages/Login";
import SharedLayout from "./SharedLayout";


export const App = () =>  {
  return (
    <Routes>
      <Route path="/goit-react-hw-08-phonebook/" element={<SharedLayout/>}>
        <Route path="contacts" element={<Contacts/>}/>
        <Route path="register" element={<Register/>}/>
        <Route path="login" element={<Login/>}/>
      </Route>
    </Routes>
  )
}

