import React from 'react'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import LoginPage from './LoginPage'
export default function Trylogin() {
  return (

    <BrowserRouter >
    <Link to="/login"> Login</Link>
    <Routes>
        <Route path='/login' element={<LoginPage/>}>

        </Route>
    </Routes>


    </BrowserRouter>



  )
}
