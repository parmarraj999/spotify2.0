import React from 'react';
import './likeSong.css';
import LikeSongBar from './likeSongBar';

function LikedSong() {
  return (
    <div className='liked_song_container' >
      <div className='liked_song_header' >

      </div>
      <LikeSongBar/>
    </div>
  )
}

export default LikedSong