import React from 'react'
import './navButton.css'
import classNames from 'classnames'
import { useLocation } from 'react-router-dom'

function NavButton() {
    return (
        <div >
        </div>
    )
}
export default NavButton

// ----- library button ----- 

export const LibraryButton = () => {

    const location = useLocation();
    const { pathname } = location;

    const buttonClass = classNames("navigation_button", {
        "active": pathname === '/library'
    })

    return (
        <div className={buttonClass}>
            <div className='navigation_button_icon'>
                {
                    pathname === '/library' ?



                        <svg width="41" height="42" viewBox="0 0 41 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_2171_6716)">
                                <path d="M11.562 12.3567V29.6435" stroke="#E0E0E0" stroke-width="2.02054" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M17.3242 12.3567V29.6435" stroke="#E0E0E0" stroke-width="2.02054" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M23.0864 29.6435V12.3567L28.8487 16.346V29.6435H23.0864Z" fill="#E0E0E0" stroke="#E0E0E0" stroke-width="2.02054" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_2171_6716">
                                    <rect width="40.4108" height="40.4108" fill="white" transform="translate(0 0.794556)" />
                                </clipPath>
                            </defs>
                        </svg>


                        :
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.8667 6.86719V17.1339" stroke="#898989" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M10.2889 6.86719V17.1339" stroke="#898989" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M13.7111 17.1339V6.86719L17.1333 9.23642V17.1339H13.7111Z" stroke="#898989" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                }
            </div>
            My library
        </div>
    )
}

// ----- home button ---- 

export const HomeButton = () => {

    const location = useLocation();
    const { pathname } = location;

    const buttonClass = classNames("navigation_button", {
        "active": pathname === '/'
    })

    return (
        <div className={buttonClass} >
            <div className='navigation_button_icon'>
                {
                    pathname === '/' ?

                        <svg width="40" height="40" viewBox="0 0 41 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.1027 20.2266V27.7351C10.1027 28.665 10.8565 29.4188 11.7864 29.4188H15.154C15.7202 29.4475 16.195 28.9962 16.195 28.4293V23.5219C16.195 22.5962 16.9422 21.8441 17.8679 21.8382L22.6554 21.8072C23.5895 21.8011 24.35 22.5568 24.35 23.4909V28.5122C24.35 29.0129 24.756 29.4188 25.2567 29.4188H28.6243C29.5542 29.4188 30.3081 28.665 30.3081 27.7351V20.2266C30.3081 19.7313 30.09 19.2611 29.7119 18.9412L21.293 11.8175C20.6652 11.2863 19.7455 11.2863 19.1177 11.8175L10.6988 18.9412C10.3207 19.2611 10.1027 19.7313 10.1027 20.2266Z" fill="#E0E0E0" stroke="#E0E0E0" stroke-width="2.3573" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        :

                        <svg width="41" height="42" viewBox="0 0 41 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25.2576 29.4188H28.6251C29.5551 29.4188 30.3089 28.665 30.3089 27.7351V20.2266C30.3089 19.7313 30.0909 19.2611 29.7128 18.9412L21.2938 11.8175C20.6661 11.2863 19.7464 11.2863 19.1186 11.8175L10.6997 18.9412C10.3216 19.2611 10.1035 19.7313 10.1035 20.2266V27.7351C10.1035 28.665 10.8574 29.4188 11.7873 29.4188H15.1549" stroke="#898989" stroke-width="2.3573" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                }
            </div>
            Home
        </div>
    )
}

export const Discover = () => {

    const location = useLocation();
    const { pathname } = location;

    const buttonClass = classNames("navigation_button", {
        "active": pathname === '/discover'
    })

    return (
        <div className={buttonClass}>
            <div className='navigation_button_icon'>
                {
                    pathname === '/discover' ?

                        <svg width="41" height="42" viewBox="0 0 41 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.0859 32.1759L20.5897 30.3817C21.8152 26.0163 25.2266 22.6049 29.592 21.3793L31.3862 20.8756L29.592 20.3719C25.2266 19.1463 21.8152 15.7349 20.5897 11.3696L20.0859 9.5753L19.5822 11.3696C18.3567 15.7349 14.9452 19.1463 10.5799 20.3719L8.78563 20.8756L10.5799 21.3793C14.9452 22.6049 18.3567 26.0163 19.5822 30.3816L20.0859 32.1759Z" fill="#E0E0E0" stroke="#E0E0E0" stroke-width="2" />
                        </svg>
                        :

                        <svg width="40" height="40" viewBox="0 0 41 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.0864 32.1759L20.5902 30.3817C21.8157 26.0163 25.2271 22.6049 29.5925 21.3793L31.3867 20.8756L29.5925 20.3719C25.2271 19.1463 21.8157 15.7349 20.5902 11.3696L20.0864 9.5753L19.5827 11.3696C18.3572 15.7349 14.9457 19.1463 10.5804 20.3719L8.78611 20.8756L10.5804 21.3793C14.9457 22.6049 18.3572 26.0163 19.5827 30.3816L20.0864 32.1759Z" stroke="#898989" stroke-width="2" />
                        </svg>
                }
            </div>
            Discover
        </div>
    )
}