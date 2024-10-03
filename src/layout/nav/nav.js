import React from 'react'
import './nav.css'
import NavButton, { Discover, HomeButton, LibraryButton } from '../../component/nav_buttons/NavButton'
import SearchBar from '../../component/searchBar/searchBar'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className='nav_container' >
      <div style={{display:'flex',alignItems:"center",gap:'15px'}}>
        <Link to="/library" >
        <LibraryButton/>
        </Link>
        <Link to="/home" >
          <HomeButton/>
        </Link>
        <Link to="/discover">
        <Discover/>
        </Link>
        <Link to="/search">
        <SearchBar/>
        </Link>
      </div>
    </div>
  )
}

export default Nav