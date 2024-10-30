import React from 'react';
import './likeSong.css';
import LikeSongBar from './likeSongBar';

function LikedSong() {
  return (
    <div className='liked_song_container' >
      <div className='liked_song_header' >
        <h1>Liked Songs</h1>
        <div className='circle' ></div>
        <h2>20 songs</h2>
      </div>
      <div className='like_song_detail_header' >
        <h2>Title</h2>
        <h2>Album</h2>
        <h2>Duration</h2>
      </div>
      <div className='like_song_list' >
      <LikeSongBar/>
      </div>
    </div>
  )
}

export default LikedSong