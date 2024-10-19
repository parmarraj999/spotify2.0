import React from 'react'
import { Link } from 'react-router-dom'

function PlaylistList({data}) {

  return (
    <div className='playlist_list_container' >
         <h3>Playlists</h3>
        <div className='list_container' >
          {
            data.map((data)=>{
              return (
                <Link to={`/playlist/${data.id}`} className='search_playlist_cover' >
                    <div className='playlist_cover_image' >
                      <img src={data?.images[0]?.url} />
                    </div>
                    <div className='playlist_details'>
                      <h3>{data.name}</h3>
                      <h4>By <span>{data.owner.display_name}</span></h4>
                    </div>
                </Link>
              )
            })
          }
        </div>
    </div>
  )
}

export default PlaylistList