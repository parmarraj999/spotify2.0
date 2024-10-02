import React from 'react'
import './nav.css'
import NavButton from '../../component/nav_buttons/NavButton'

function Nav() {
  return (
    <div className='nav_container' >
      <div style={{display:'flex',alignItems:"center"}}>
        <NavButton text='My Library' icon="library" width="250px"/>
        <NavButton text='Home' icon='home' width="250px" />
      </div>
    </div>
  )
}

export default Nav