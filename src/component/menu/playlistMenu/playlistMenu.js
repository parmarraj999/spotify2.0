import React from 'react';
import './playlistMenu.css';
import { Link } from 'react-router-dom';

function PlaylistMenu({ setShowPlaylistMenu, linkData }) {

    return (
        <div className='playlist_menu' >
            <div className='playlist_menu_header' >
                <h2>Add to a Playlist</h2>
            </div>
            <div className='playlist_menu_item' >
                <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 7.75736V12M12 16.2426V12M12 12L7.75732 12M12 12H16.2426" stroke="#ffffff" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <h3>New Playlist</h3>
            </div>
            
            <button onClick={() => setShowPlaylistMenu(false)} >Close</button>
        </div>
    )
}

export default PlaylistMenu