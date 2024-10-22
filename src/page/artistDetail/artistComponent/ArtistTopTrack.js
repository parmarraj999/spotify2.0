import React, { useEffect, useState } from 'react'
import '../artistDetail.css'
import axios from 'axios'

const artistList = (data) => {
  return (
    <div style={{ width: '300px', display: 'flex', gap: '.5rem' }} >
      {
        data.map((data) => {
          return (
            <h3 style={{ fontSize: "14px", color: "#898989", fontWeight: '400' }}>{data?.name}</h3>
          )
        })
      }
    </div>
  )
}

function ArtistTopTrack({ id }) {

  const access_token = window.localStorage.getItem("token")

  const [trackData, setTrackData] = useState()
  const [loading, setLoading] = useState(true)

  const getTopTrack = async () => {
    const { data } = await axios.get(`https://api.spotify.com/v1/artists/${id}/top-tracks`, {
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    })
    console.log(data)
    setTrackData(data.tracks)
    setLoading(false)
  }

  useEffect(() => {
    getTopTrack();
  }, [id])

  function convertMillisecondsToTimeString(milliseconds) {
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds
      % 60;

    const timeString = `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    return timeString;
  }

  console.log(trackData)

  return (
    <>
      {
        loading ? <div>loading</div> :
          <div className='artist_top_track_container' >
            <h2>Artist Top Tracks</h2>
            <div className='artist_top_track_list' >
              {
                trackData?.map((data) => {
                  return (
                    <div className='artist_top_track_item' >
                      <div style={{ width: "100%", display: 'flex', gap: ".5rem", alignItems: "center" }}>
                        <div className='track_cover_image_name' >
                          <div className='track_cover_image' >
                            <img src={data?.album?.images[0]?.url} />
                          </div>
                          <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <h3>{data?.name}</h3>
                            <h4>{artistList(data.artists)}</h4>
                          </div>
                        </div>
                      </div>
                      <div style={{ display: "flex", alignItems: 'center', gap: '2rem' }}>
                        <h5 style={{ fontSize: "14px", color: "#898989", fontWeight: '400' }} className='duration'>{convertMillisecondsToTimeString(data.duration_ms)}</h5>
                        <div>
                          <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.0693 14.0678L20.2054 15.8738L18.3416 14.0678C16.3872 12.1741 13.2521 12.2787 11.4282 14.2984C9.65847 16.2581 9.41482 19.1936 11.0174 21.2923C11.2143 21.5502 11.408 21.7972 11.5922 22.0232C12.7587 23.4542 15.3037 25.9531 16.5788 27.2942C17.5209 28.285 18.3677 29.1113 19.0057 29.7132C19.6794 30.3488 20.7194 30.335 21.3944 29.7007C22.5707 28.5954 24.3747 26.8736 25.6453 25.5372C26.9205 24.1961 27.6522 23.4542 28.8186 22.0232C29.0029 21.7972 29.1965 21.5502 29.3935 21.2923C30.996 19.1936 30.7524 16.2581 28.9826 14.2984C27.1588 12.2787 24.0236 12.1741 22.0693 14.0678Z" stroke="#898989" stroke-width="2.02054" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>

                        </div>
                      </div>
                    </div>

                  )
                })
              }

            </div>
          </div >
      }
    </>
  )
}

export default ArtistTopTrack