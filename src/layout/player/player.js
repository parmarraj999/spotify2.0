import React from 'react'
import './player.css'

function Player() {
    return (
        <div className='player_container' >
            <div className='player_control_container'>
                <div>
                    <svg width="45" height="45" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="19.0085" cy="19.0085" r="19.0085" fill="#1ED760" />
                        <path d="M15.8401 14.2563V23.7606" stroke="black" stroke-width="3.16809" stroke-linecap="round" />
                        <path d="M22.1765 14.2563V23.7606" stroke="black" stroke-width="3.16809" stroke-linecap="round" />
                    </svg>
                </div>
                <div>
                    <svg width="30" height="30" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.21082 6.44092V15.9452" stroke="#898989" stroke-width="2.37606" stroke-linecap="round" />
                        <path d="M9.10026 12.4051C8.21694 11.8385 8.21694 10.5476 9.10026 9.98099L15.6855 5.75654C16.644 5.14171 17.9031 5.82993 17.9031 6.96862V15.4175C17.9031 16.5562 16.644 17.2444 15.6855 16.6296L9.10026 12.4051Z" fill="#898989" />
                    </svg>
                </div>
                <div>
                    <svg width="30" height="30" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.4841 6.44092V15.9452" stroke="#898989" stroke-width="2.37606" stroke-linecap="round" />
                        <path d="M14.5947 9.98109C15.478 10.5477 15.478 11.8386 14.5947 12.4052L8.00942 16.6297C7.05099 17.2445 5.79184 16.5563 5.79184 15.4176L5.79184 6.96871C5.79184 5.83003 7.05099 5.14181 8.00943 5.75664L14.5947 9.98109Z" fill="#898989" />
                    </svg>
                </div>
                <div>
                    <svg width="30" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.99622 8.06491V8.06491C6.48228 8.06491 7.87168 8.8016 8.70554 10.0317L9.49167 11.1913L10.5514 12.7545M22.5381 20.5704H17.9049C16.6627 20.5704 15.47 20.0841 14.582 19.2155L13.7085 18.3611M22.5381 20.5704L19.2526 23.9053M22.5381 20.5704L19.2526 17.2356" stroke="#898989" stroke-width="1.90085" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M4.99622 22.4799V22.4799C6.48596 22.4799 7.88259 21.7552 8.74032 20.5372L14.5475 12.2906C15.4376 11.0266 16.887 10.2745 18.4329 10.2745H22.538M22.538 10.2745L19.2526 6.9397M22.538 10.2745L19.2526 13.6094" stroke="#898989" stroke-width="1.90085" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <div>
                    <svg width="30" height="30" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.30904 18.7375H6.93298C5.18329 18.7375 3.76489 17.3191 3.76489 15.5694V9.23328C3.76489 7.48359 5.18329 6.06519 6.93298 6.06519H19.6053C21.355 6.06519 22.7734 7.48359 22.7734 9.23327V15.5694C22.7734 17.3191 21.355 18.7375 19.6053 18.7375H13.2692M13.2692 18.7375L16.4372 15.5694M13.2692 18.7375L16.4372 21.9056" stroke="#898989" stroke-width="1.90085" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </div>
            <div className='player_timing' >
                <h4>1:10</h4>
                <div className='player_liner'>
                    <div className='liner' ></div>
                </div>
                <h4>2:20</h4>
                <div className='mute_button' >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_2124_6365)">
                            <path d="M4.88697 15.7896C1.93878 14.3155 1.93878 10.1083 4.88697 8.63421L13.5307 4.31235C13.9739 4.09072 14.4955 4.41305 14.4955 4.90864L14.4955 19.5152C14.4955 20.0108 13.9739 20.3331 13.5307 20.1115L4.88697 15.7896Z" stroke="#898989" stroke-width="2" />
                            <path d="M18.829 17.2119C19.6098 16.999 20.3318 16.5265 20.9071 15.8381C21.7108 14.8764 22.1623 13.572 22.1623 12.2119C22.1623 10.8518 21.7108 9.54745 20.9071 8.58572C20.3318 7.89734 19.6098 7.42487 18.829 7.21191" stroke="#898989" stroke-width="1.66667" stroke-linecap="round" />
                            <path d="M17.9959 11.7057C17.9959 11.525 18.1479 11.3728 18.3148 11.4419C18.4159 11.4838 18.5078 11.5452 18.5852 11.6226C18.6626 11.7 18.724 11.7918 18.7658 11.8929C18.8077 11.994 18.8293 12.1024 18.8293 12.2118C18.8293 12.3213 18.8077 12.4296 18.7658 12.5307C18.724 12.6318 18.6626 12.7237 18.5852 12.8011C18.5078 12.8785 18.4159 12.9399 18.3148 12.9817C18.1479 13.0509 17.9959 12.8987 17.9959 12.7179L17.9959 12.2118L17.9959 11.7057Z" fill="#898989" stroke="#898989" stroke-width="0.833333" />
                        </g>
                        <defs>
                            <clipPath id="clip0_2124_6365">
                                <rect width="23.3333" height="23.3333" fill="white" transform="translate(0.495605 0.54541)" />
                            </clipPath>
                        </defs>
                    </svg>

                </div>
            </div>
        </div>
    )
}

export default Player