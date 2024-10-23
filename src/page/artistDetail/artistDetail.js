import React, { useEffect, useState } from 'react';
import './artistDetail.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ArtistTopTrack from './artistComponent/ArtistTopTrack';
import ArtistAlbums from './artistComponent/ArtistAlbums';
import ArtistRelated from './artistComponent/ArtistRelated';

function ArtistDetail() {

  const { id } = useParams();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [currentNav, setCurrentNav] = useState('home')
  const [coverImage, setCoverImage] = useState('')

  const access_token = window.localStorage.getItem("token")

  // function for artist details

  const getArtistDetail = async () => {
    const { data } = await axios.get(`https://api.spotify.com/v1/artists/${id}`, {
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    })
    console.log(data)
    setData(data);
    if (data.images[0].url) {
      setIsLoading(false)
      setCoverImage(data.images[0].url)
    }
  }

  useEffect(() => {
    getArtistDetail();
  }, [])

  useEffect(()=>{
    getArtistDetail();
  },[id])

  return (
    <>
      {
        isLoading ? <div>Loading</div>
          :
          <div className='artist_detail_container' >
            <div className='artist_banner_container' style={{ backgroundImage: `url(${coverImage})` }} >
              <div className='artist_details'>
                <img src={`${coverImage}`} />
                <div className='artist_names_buttons'>
                  <div>
                    <h2>{data?.name}</h2>
                    <h4>{data?.type}</h4>
                  </div>
                  <div className='artist_buttons'>
                    <div style={{ display: 'flex', alignItems: 'center', gap: ".5rem", fontSize: "16px" }}>
                      <svg style={{ width: '20px', height: '20px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z"></path></svg>
                      {data?.followers?.total}
                    </div>
                    <div >
                      <button>Follow</button>
                      <svg style={{ width: "25px", height: "25px", rotate: "90deg" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3C10.9 3 10 3.9 10 5C10 6.1 10.9 7 12 7C13.1 7 14 6.1 14 5C14 3.9 13.1 3 12 3ZM12 17C10.9 17 10 17.9 10 19C10 20.1 10.9 21 12 21C13.1 21 14 20.1 14 19C14 17.9 13.1 17 12 17ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"></path></svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='artist_nav_container' >
              <div onClick={() => setCurrentNav("home")} style={currentNav === 'home' ? { color: "white", borderBottom: "2px solid #1ed760" } : {}}>Home</div>
              <div onClick={() => setCurrentNav("track")} style={currentNav === 'track' ? { color: "white", borderBottom: "2px solid #1ed760" } : {}}>Tracks</div>
              <div onClick={() => setCurrentNav("album")} style={currentNav === 'album' ? { color: "white", borderBottom: "2px solid #1ed760" } : {}}>Albums</div>
              <div onClick={() => setCurrentNav("artist")} style={currentNav === 'artist' ? { color: "white", borderBottom: "2px solid #1ed760" } : {}}>Related Artist</div>
            </div>
            {
              currentNav === "home" ? <>
              <ArtistTopTrack id={id} />
              <ArtistAlbums id={id} />
              <ArtistRelated id={id} />
              </>
              : ""
            }
            {
              currentNav === "track" ? <>
              <ArtistTopTrack id={id} />
              </>
              : ""
            }
            {
              currentNav === "album" ? <>
              <ArtistAlbums id={id} />
              </>
              : ""
            }
            {
              currentNav === "artist" ? <>
               <ArtistRelated id={id} />
              </>
              : ""
            }
          </div>
      }
    </>
  )
}

export default ArtistDetail