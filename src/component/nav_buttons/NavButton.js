import React from 'react'
import './navButton.css'
import classNames from 'classnames'

function NavButton({ text, icon, width }) {

   const buttonClass = classNames("navigation_button",{
     "border-radius": icon==="home"
   })

    return (
        <div className={buttonClass} style={{ width: `${width}` }} >
            {
                icon === "library" ?
                    <div className='navigation_button_icon'>
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.8667 6.86719V17.1339" stroke="#898989" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M10.2889 6.86719V17.1339" stroke="#898989" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M13.7111 17.1339V6.86719L17.1333 9.23642V17.1339H13.7111Z" stroke="#898989" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div> : ""
            }
            {
                icon === "home" ?
                    <div className='navigation_button_icon'>

                        <svg width="40" height="40" viewBox="0 0 41 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.1027 20.2266V27.7351C10.1027 28.665 10.8565 29.4188 11.7864 29.4188H15.154C15.7202 29.4475 16.195 28.9962 16.195 28.4293V23.5219C16.195 22.5962 16.9422 21.8441 17.8679 21.8382L22.6554 21.8072C23.5895 21.8011 24.35 22.5568 24.35 23.4909V28.5122C24.35 29.0129 24.756 29.4188 25.2567 29.4188H28.6243C29.5542 29.4188 30.3081 28.665 30.3081 27.7351V20.2266C30.3081 19.7313 30.09 19.2611 29.7119 18.9412L21.293 11.8175C20.6652 11.2863 19.7455 11.2863 19.1177 11.8175L10.6988 18.9412C10.3207 19.2611 10.1027 19.7313 10.1027 20.2266Z" fill="#E0E0E0" stroke="#E0E0E0" stroke-width="2.3573" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    </div> : ""
            }
            {text}
        </div>
    )
}

export default NavButton