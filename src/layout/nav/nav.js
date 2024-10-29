import React, { useContext } from 'react'
import './nav.css'
import NavButton, { Discover, HomeButton, LibraryButton } from '../../component/nav_buttons/NavButton'
import SearchBar from '../../component/searchBar/searchBar'
import { Link, useLocation } from 'react-router-dom'
import { AsideTabContext } from '../../provider/AsideTabProvider'

function Nav() {

  const location = useLocation();
  const { pathname } = location;

  const { currentTab, setCurrentTab, setShowTab } = useContext(AsideTabContext);

  const hanldeTab = (tabText) => {
    setCurrentTab(tabText)
    setShowTab(true)
  }
  const closeTab = () => {
    setCurrentTab("")
    setShowTab(false)
  }

  return (
    <div className='nav_container' >
      <div style={{ display: 'flex', alignItems: "center", gap: '15px' }}>
        <Link to="/library" >
          <LibraryButton />
        </Link>
        <Link to="/" >
          <HomeButton />
        </Link>
        <Link to="/discover">
          <Discover />
        </Link>
        <Link to="/search">
          <SearchBar />
        </Link>
      </div>
          <div style={{ display: 'flex', alignItems: "center", height: '100%', gap: '.5rem' }} >
            {
              currentTab === "notification" ?
                <div onClick={closeTab}>
                  <svg style={{ width: '30px', color: 'white' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C16.9706 2 21 6.04348 21 11.0314V20H3V11.0314C3 6.04348 7.02944 2 12 2ZM9.5 21H14.5C14.5 22.3807 13.3807 23.5 12 23.5C10.6193 23.5 9.5 22.3807 9.5 21Z"></path></svg>
                </div>
                :
                <div onClick={() => hanldeTab('notification')}>
                  <svg style={{ width: '30px', color: 'grey' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5 18H19V11.0314C19 7.14806 15.866 4 12 4C8.13401 4 5 7.14806 5 11.0314V18ZM12 2C16.9706 2 21 6.04348 21 11.0314V20H3V11.0314C3 6.04348 7.02944 2 12 2ZM9.5 21H14.5C14.5 22.3807 13.3807 23.5 12 23.5C10.6193 23.5 9.5 22.3807 9.5 21Z"></path></svg>
                </div>
            }
            <div>
              <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25.5012 13.2591C25.71 13.7026 26.2387 13.8929 26.6823 13.6842C27.1258 13.4755 27.3161 12.9467 27.1074 12.5032L25.5012 13.2591ZM14.5722 16.9817C15.4483 16.8395 15.4484 16.8399 15.4485 16.8403C15.4485 16.8404 15.4485 16.8407 15.4486 16.8409C15.4486 16.8413 15.4487 16.8415 15.4487 16.8417C15.4487 16.842 15.4487 16.8419 15.4486 16.8413C15.4485 16.8403 15.4481 16.8376 15.4474 16.8333C15.4462 16.8248 15.4441 16.81 15.4415 16.7892C15.4361 16.7477 15.4286 16.6829 15.4211 16.598C15.4059 16.4279 15.391 16.1798 15.3938 15.8802C15.3992 15.275 15.4763 14.4918 15.7457 13.7259C16.0127 12.9667 16.4601 12.2456 17.2001 11.7092C17.9379 11.1745 19.0417 10.7687 20.7189 10.7687V8.99353C18.7465 8.99353 17.2573 9.47532 16.1583 10.2719C15.0615 11.0669 14.4284 12.121 14.0711 13.1369C13.7162 14.1461 13.6252 15.1381 13.6187 15.8642C13.6154 16.2303 13.6335 16.5369 13.6529 16.7552C13.6626 16.8645 13.6727 16.9521 13.6807 17.0147C13.6847 17.0459 13.6882 17.071 13.6908 17.0893C13.6922 17.0985 13.6933 17.106 13.6942 17.1117C13.6946 17.1146 13.695 17.1171 13.6954 17.1191C13.6955 17.1201 13.6957 17.121 13.6958 17.1218C13.6958 17.1222 13.6959 17.1227 13.696 17.1229C13.696 17.1234 13.6961 17.1239 14.5722 16.9817ZM20.7189 10.7687C22.2237 10.7687 23.2655 11.0956 23.9937 11.5458C24.7198 11.9947 25.1919 12.6018 25.5012 13.2591L27.1074 12.5032C26.676 11.5864 25.9909 10.6935 24.9272 10.0359C23.8656 9.3796 22.4851 8.99353 20.7189 8.99353V10.7687Z" fill="#898989" />
                <path d="M26.932 17.4254H14.506C13.0354 17.4254 11.8433 18.6176 11.8433 20.0881V29.4077C11.8433 30.8782 13.0354 32.0704 14.506 32.0704H26.932C28.4026 32.0704 29.5947 30.8782 29.5947 29.4077V20.0881C29.5947 18.6176 28.4026 17.4254 26.932 17.4254Z" stroke="#898989" stroke-width="1.77515" />
                <circle cx="20.7189" cy="24.9698" r="2.66272" stroke="#898989" stroke-width="1.77515" />
              </svg>
            </div>
            <div>
              {
                currentTab === "friends" ?
                  <div onClick={closeTab} >
                    <svg width="41" height="42" viewBox="0 0 41 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M29.5784 15.1082C29.5784 16.968 28.0707 18.4757 26.2108 18.4757C24.351 18.4757 22.8433 16.968 22.8433 15.1082C22.8433 13.2483 24.351 11.7406 26.2108 11.7406C28.0707 11.7406 29.5784 13.2483 29.5784 15.1082Z" fill="#E0E0E0" stroke="#E0E0E0" stroke-width="2.02054" />
                      <path d="M19.2916 24.2112L20.0414 23.7114C21.8684 22.4934 24.0151 21.8434 26.2109 21.8434C28.4067 21.8434 30.5534 22.4934 32.3805 23.7114L33.1303 24.2112C34.0671 24.8358 34.6298 25.8873 34.6298 27.0132V28.6908C34.6298 29.5587 33.9262 30.2623 33.0583 30.2623H26.2109H19.3635C18.4956 30.2623 17.792 29.5587 17.792 28.6908V27.0132C17.792 25.8873 18.3547 24.8358 19.2916 24.2112Z" fill="#E0E0E0" stroke="#E0E0E0" stroke-width="2.02054" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M18.1595 15.1082C18.1595 16.968 16.6517 18.4757 14.7919 18.4757C12.932 18.4757 11.4243 16.968 11.4243 15.1082C11.4243 13.2483 12.932 11.7406 14.7919 11.7406C16.6517 11.7406 18.1595 13.2483 18.1595 15.1082Z" fill="#E0E0E0" stroke="#E0E0E0" stroke-width="2.02054" />
                      <path d="M8.09111 24.2457L8.48847 24.0224C10.4133 22.941 12.5841 22.3729 14.792 22.3729C14.792 22.3729 14.1468 24.5831 14.0055 26.3729C13.9525 27.0437 13.9465 27.8834 13.9562 28.6108C13.9682 29.5096 13.2518 30.2623 12.3529 30.2623H7.94458C7.07665 30.2623 6.37305 29.5587 6.37305 28.6908V27.1816C6.37305 25.9644 7.02991 24.8419 8.09111 24.2457Z" fill="#E0E0E0" stroke="#E0E0E0" stroke-width="2.02054" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                  :
                  <div onClick={() => hanldeTab("friends")}>
                    <svg width="41" height="42" viewBox="0 0 41 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M29.5784 15.1082C29.5784 16.968 28.0707 18.4757 26.2108 18.4757C24.351 18.4757 22.8433 16.968 22.8433 15.1082C22.8433 13.2483 24.351 11.7406 26.2108 11.7406C28.0707 11.7406 29.5784 13.2483 29.5784 15.1082Z" stroke="#898989" stroke-width="2.02054" />
                      <path d="M19.2916 24.2112L20.0414 23.7114C21.8684 22.4934 24.0151 21.8434 26.2109 21.8434C28.4067 21.8434 30.5534 22.4934 32.3805 23.7114L33.1303 24.2112C34.0671 24.8358 34.6298 25.8873 34.6298 27.0132V28.6908C34.6298 29.5587 33.9262 30.2623 33.0583 30.2623H26.2109H19.3635C18.4956 30.2623 17.792 29.5587 17.792 28.6908V27.0132C17.792 25.8873 18.3547 24.8358 19.2916 24.2112Z" stroke="#898989" stroke-width="2.02054" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M18.1595 15.1082C18.1595 16.968 16.6517 18.4757 14.7919 18.4757C12.932 18.4757 11.4243 16.968 11.4243 15.1082C11.4243 13.2483 12.932 11.7406 14.7919 11.7406C16.6517 11.7406 18.1595 13.2483 18.1595 15.1082Z" stroke="#898989" stroke-width="2.02054" />
                      <path d="M14.792 21.8434V21.8434C12.5961 21.8434 10.4494 22.4934 8.62241 23.7114L7.87262 24.2112C6.93577 24.8358 6.37305 25.8873 6.37305 27.0132V28.6908C6.37305 29.5587 7.07665 30.2623 7.94458 30.2623H14.0055" stroke="#898989" stroke-width="2.02054" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>

              }
            </div>
            <div>
              {
                currentTab === 'setting' ?
                  <div onClick={closeTab}>
                    <svg style={{ width: '30px', color: "white" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M9.95401 2.2106C11.2876 1.93144 12.6807 1.92263 14.0449 2.20785C14.2219 3.3674 14.9048 4.43892 15.9997 5.07103C17.0945 5.70313 18.364 5.75884 19.4566 5.3323C20.3858 6.37118 21.0747 7.58203 21.4997 8.87652C20.5852 9.60958 19.9997 10.736 19.9997 11.9992C19.9997 13.2632 20.5859 14.3902 21.5013 15.1232C21.29 15.7636 21.0104 16.3922 20.6599 16.9992C20.3094 17.6063 19.9049 18.1627 19.4559 18.6659C18.3634 18.2396 17.0943 18.2955 15.9997 18.9274C14.9057 19.559 14.223 20.6294 14.0453 21.7879C12.7118 22.067 11.3187 22.0758 9.95443 21.7906C9.77748 20.6311 9.09451 19.5595 7.99967 18.9274C6.90484 18.2953 5.63539 18.2396 4.54272 18.6662C3.61357 17.6273 2.92466 16.4164 2.49964 15.1219C3.41412 14.3889 3.99968 13.2624 3.99968 11.9992C3.99968 10.7353 3.41344 9.60827 2.49805 8.87524C2.70933 8.23482 2.98894 7.60629 3.33942 6.99923C3.68991 6.39217 4.09443 5.83576 4.54341 5.33257C5.63593 5.75881 6.90507 5.703 7.99967 5.07103C9.09364 4.43942 9.7764 3.3691 9.95401 2.2106ZM11.9997 14.9992C13.6565 14.9992 14.9997 13.6561 14.9997 11.9992C14.9997 10.3424 13.6565 8.99923 11.9997 8.99923C10.3428 8.99923 8.99967 10.3424 8.99967 11.9992C8.99967 13.6561 10.3428 14.9992 11.9997 14.9992Z"></path></svg>
                  </div>
                  :
                  <div onClick={() => hanldeTab("setting")}>
                    <svg style={{ width: '30px', color: 'grey' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3.33946 17.0002C2.90721 16.2515 2.58277 15.4702 2.36133 14.6741C3.3338 14.1779 3.99972 13.1668 3.99972 12.0002C3.99972 10.8345 3.3348 9.824 2.36353 9.32741C2.81025 7.71651 3.65857 6.21627 4.86474 4.99001C5.7807 5.58416 6.98935 5.65534 7.99972 5.072C9.01009 4.48866 9.55277 3.40635 9.4962 2.31604C11.1613 1.8846 12.8847 1.90004 14.5031 2.31862C14.4475 3.40806 14.9901 4.48912 15.9997 5.072C17.0101 5.65532 18.2187 5.58416 19.1346 4.99007C19.7133 5.57986 20.2277 6.25151 20.66 7.00021C21.0922 7.7489 21.4167 8.53025 21.6381 9.32628C20.6656 9.82247 19.9997 10.8336 19.9997 12.0002C19.9997 13.166 20.6646 14.1764 21.6359 14.673C21.1892 16.2839 20.3409 17.7841 19.1347 19.0104C18.2187 18.4163 17.0101 18.3451 15.9997 18.9284C14.9893 19.5117 14.4467 20.5941 14.5032 21.6844C12.8382 22.1158 11.1148 22.1004 9.49633 21.6818C9.55191 20.5923 9.00929 19.5113 7.99972 18.9284C6.98938 18.3451 5.78079 18.4162 4.86484 19.0103C4.28617 18.4205 3.77172 17.7489 3.33946 17.0002ZM8.99972 17.1964C10.0911 17.8265 10.8749 18.8227 11.2503 19.9659C11.7486 20.0133 12.2502 20.014 12.7486 19.9675C13.1238 18.8237 13.9078 17.8268 14.9997 17.1964C16.0916 16.5659 17.347 16.3855 18.5252 16.6324C18.8146 16.224 19.0648 15.7892 19.2729 15.334C18.4706 14.4373 17.9997 13.2604 17.9997 12.0002C17.9997 10.74 18.4706 9.5632 19.2729 8.6665C19.1688 8.4405 19.0538 8.21822 18.9279 8.00021C18.802 7.78219 18.667 7.57148 18.5233 7.36842C17.3457 7.61476 16.0911 7.43414 14.9997 6.80405C13.9083 6.17395 13.1246 5.17768 12.7491 4.03455C12.2509 3.98714 11.7492 3.98646 11.2509 4.03292C10.8756 5.17671 10.0916 6.17364 8.99972 6.80405C7.9078 7.43447 6.65245 7.61494 5.47428 7.36803C5.18485 7.77641 4.93463 8.21117 4.72656 8.66637C5.52881 9.56311 5.99972 10.74 5.99972 12.0002C5.99972 13.2604 5.52883 14.4372 4.72656 15.3339C4.83067 15.5599 4.94564 15.7822 5.07152 16.0002C5.19739 16.2182 5.3324 16.4289 5.47612 16.632C6.65377 16.3857 7.90838 16.5663 8.99972 17.1964ZM11.9997 15.0002C10.3429 15.0002 8.99972 13.6571 8.99972 12.0002C8.99972 10.3434 10.3429 9.00021 11.9997 9.00021C13.6566 9.00021 14.9997 10.3434 14.9997 12.0002C14.9997 13.6571 13.6566 15.0002 11.9997 15.0002ZM11.9997 13.0002C12.552 13.0002 12.9997 12.5525 12.9997 12.0002C12.9997 11.4479 12.552 11.0002 11.9997 11.0002C11.4474 11.0002 10.9997 11.4479 10.9997 12.0002C10.9997 12.5525 11.4474 13.0002 11.9997 13.0002Z"></path></svg>
                  </div>
              }

            </div>
            <div className='nav_profile_picture' >

            </div>
          </div>
    </div>
  )
}

export default Nav