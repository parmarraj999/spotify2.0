import React, { useContext, useState } from 'react'
import './home.css'
import HomeNav from './homeComponents/homeNav'

function Home() {

  const [currentPath,setCurrentPath] = useState('all')

  const MadeForYouData = [

  ]

  return (
    <div className='home_container' >
      <HomeNav currentPath={currentPath} setCurrentPath={setCurrentPath}/>
      <div className='home_section'>
        <div>
        <h2>Made For You</h2>
        <div>
          
        </div>
        </div>
      </div>
    </div>
  )
}

export default Home