import React, { useContext, useEffect, useState } from 'react'
import './trackPage.css'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import Lyrics from './trackComponents/lyrics';
import { addDoc, collection, deleteDoc, doc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firbeaseConfig/firebaseConfig';
import { LikeSongListContext } from '../../provider/LikeSongListProvider';
import SongMenu from '../../component/menu/songMenu/songMenu';
import PlaylistMenu from '../../component/menu/playlistMenu/playlistMenu';

function TrackPage() {

    const { id } = useParams();
    const access_token = window.localStorage.getItem("token")
    const userId = window.localStorage.getItem('userId')

    const { likeSongList, getLikeSongListProvider } = useContext(LikeSongListContext)
    console.log(likeSongList)

    const [data, setData] = useState();

    const [currentNav, setCurrentNav] = useState('lyrics')
    const [artistArray, setArtistArray] = useState()
    const [isLiked, setIsLiked] = useState()
    const [trackDocId, setTrackDocId] = useState()

    const [showMenu, setShowMenu] = useState(false)
    const [showPlaylistMenu, setShowPlaylistMenu] = useState(false)

    // ===== checking like or not 

    const checkLiked = () => {
        const foundSong = likeSongList.find(song => song.songId === data?.id);
        if (foundSong) {
            setTrackDocId(foundSong);
        }
        const found = likeSongList.some(obj => obj.songId === data?.id);
        setIsLiked(found)
        console.log('song found in Like list =', found)
    }

    useEffect(() => {
        checkLiked();
    }, [data])
    useEffect(() => {
        checkLiked();
    })

    // ===== to get data of track 

    const getTrackDetail = async () => {
        const { data } = await axios.get(`https://api.spotify.com/v1/tracks/${id}`, {
            headers: {
                Authorization: `Bearer ${access_token}`
            }
        })
        fetch();
        setData(data)
        setArtistArray(data?.artists)
    }

    useEffect(() => {
        getTrackDetail();
    }, [])

    const divStyle = {
        display: "flex",
        gap: ".6rem",
        alignItems: "center"
    }

    // ===== to extract years 

    const extractYear = (dateString) => {
        return dateString?.slice(0, 4);
    };

    // ===== to convert milliseconds 

    function convertMillisecondsToTimeString(milliseconds) {
        const seconds = Math.floor(milliseconds / 1000);
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds
            % 60;

        const timeString = `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
        return timeString;
    }

    // ==== add data to like songs 

    const likeSongData = {
        songId: data?.id,
        songName: data?.name,
        songDuration: data?.duration_ms,
        songImage: data?.album?.images?.[0].url,
        artists: { artistArray },
        albumName: data?.album?.name,
        albumId: data?.album?.id,
        addedAt: serverTimestamp()
    }

    const AddLikedSong = async () => {
        const collectionRef = doc(db, userId, "liked-songs")
        const likeSongCollection = collection(collectionRef, "liked-song-list")
        addDoc(likeSongCollection, likeSongData)
            .then(() => {
                console.log("successfully added")
            })
        getLikeSongListProvider();
        checkLiked();
    }

    // ====== disliking on click 


    console.log(data)
    console.log(data?.preview_url)

    const removeLike = async () => {
        await deleteDoc(doc(db, userId, "liked-songs", "liked-song-list", trackDocId.id))
            .then(() => {
                console.log("successfully")
            })
        getLikeSongListProvider();
        checkLiked();
    }

    const deezerOptions = {
        method: 'GET',
        url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
        params: { q: 'jatt mehkma, yo yo honey singh' },
        headers: {
            'x-rapidapi-key': 'a7f4797df6msh7108391419fe310p1f3a35jsn55af705cc6ac',
            'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
        },
    };

    const fetch = async () => {
        await axios(deezerOptions)
            .then((result) => {
                console.log(result)
            })
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


    return (
        <div className='track_details_container' style={{ backgroundImage: `url(${data?.album?.images[0]?.url})` }} >
            <div className='track_detail' style={{ backdropFilter: "blur(20px)", width: "100%", height: "100%", padding: '1rem', background: "rgba(0,0,0,.7)", overflow: 'auto' }} >
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
                            {
                                isLiked ? <div onClick={removeLike}>
                                    <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.0693 14.0678L20.2054 15.8738L18.3416 14.0678C16.3872 12.1741 13.2521 12.2787 11.4282 14.2984C9.65847 16.2581 9.41482 19.1936 11.0174 21.2923C11.2143 21.5502 11.408 21.7972 11.5922 22.0232C12.7587 23.4542 15.3037 25.9531 16.5788 27.2942C17.5209 28.285 18.3677 29.1113 19.0057 29.7132C19.6794 30.3488 20.7194 30.335 21.3944 29.7007C22.5707 28.5954 24.3747 26.8736 25.6453 25.5372C26.9205 24.1961 27.6522 23.4542 28.8186 22.0232C29.0029 21.7972 29.1965 21.5502 29.3935 21.2923C30.996 19.1936 30.7524 16.2581 28.9826 14.2984C27.1588 12.2787 24.0236 12.1741 22.0693 14.0678Z" fill="#1ED760" stroke="#1ED760" stroke-width="2.02054" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                                    :
                                    <div onClick={AddLikedSong} >
                                        <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M22.4804 13.7733L20.6166 15.5792L18.7527 13.7733C16.7984 11.8796 13.6632 11.9841 11.8394 14.0038C10.0696 15.9636 9.82595 18.899 11.4285 20.9977C11.6254 21.2556 11.8191 21.5026 12.0034 21.7287C13.1698 23.1596 15.7148 25.6586 16.99 26.9997C17.932 27.9904 18.7789 28.8168 19.4168 29.4187C20.0906 30.0543 21.1305 30.0404 21.8055 29.4062C22.9819 28.3008 24.7858 26.5791 26.0565 25.2427C27.3316 23.9016 28.0633 23.1596 29.2298 21.7287C29.414 21.5026 29.6077 21.2556 29.8046 20.9977C31.4072 18.899 31.1635 15.9636 29.3938 14.0038C27.5699 11.9841 24.4348 11.8796 22.4804 13.7733Z" stroke="#898989" stroke-width="2.02054" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                            }
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
                            <div style={{ position: 'relative' }} >
                                <div onClick={() => setShowMenu(true)}>
                                    <svg width="42" height="41" viewBox="0 0 42 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12.4299" cy="20.2056" r="1.68378" fill="#898989" />
                                        <circle cx="20.8488" cy="20.2056" r="1.68378" fill="#898989" />
                                        <circle cx="29.2678" cy="20.2056" r="1.68378" fill="#898989" />
                                    </svg>
                                </div>
                                {
                                    showMenu ?
                                        <SongMenu setShowMenu={setShowMenu} setShowPlaylistMenu={setShowPlaylistMenu} />
                                        : ""
                                }
                                {
                                    showPlaylistMenu ?
                                        <PlaylistMenu setShowPlaylistMenu={setShowPlaylistMenu} songData={data} />
                                        : ""
                                }

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
                            <Lyrics />
                            : ""
                    }
                </div>
            </div>
        </div>
    )
}

export default TrackPage