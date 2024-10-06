import React, { useContext } from 'react'
import FriendNav from './tab/friendTab'
import { AsideTabContext } from '../../provider/AsideTabProvider'
import SettingTab from './tab/settingTab'
import NotificationTab from './tab/notificationTab'

function AsideNav() {

  const { currentTab } = useContext(AsideTabContext)

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