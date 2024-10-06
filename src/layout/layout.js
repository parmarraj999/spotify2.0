import React, { useContext, useState } from 'react'
import { Outlet } from 'react-router-dom'
import './layout.css'
import Sidenav from './sidenav/sidenav'
import AsideNav from './asideNav/asideNav'
import { AsideTabContext } from '../provider/AsideTabProvider'

function Layout() {

  const { showTab } = useContext(AsideTabContext)

  console.log(showTab)

  return (
    <div className='layout_container'>
      <Sidenav />
      <div className='layout_main'>
        <Outlet />
      </div>
      {
        showTab ?
      <div className='layout_main_sidebar' >
        <AsideNav />
      </div>
      : ""
      }
    </div>
  )
}

export default Layout