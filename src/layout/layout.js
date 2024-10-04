import React from 'react'
import { Outlet } from 'react-router-dom'
import './layout.css'
import Sidenav from './sidenav/sidenav'
import AsideNav from './asideNav/asideNav'

function Layout() {
  return (
    <div className='layout_container'>
      <Sidenav/>
      <div className='layout_main'>
        <Outlet />
      </div>
      <div className='layout_main_sidebar' >
        <AsideNav/>
      </div>
    </div>
  )
}

export default Layout