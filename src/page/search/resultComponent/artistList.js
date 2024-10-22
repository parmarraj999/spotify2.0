import React from 'react'
import { Link } from 'react-router-dom'

function ArtistList({ data }) {

  console.log(data)

  return (
    <div className='artist_list_container' >
      <h3>artists</h3>
      <div className='list_container' >
        {
          data.map((data) => {
            return (
              <Link to={`/artist/${data.id}`} className='artist_cover' >
                <div className='artist_image' >
                  <img src={data?.images[0]?.url} />
                </div>
                <h3>{data?.name}</h3>
                <h5>Artist</h5>
              </Link>
            )
          })
        }
      </div>
    </div>
  )
}

export default ArtistList