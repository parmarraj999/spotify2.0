import React from 'react'
import '../home.css'

function HomeNav({currentPath,setCurrentPath}) {

    return (
        <div className='home_nav'>
            <div className='home_nav_item' style={currentPath === "all" ? { background: "white", color: 'black' } : { color: "white" }} onClick={() => setCurrentPath("all")}  >All</div>
            <div className='home_nav_item' style={currentPath === "music" ? { background: "white", color: 'black' } : { color: "white" }} onClick={() => setCurrentPath("music")}>Music</div>
            <div className='home_nav_item' style={currentPath === "podcast" ? { background: "white", color: 'black' } : { color: "white" }} onClick={() => setCurrentPath("podcast")}>Podcast</div>
            <div className='home_nav_item' style={currentPath === "audiobook" ? { background: "white", color: 'black' } : { color: "white" }} onClick={() => setCurrentPath("audiobook")}>Audiobook</div>
        </div>
    )
}

export default HomeNav