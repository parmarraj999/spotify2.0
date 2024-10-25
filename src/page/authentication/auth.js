import React, { useState } from 'react'
import './auth.css' 
import SignUp from './signUp'
import { Link, Outlet, useLocation } from 'react-router-dom'
import LogIn from './logIn';

function Auth() {

   const [current,setCurrent] = useState('login')

  return (
    <div className='auth_page_container' >
        {
            current === "login" ? 
            <LogIn current={current} setCurrent={setCurrent}/> : ""
        }
        {
            current === "signup" ? 
            <SignUp current={current} setCurrent={setCurrent} /> : ""
        }
    </div>
  )
}

export default Auth