import React, { useState } from 'react'
import '../search.css'

function SongList({ data }) {


  function convertMillisecondsToTimeString(milliseconds) {
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds
      % 60;

    const timeString = `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    return timeString;
  }

  return (
    <div className='song_list_container' >
      <h3>Songs</h3>
      <div className='list_container' >
        {
          data.map((data) => {
            return (
              <div className='search_song_bar'>
                <div className='search_song_bar_img' >
                  <img src={data.album.images[0].url} />
                </div>
                <div className='search_song_details' >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }} >
                    <h3>{data.name}</h3>
                    <h4>{convertMillisecondsToTimeString(data.duration_ms)}</h4>
                  </div>
                  <div style={{ width: "100%", display: 'flex', alignItems: 'center', gap: '.5rem' }} >
                    <p>{data.artists[0].name},</p>
                    {
                      data.artists[1] ?
                        <p>{data.artists[1].name}</p>
                        : ""
                    }
                  </div>
                </div>
                <div className='play_button_song_bar' >
                  <svg width="45" height="45" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20.2054" cy="20.2054" r="20.2054" fill="#1ED760" />
                    <path d="M26.328 18.8797C27.3484 19.4688 27.3484 20.9418 26.328 21.5309L18.2917 26.1707C17.2712 26.7598 15.9956 26.0234 15.9956 24.845L15.9956 15.5656C15.9956 14.3872 17.2712 13.6508 18.2917 14.2399L26.328 18.8797Z" fill="black" />
                  </svg>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default SongList