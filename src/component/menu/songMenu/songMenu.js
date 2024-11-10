import React, { useState } from 'react';
import './songMenu.css';
import { Link } from 'react-router-dom';
import PlaylistMenu from '../playlistMenu/playlistMenu';

function SongMenu({ setShowMenu, linkData, removeLikedSong }) {

    // ==== function to remove like song 

    const removeLikeSongHandle = () => {
        removeLikedSong();
        setShowMenu(false);
    }

    const [showPlaylistMenu, setShowPlaylistMenu] = useState(false)

    return (
        <div className='song_menu_container' >
            <div className='song_menu_items' style={{ position: "relative" }} onClick={() => setShowPlaylistMenu(!showPlaylistMenu)} >
                {
                    showPlaylistMenu ?
                        <PlaylistMenu setShowPlaylistMenu={setShowPlaylistMenu} />
                        : ""
                }
                <svg style={{ width: "30px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path></svg>

                <h3>Add to Playlist</h3>
            </div>
            <div className='song_menu_items' onClick={removeLikeSongHandle}>

                <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.1069 8.05788L12 9.13043L10.8931 8.05788C9.73237 6.93323 7.87041 6.99533 6.78722 8.19481C5.73615 9.35872 5.59145 11.1021 6.54321 12.3485C6.66017 12.5017 6.77517 12.6483 6.88462 12.7826C7.57737 13.6325 9.08885 15.1166 9.84615 15.913C10.4057 16.5015 10.9086 16.9922 11.2875 17.3497C11.6876 17.7272 12.3052 17.7189 12.7061 17.3423C13.4048 16.6858 14.4761 15.6632 15.2308 14.8696C15.9881 14.0731 16.4226 13.6325 17.1154 12.7826C17.2248 12.6483 17.3398 12.5017 17.4568 12.3485C18.4086 11.1021 18.2638 9.35872 17.2128 8.19481C16.1296 6.99533 14.2676 6.93323 13.1069 8.05788Z" stroke="#ffffff" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

                <h3>Remove from Liked</h3>
            </div>
            <div className='song_menu_items' >
                <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.5 7H8.66667C7.74619 7 7 7.74619 7 8.66667V8.66667C7 9.58714 7.74619 10.3333 8.66667 10.3333H11.5" stroke="#ffffff" stroke-width="1.4" stroke-linecap="round" />
                    <path d="M7 13.666L17 13.666" stroke="#ffffff" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M7 17L17 17" stroke="#ffffff" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M14 8.5H15.5M17 8.5H15.5M15.5 8.5V7M15.5 8.5V10" stroke="#ffffff" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <h3>Add to Queue</h3>
            </div>
            <Link to={`/artist/${linkData.artistLink}`} className='song_menu_items' >
                <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 8C14 9.10457 13.1046 10 12 10C10.8954 10 10 9.10457 10 8C10 6.89543 10.8954 6 12 6C13.1046 6 14 6.89543 14 8Z" stroke="#ffffff" stroke-width="1.2" />
                    <path d="M10 12L7.8906 13.4063C7.3342 13.7772 7 14.4017 7 15.0704V16.0667C7 16.5821 7.41787 17 7.93333 17H12" stroke="#ffffff" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M16.5 8V12.5M16.5 12.5V14.7348C16.5 15.1798 16.1832 15.5678 15.7385 15.5538C15.0031 15.5306 14 15.2669 14 14C14 12 16.5 12.5 16.5 12.5Z" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <h3>Go to Artist</h3>
            </Link>
            <Link to={`/album/${linkData.albumLink}`} className='song_menu_items' >
                <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 16.2273C19 17.2063 18.2063 18 17.2273 18H6.77273C5.79368 18 5 17.2063 5 16.2273V8.14054V7.77273C5 6.79368 5.79368 6 6.77273 6H9.74797C10.3574 6 10.9242 6.31308 11.2486 6.829L11.5521 7.31155C11.8765 7.82746 12.4433 8.14054 13.0527 8.14054H17.2273C18.2063 8.14054 19 8.93422 19 9.91327V16.2273Z" stroke="#ffffff" stroke-width="1.2" stroke-linejoin="round" />
                </svg>
                <h3>Go to Album</h3>
            </Link>
            <button onClick={() => setShowMenu(false)} >Close</button>
        </div>
    )
}

export default SongMenu;