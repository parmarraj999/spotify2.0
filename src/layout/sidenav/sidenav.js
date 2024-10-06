import React from 'react'
import './sidenav.css'
import { useLocation } from 'react-router-dom'

function Sidenav() {

  const location = useLocation();
  const {pathname} = location;

  return (
    <div className='sidebar_layout' style={pathname === "/library" ? {background:"#111111"}:{}}>
      <div className='sidebar_links' >
        <div className='flex_align'>
          <div className='navigation_button_icon' >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.6055 10.1992L18.5805 11.1742M17.6055 10.1992L13.3014 14.5033C13.2224 14.5824 13.1721 14.6857 13.1586 14.7967L12.9436 16.5653C12.8932 16.9794 12.3881 17.1536 12.0932 16.8587L9.5696 14.3351M17.6055 10.1992L13.7055 6.29922M12.7305 5.32422L13.7055 6.29922M13.7055 6.29922L9.40145 10.6033C9.32237 10.6824 9.21907 10.7327 9.10805 10.7462L7.33944 10.9612C6.92537 11.0115 6.7511 11.5167 7.04604 11.8116L9.5696 14.3351M9.5696 14.3351L6.25 17.6547" stroke="#898989" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
          Pins
        </div>
        <div>
          <svg style={{ colro: "grey", width: '25px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg>
        </div>
      </div>
      <div className='sidebar_links' >
        <div className='flex_align'>
          <div className='navigation_button_icon' >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="12" height="12" rx="1.8" transform="matrix(1 0 0 -1 6 18.8008)" stroke="#898989" stroke-width="1.2" stroke-linejoin="round" />
              <path d="M12.2345 13.3529V10.375C12.2345 10.1679 12.4024 10 12.6095 10H14M12.2345 13.3529V15.3745C12.2345 15.7098 11.9956 15.9995 11.6603 16C10.9983 16.001 10 15.8105 10 14.6524C10 12.9198 12.2345 13.3529 12.2345 13.3529Z" stroke="#898989" stroke-width="0.9" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M7.19995 6.80078H16.8V6.80078C16.8 5.80667 15.9941 5.00078 15 5.00078H8.99995C8.00584 5.00078 7.19995 5.80667 7.19995 6.80078V6.80078Z" stroke="#898989" stroke-width="0.9" stroke-linejoin="round" />
            </svg>
          </div>
          Playlist
        </div>
        <div>
          <svg style={{ colro: "grey", width: '25px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg>
        </div>
      </div>
      <div className='sidebar_links' >
        <div className='flex_align'>
          <div className='navigation_button_icon' >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.1069 8.05788L12 9.13043L10.8931 8.05788C9.73237 6.93323 7.87041 6.99533 6.78722 8.19481C5.73615 9.35872 5.59145 11.1021 6.54321 12.3485C6.66017 12.5017 6.77517 12.6483 6.88462 12.7826C7.57737 13.6325 9.08885 15.1166 9.84615 15.913C10.4057 16.5015 10.9086 16.9922 11.2875 17.3497C11.6876 17.7272 12.3052 17.7189 12.7061 17.3423C13.4048 16.6858 14.4761 15.6632 15.2308 14.8696C15.9881 14.0731 16.4226 13.6325 17.1154 12.7826C17.2248 12.6483 17.3398 12.5017 17.4568 12.3485C18.4086 11.1021 18.2638 9.35872 17.2128 8.19481C16.1296 6.99533 14.2676 6.93323 13.1069 8.05788Z" stroke="#898989" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
          Liked Songs
        </div>
      </div>
      <div className='sidebar_links' >
        <div className='flex_align'>
          <div className='navigation_button_icon' >
            <svg width="40" height="40" viewBox="0 0 41 42" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.7406 13.3197V29.6235C12.7406 30.5669 13.8069 31.1157 14.5746 30.5673L19.5113 27.0411C20.3178 26.465 21.4013 26.465 22.2079 27.0411L27.1445 30.5673C27.9122 31.1157 28.9785 30.5669 28.9785 29.6235V13.3197C28.9785 12.0386 27.9399 11 26.6588 11H15.0603C13.7792 11 12.7406 12.0386 12.7406 13.3197Z" stroke="#898989" stroke-width="2.3197" />
            </svg>
          </div>
          Saves
        </div>
      </div>
      <div className='sidebar_links' >
        <div className='flex_align'>
          <div className='navigation_button_icon' >
            <svg width="40" height="40" viewBox="0 0 41 42" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20.2065" cy="20.8488" r="2.75528" stroke="#898989" stroke-width="2.02054" />
              <path d="M20.2062 30.9514C14.6267 30.9514 10.1035 26.4282 10.1035 20.8487C10.1035 15.2691 14.6267 10.746 20.2062 10.746C23.1189 10.746 25.7436 11.9785 27.5873 13.9505" stroke="#898989" stroke-width="2.02054" stroke-linecap="round" />
              <path d="M29.2974 18.2217V25.7987M29.2974 25.7987V29.5617C29.2974 30.3108 28.7638 30.9642 28.0151 30.9406C26.7768 30.9016 25.0879 30.4575 25.0879 28.3244C25.0879 24.9568 29.2974 25.7987 29.2974 25.7987Z" stroke="#898989" stroke-width="1.68378" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
          Album
        </div>
      </div>
      <div className='sidebar_links' >
        <div className='flex_align'>
          <div className='navigation-button_icon' >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 16.2273C19 17.2063 18.2063 18 17.2273 18H6.77273C5.79368 18 5 17.2063 5 16.2273V8.14054V7.77273C5 6.79368 5.79368 6 6.77273 6H9.74797C10.3574 6 10.9242 6.31308 11.2486 6.829L11.5521 7.31155C11.8765 7.82746 12.4433 8.14054 13.0527 8.14054H17.2273C18.2063 8.14054 19 8.93422 19 9.91327V16.2273Z" stroke="#898989" stroke-width="1.2" stroke-linejoin="round" />
            </svg>
          </div>
          Folders
        </div>
      </div>
      <div className='sidebar_links' >
        <div className='flex_align'>
          <div className='navigation_button_icon' >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.853 7.64706V11.1765C11.853 12.6384 13.0382 13.8235 14.5001 13.8235C15.962 13.8235 17.1471 12.6384 17.1471 11.1765V10.5882V7.64706C17.1471 6.18513 15.962 5 14.5001 5C13.0382 5 11.853 6.18513 11.853 7.64706Z" stroke="#898989" stroke-width="1.2" stroke-linecap="round" />
              <path d="M9.5 11.4707C9.5 11.4707 10.0882 16.1766 14.5 16.1766M14.5 16.1766C18.9118 16.1766 19.5 11.4707 19.5 11.4707M14.5 16.1766V18.2354" stroke="#898989" stroke-width="1.2" stroke-linecap="round" />
              <path d="M4.5 8H8" stroke="#898989" stroke-width="1.2" stroke-linecap="round" />
              <path d="M4.5 12H7" stroke="#898989" stroke-width="1.2" stroke-linecap="round" />
              <path d="M4.5 16H8" stroke="#898989" stroke-width="1.2" stroke-linecap="round" />
            </svg>
          </div>
          Podcasts
        </div>
      </div>
      <div className='sidebar_links' >
        <div className='flex_align'>
          <div className='navigation_button_icon' >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.1865 18.3729L6.90471 16.8989C6.36989 16.7497 6 16.2624 6 15.7072V7.55805C6 6.76151 6.74171 6.17249 7.51756 6.35292L11.2294 7.21615C11.7898 7.34648 12.1865 7.84591 12.1865 8.42128V18.3729ZM12.1865 18.3729L17.4682 16.8989C18.003 16.7497 18.3729 16.2624 18.3729 15.7072V7.59765C18.3729 6.78867 17.6093 6.19731 16.8261 6.3997L13.9187 7.15097" stroke="#898989" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
          Audiobooks
        </div>
      </div>
      <div className='sidebar_links' >
        <div className='flex_align'>
          <div className='navigatio_button_icon' >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 8C14 9.10457 13.1046 10 12 10C10.8954 10 10 9.10457 10 8C10 6.89543 10.8954 6 12 6C13.1046 6 14 6.89543 14 8Z" stroke="#898989" stroke-width="1.2" />
              <path d="M10 12L7.8906 13.4063C7.3342 13.7772 7 14.4017 7 15.0704V16.0667C7 16.5821 7.41787 17 7.93333 17H12" stroke="#898989" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M16.5 8V12.5M16.5 12.5V14.7348C16.5 15.1798 16.1832 15.5678 15.7385 15.5538C15.0031 15.5306 14 15.2669 14 14C14 12 16.5 12.5 16.5 12.5Z" stroke="#898989" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
          Artist
        </div>
      </div>
    </div>
  )
}

export default Sidenav