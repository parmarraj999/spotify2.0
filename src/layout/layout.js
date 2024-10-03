import React from 'react'
import { Outlet } from 'react-router-dom'
import './layout.css'
import Sidenav from './sidenav/sidenav'

function Layout() {
  return (
    <div className='layout_container'>
      <Sidenav/>
      <div className='layout_main'>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout