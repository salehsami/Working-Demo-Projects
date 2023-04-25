import { BrowserRouter, Routes, Route } from "react-router-dom"
import React from 'react'
import Signup from "./Components/Signup"
import Login from "./Components/Login"
import User from "./Components/User"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/Signup" element={<Signup />}></Route>
        <Route exact path="/Login" element={<Login />}></Route>
        <Route exact path="/" element={<User/>}></Route>
      </Routes>
    
    </BrowserRouter>
  )
}
