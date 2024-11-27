import React, { useContext } from 'react'
import './library.css'
import { Link } from 'react-router-dom'
import { AllPlaylistDataContext } from '../../provider/AllPlaylistDataProvider'

function Library() {

  const { playlistData } = useContext(AllPlaylistDataContext)

  const allPlaylistLimit = playlistData.slice(0, 3);
  console.log(allPlaylistLimit)

  return (
    <div className='library_container' >
      <div className='library_collection' >
        <Link to='/liked' className='like_song_link'>
          <img src='../../../../image/like-cover.png' />
          <h4>Liked Songs</h4>
        </Link>
        {
          allPlaylistLimit?.map((data) => {
            return (
              <Link to={`/playlist/${data.playlistId}`} className='like_song_link' >
                 <img src={data.playlistImage} />
                 <h4>{data.playlistName}</h4>
              </Link>
            )
          })
        }
      </div>
    </div>
  )
}

export default Library