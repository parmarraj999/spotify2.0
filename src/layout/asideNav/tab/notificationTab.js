import React, { useContext } from 'react'
import '../asideNav.css'
import { AsideTabContext } from '../../../provider/AsideTabProvider'

function NotificationTab() {

    const { setCurrentTab, setShowTab} = useContext(AsideTabContext)

    const handleCloseTab = () => {
        setCurrentTab("")
        setShowTab(false)
    }

  return (
    <div>
        <div className='tab_headers' >
            <h4>Notifications</h4>
            <div className='tab_header_icon' >
            <div onClick={handleCloseTab} > 
                <svg style={{width:"20px",height:'20px ',color:'white'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z"></path></svg>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NotificationTab