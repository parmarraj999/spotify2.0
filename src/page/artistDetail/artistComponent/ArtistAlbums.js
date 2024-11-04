import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function ArtistAlbums({id}) {
  
  const access_token = window.localStorage.getItem("token")

  const [albumData,setAlbumData] = useState();

  const getTopAlbum = async() => {
    const { data } = await axios.get(`https://api.spotify.com/v1/artists/${id}/albums`, {
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    })
    // console.log(data)
    setAlbumData(data.items)
  }

  useEffect(() => {
    getTopAlbum();
  },[]);

  const extractYear = (dateString) => {
    return dateString.slice(0, 4);
  };

  return (
    <div className='artist_albums_container' >
         <h2>Artist Top Albums</h2>
         <div className='artist_top_album_list' >
          {
            albumData?.map((data=>{
              return(
                <Link to={`/album/${data.id}`} className='artist_album_cover' >
                  <div className='artist_album_images' >
                    <img src={data?.images[0]?.url} />
                  </div>
                  <div>
                    <h3>{data.name}</h3>
                    <h5>{extractYear(data.release_date)}</h5>
                  </div>
                </Link>
              )
            }))
          }
            
         </div>
    </div>
  )
}

export default ArtistAlbums