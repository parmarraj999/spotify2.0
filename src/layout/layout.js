import React, { useContext, useState } from 'react'
import { Outlet } from 'react-router-dom'
import './layout.css'
import Sidenav from './sidenav/sidenav'
import AsideNav from './asideNav/asideNav'
import { AsideTabContext } from '../provider/AsideTabProvider'
import Player from './player/player'

function Layout() {

  const { showTab } = useContext(AsideTabContext)

  console.log(showTab)

  return (
    <div className='layout_container'>
      <Sidenav />
      <div style={{width:"100%",height:'100%',display:'flex',flexDirection:'column',gap:'15px'}}>
        <div style={{width:"100%",height:'100%',gap:"15px",display:'flex'}}>
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
        <Player/>
      </div>
    </div>
  )
}

export default Layout