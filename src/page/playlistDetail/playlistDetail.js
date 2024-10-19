import React, { useContext, useEffect, useState } from 'react'
import './playlistdetail.css';
import SongBar from '../../component/songBar/songBar';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { AccessTokenContext } from '../../provider/AccessTokenProvider';

function PlaylistDetail() {

  const accessToken = useContext(AccessTokenContext);

  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const { id } = useParams();
  console.log(id)

  const getPlaylistDetail = async () => {

    const access_token = window.localStorage.getItem("token")

    const { data } = await axios.get(`https://api.spotify.com/v1/playlists/${id}`, {
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    })
    console.log(data)
    setData(data);
    if (data) {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getPlaylistDetail();
  }, [])


  const songData = data?.tracks?.items;

  return (
    <>
      {
        isLoading ? <div>loading</div> :
          <div className='playlist_detail_container' >
            <div className='playlist_main' >
              <div className='playlist_main_header' >
                <h2>{data?.name}</h2>
                <div style={{ display: "flex", gap: ".6rem", alignItems: "center" }} >
                  <h5>By <span>Spotify</span></h5>
                  <div className='circle'></div>
                  <h5>{data.tracks.items.length} songs</h5>
                  {/* <div className='circle'></div>
                  <h5>3 hr 30 min</h5> */}
                </div>
                <div className='playlist_functional_icons' >
                  <div style={{ display: 'flex', alignItems: "center", gap: ".8rem" }}>
                    <div>
                      <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="20.2054" cy="20.2054" r="20.2054" fill="#1ED760" />
                        <path d="M26.328 18.8797C27.3484 19.4688 27.3484 20.9418 26.328 21.5309L18.2917 26.1707C17.2712 26.7598 15.9956 26.0234 15.9956 24.845L15.9956 15.5656C15.9956 14.3872 17.2712 13.6508 18.2917 14.2399L26.328 18.8797Z" fill="black" />
                      </svg>
                    </div>
                    <div>
                      <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_367_118022)">
                          <path d="M10.5137 12.6284V12.6284C12.0933 12.6284 13.5702 13.4115 14.4566 14.719L15.2922 15.9517L16.4186 17.6133M29.16 25.9214H24.2351C22.9148 25.9214 21.6469 25.4044 20.703 24.4812L19.7745 23.5729M29.16 25.9214L25.6678 29.4662M29.16 25.9214L25.6678 22.3766" stroke="#898989" stroke-width="2.02054" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M10.5137 27.9508V27.9508C12.0972 27.9508 13.5818 27.1805 14.4935 25.8858L20.6664 17.1199C21.6125 15.7763 23.1531 14.9769 24.7964 14.9769H29.16M29.16 14.9769L25.6677 11.4321M29.16 14.9769L25.6677 18.5217" stroke="#898989" stroke-width="2.02054" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                        <defs>
                          <clipPath id="clip0_367_118022">
                            <rect width="21.8892" height="23.573" fill="white" transform="translate(8.83008 8.41882)" />
                          </clipPath>
                        </defs>
                      </svg>

                    </div>
                    <div>
                      <svg width="42" height="41" viewBox="0 0 42 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25.3224 20.1881H21.0098M16.6971 20.1881H21.0098M21.0098 20.1881L21.0098 15.8755M21.0098 20.1881V24.5008" stroke="#898989" stroke-width="1.68378" stroke-linecap="round" stroke-linejoin="round" />
                        <circle cx="21.0265" cy="20.2055" r="9.26081" stroke="#898989" stroke-width="1.68378" />
                      </svg>
                    </div>
                    <div>

                      <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.5956 11.7866H14.8249C13.275 11.7866 12.0186 13.043 12.0186 14.5929V14.5929C12.0186 16.1428 13.275 17.3992 14.8249 17.3992H19.5956" stroke="#898989" stroke-width="2.3573" stroke-linecap="round" />
                        <path d="M12.0186 23.0118L28.8564 23.0118" stroke="#898989" stroke-width="2.3573" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12.0186 28.6244L28.8564 28.6244" stroke="#898989" stroke-width="2.3573" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M23.8057 14.3123H26.3313M28.857 14.3123H26.3313M26.3313 14.3123V11.7866M26.3313 14.3123V16.838" stroke="#898989" stroke-width="2.02054" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </div>
                    <div>

                      <svg width="42" height="41" viewBox="0 0 42 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.8483 15.1539V25.0161M20.8483 25.0161L24.2158 21.6485M20.8483 25.0161L17.4807 21.6485" stroke="#898989" stroke-width="2.02054" stroke-linecap="round" stroke-linejoin="round" />
                        <circle cx="20.8488" cy="20.2055" r="9.26081" stroke="#898989" stroke-width="1.68378" />
                      </svg>

                    </div>
                    <div>

                      <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.7434 22.0167V10.7406M20.7434 10.7406L16.1003 15.3837M20.7434 10.7406L25.3865 15.3837M29.0347 20.3585V25.0016C29.0347 26.4669 27.8468 27.6548 26.3815 27.6548L15.1054 27.6548C13.64 27.6548 12.4521 26.4669 12.4521 25.0016V20.3585" stroke="#898989" stroke-width="2.02054" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>

                    </div>
                  </div>
                  <div className='playlist_search_container' >
                    <div>

                      <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25.3245 24.361C26.8621 22.7925 27.8102 20.644 27.8102 18.274C27.8102 13.4715 23.9171 9.57837 19.1146 9.57837C14.3121 9.57837 10.4189 13.4715 10.4189 18.274C10.4189 23.0765 14.3121 26.9697 19.1146 26.9697C21.5471 26.9697 23.7463 25.9709 25.3245 24.361ZM25.3245 24.361L30.4189 29.5784" stroke="#898989" stroke-width="2.02054" stroke-linecap="round" />
                      </svg>

                    </div>
                  </div>
                </div>
              </div>
              <div className='playlist_list_container'>
                <div className='playlist_list_header' >
                  <h4>#</h4>
                  <h4>Title</h4>
                  <h4>Album</h4>
                  <h4>Duration</h4>
                </div>
                <div className='song_list_container' >
                  {
                    songData.map((data, key) => {
                      return (
                        <SongBar data={data} />
                      )
                    })
                  }
                </div>
              </div>
            </div>
            <div className='playlist_sidebar' >
              <div className='playlist_cover_image' >
                <img src={`${data?.images[0]?.url}`} />
              </div>
              <div className='playlist_details'>

              </div>
              <a href={data.external_urls.spotify} className='open_spotify_button' >
                Open In Spotify
              </a>
            </div>
          </div>
      }
    </>
  )
}

export default PlaylistDetail