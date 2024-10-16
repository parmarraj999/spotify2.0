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
                  <div style={{width:"100%",display:'flex',alignItems:'center',gap:'.5rem'}} >
                    <p>{data.artists[0].name},</p>
                    {
                      data.artists[1] ?
                        <p>{data.artists[1].name}</p>
                        : ""
                    }
                  </div>
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