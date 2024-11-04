import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function ArtistRelated({id}) {

  const access_token = window.localStorage.getItem("token")

  const [relatedArtist,setRelatedArtist] = useState();

  const getRelated = async() => {
    const { data } = await axios.get(`https://api.spotify.com/v1/artists/${id}/related-artists`, {
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    })
    // console.log(data)
    setRelatedArtist(data.artists)
  }

  useEffect(() => {
    getRelated();
  },[]);


  return (
    <div className='artist_related_container' >
      <h2>Related Artists</h2>
      <div className='list_container' >
        {
          relatedArtist?.map((data) => {
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

export default ArtistRelated