import React, { useContext } from 'react'
import FriendNav from './tab/friendTab'
import { AsideTabContext } from '../../provider/AsideTabProvider'
import SettingTab from './tab/settingTab'
import NotificationTab from './tab/notificationTab'
import { useLocation } from 'react-router-dom'

function AsideNav() {

  const { currentTab, setShowTab } = useContext(AsideTabContext)

  const {pathname} = useLocation();
  if(pathname==='/playlist'){
    setShowTab(false)
  }else{
    setShowTab(true)
  }

  return (
    <div className='aside_nav_container' >
      {
        currentTab === "friends" ?
        <FriendNav /> : ""
      }
      {
        currentTab === 'setting' ?
        <SettingTab/> : ""
      }
      {
        currentTab === "notification" ?
        <NotificationTab/> : ""
      }
    </div>
  )
}

export default AsideNav