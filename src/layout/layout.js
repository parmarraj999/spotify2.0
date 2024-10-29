import React, { useContext, useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import './layout.css'
import Sidenav from './sidenav/sidenav'
import AsideNav from './asideNav/asideNav'
import { AsideTabContext } from '../provider/AsideTabProvider'
import Player from './player/player'
import ProfilePicture from '../component/profilePicture/profilePicture'
import { auth } from '../firbeaseConfig/firebaseConfig'
import { UserCredentialContext } from '../provider/UserCredentialProvider'

function Layout() {

  const { showTab } = useContext(AsideTabContext)

  const { pathname } = useLocation();

  const [showPhotoCard, setShowPhotoCard] = useState(false)

  const userData = useContext(UserCredentialContext).userData

  useEffect(()=>{
    if(userData.profilePicture === "../../../../default.png"){
      setShowPhotoCard(true)
    } 
  },[])
  

  return (
    <div className='layout_container'>
      {
        showPhotoCard ?
          <ProfilePicture setShowPhotoCard={setShowPhotoCard} />
          : ""
      }
      <Sidenav />
      <div style={{ width: "100%", height: '100%', display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div style={{ width: "100%", height: '100%', gap: "15px", display: 'flex' }}>
          <div className='layout_main' style={pathname === "/playlist" ? {
            background: "linear-gradient(#3B4FB678,#06060678)"
          } : {}}>
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
        <Player />
      </div>
    </div>
  )
}

export default Layout