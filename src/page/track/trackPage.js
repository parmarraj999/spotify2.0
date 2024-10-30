import React, { useEffect, useState } from 'react'
import './trackPage.css'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import Lyrics from './trackComponents/lyrics';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../firbeaseConfig/firebaseConfig';

function TrackPage() {

    const { id } = useParams();
    const access_token = window.localStorage.getItem("token")
    const userId = window.localStorage.getItem('userId')

    const [data, setData] = useState();

    const [currentNav, setCurrentNav] = useState('lyrics')

    const getTrackDetail = async () => {
        console.log(id)
        const { data } = await axios.get(`https://api.spotify.com/v1/tracks/${id}`, {
            headers: {
                Authorization: `Bearer ${access_token}`
            }
        })
        setData(data)
        console.log(data)
    }

    useEffect(() => {
        getTrackDetail();
    }, [])

    const divStyle = {
        display: "flex",
        gap: ".6rem",
        alignItems: "center"
    }

    const extractYear = (dateString) => {
        return dateString?.slice(0, 4);
    };

    function convertMillisecondsToTimeString(milliseconds) {
        const seconds = Math.floor(milliseconds / 1000);
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds
            % 60;

        const timeString = `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
        return timeString;
    }

    const AddLikedSong = async() => {
        await setDoc(doc(db, userId, "liked-songs"))
    }

    const ArtistList = (data) => {
        return (
            <>
                {
                    data?.map((data) => {
                        return (
                            <Link to={`/artist/${data.id}`} className='artist_list_item'>{data?.name}</Link>
                        )
                    })
                }
            </>
        )
    }

    const background = {

    }

    return (
        <div className='track_details_container' style={{ backgroundImage: `url(${data?.album?.images[0]?.url})` }} >
            <div style={{ backdropFilter: "blur(20px)", width: "100%", height: "100%", padding: '1rem', background: "rgba(0,0,0,.7)",overflow:'auto' }} >
                <div className='track_detail_header' >
                    <div className='track_cover_image' >
                        <img src={data?.album?.images[0]?.url} />
                    </div>
                    <div className='track_details' >
                        <h1>{data?.name}</h1>
                        <div style={divStyle} >
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14 8C14 9.10457 13.1046 10 12 10C10.8954 10 10 9.10457 10 8C10 6.89543 10.8954 6 12 6C13.1046 6 14 6.89543 14 8Z" stroke="#898989" stroke-width="1.2" />
                                    <path d="M10 12L7.8906 13.4063C7.3342 13.7772 7 14.4017 7 15.0704V16.0667C7 16.5821 7.41787 17 7.93333 17H12" stroke="#898989" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M16.5 8V12.5M16.5 12.5V14.7348C16.5 15.1798 16.1832 15.5678 15.7385 15.5538C15.0031 15.5306 14 15.2669 14 14C14 12 16.5 12.5 16.5 12.5Z" stroke="#898989" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <h2 style={{ color: 'white' }}>
                                    {data?.artists[0]?.name}
                                </h2>
                            </div>
                            <div className='circle' ></div>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="11.9996" cy="12.0001" r="1.63636" stroke="#898989" stroke-width="1.2" />
                                    <path d="M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C13.7298 6 15.2887 6.73202 16.3837 7.90319" stroke="#898989" stroke-width="1.2" stroke-linecap="round" />
                                    <path d="M17.3984 10.4398V14.9398M17.3984 14.9398V17.1747C17.3984 17.6196 17.0816 18.0076 16.6369 17.9936C15.9015 17.9705 14.8984 17.7067 14.8984 16.4398C14.8984 14.4398 17.3984 14.9398 17.3984 14.9398Z" stroke="#898989" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <h2 style={{ color: 'white' }}>{data?.album?.name}</h2>
                            </div>
                            <div className='circle' ></div>
                            <h2>{extractYear(data?.album?.release_date)}</h2>
                            <div className='circle' ></div>
                            <h2>{convertMillisecondsToTimeString(data?.duration_ms)}</h2>
                        </div>
                        <div className='track_functional_icons' >
                            <div>

                                <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="20.2054" cy="20.2054" r="20.2054" fill="#1ED760" />
                                    <path d="M26.328 18.8797C27.3484 19.4688 27.3484 20.9418 26.328 21.5309L18.2917 26.1707C17.2712 26.7598 15.9956 26.0234 15.9956 24.845L15.9956 15.5656C15.9956 14.3872 17.2712 13.6508 18.2917 14.2399L26.328 18.8797Z" fill="black" />
                                </svg>


                            </div>
                            <div>
                                <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.4804 13.7733L20.6166 15.5792L18.7527 13.7733C16.7984 11.8796 13.6632 11.9841 11.8394 14.0038C10.0696 15.9636 9.82595 18.899 11.4285 20.9977C11.6254 21.2556 11.8191 21.5026 12.0034 21.7287C13.1698 23.1596 15.7148 25.6586 16.99 26.9997C17.932 27.9904 18.7789 28.8168 19.4168 29.4187C20.0906 30.0543 21.1305 30.0404 21.8055 29.4062C22.9819 28.3008 24.7858 26.5791 26.0565 25.2427C27.3316 23.9016 28.0633 23.1596 29.2298 21.7287C29.414 21.5026 29.6077 21.2556 29.8046 20.9977C31.4072 18.899 31.1635 15.9636 29.3938 14.0038C27.5699 11.9841 24.4348 11.8796 22.4804 13.7733Z" stroke="#898989" stroke-width="2.02054" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div>

                                <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="20" height="20" rx="3" transform="matrix(1 0 0 -1 10.2383 31.5352)" stroke="#898989" stroke-width="2" stroke-linejoin="round" />
                                    <path d="M12.2383 11.5352H28.2383V11.5352C28.2383 9.8783 26.8951 8.53516 25.2383 8.53516H15.2383C13.5814 8.53516 12.2383 9.8783 12.2383 11.5352V11.5352Z" stroke="#898989" stroke-width="1.5" stroke-linejoin="round" />
                                    <path d="M16.2383 21.5352H20.2383M24.2383 21.5352H20.2383M20.2383 21.5352V17.5352M20.2383 21.5352V25.5352" stroke="#898989" stroke-width="2.02054" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div>
                                <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.7743 11.7866H15.0036C13.4537 11.7866 12.1973 13.043 12.1973 14.5929V14.5929C12.1973 16.1428 13.4537 17.3992 15.0036 17.3992H19.7743" stroke="#898989" stroke-width="2.3573" stroke-linecap="round" />
                                    <path d="M12.1973 23.0118L29.0351 23.0118" stroke="#898989" stroke-width="2.3573" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M12.1973 28.6244L29.0351 28.6244" stroke="#898989" stroke-width="2.3573" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M23.9844 14.3123H26.5101M29.0357 14.3123H26.5101M26.5101 14.3123V11.7866M26.5101 14.3123V16.838" stroke="#898989" stroke-width="2.02054" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div>

                                <svg width="42" height="41" viewBox="0 0 42 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12.4299" cy="20.2056" r="1.68378" fill="#898989" />
                                    <circle cx="20.8488" cy="20.2056" r="1.68378" fill="#898989" />
                                    <circle cx="29.2678" cy="20.2056" r="1.68378" fill="#898989" />
                                </svg>

                            </div>
                        </div>
                        <div className='track_artist_list' >
                            {ArtistList(data?.artists)}
                        </div>
                    </div>
                </div>
                <div className='track_nav_container' >
                    <div style={currentNav === "lyrics" ? { borderBottom: "2px solid #1ED760" } : {}} onClick={() => setCurrentNav("lyrics")}>Lyrics</div>
                    {/* <div style={currentNav === "credits" ? { borderBottom: "2px solid #1ED760" } : {}} onClick={() => setCurrentNav("credits")}>Credits</div> */}
                    <div style={currentNav === "more" ? { borderBottom: "2px solid #1ED760" } : {}} onClick={() => setCurrentNav("more")}>More Like This</div>
                </div>
                <div className='track_nav_section' >
                    {
                        currentNav === 'lyrics' ? 
                        <Lyrics/>
                        : ""
                    }
                </div>
            </div>
        </div>
    )
}

export default TrackPage