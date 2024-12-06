import React, { useContext } from 'react'
import { AsideTabContext } from '../../../provider/AsideTabProvider'
import { auth } from '../../../firbeaseConfig/firebaseConfig'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { UserCredentialContext } from '../../../provider/UserCredentialProvider'

function SettingTab() {

    const { setCurrentTab, setShowTab } = useContext(AsideTabContext)
    const userData = useContext(UserCredentialContext).userData;

    const navigate = useNavigate();

    const handleCloseTab = () => {
        setCurrentTab("")
        setShowTab(false)
    }

    const handleClick = async () => {

        await signOut(auth)
        .then(()=>{
            console.log('Sign Out Successfully')
            window.localStorage.removeItem('userId')
            window.localStorage.removeItem('isLogIn')
            window.localStorage.removeItem('token')
            navigate('/auth')
        })

    }

    return (
        <div className='setting_nav_container'>
            <div className='tab_headers' >
                <h4>Setting</h4>
                <div className='tab_header_icon' >
                    <div onClick={handleCloseTab} >
                        <svg style={{ width: "20px", height: '20px ', color: 'white' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z"></path></svg>
                    </div>
                </div>
            </div>
            <div className='setting_profile_section' >
              <div className='setting_profile'>
                <img src={userData.profilePicture} />
              </div>
              <div>
                <h3>{userData.name}</h3>
                <h4>{userData.email}</h4>
              </div>
            </div>
            <button onClick={handleClick} className='log_out_button' > Log Out</button>
        </div>
    )
}

export default SettingTab