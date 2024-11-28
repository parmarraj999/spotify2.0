import React, { useContext, useState } from 'react'
import './likeSong.css'
import { Link } from 'react-router-dom';
import { collection, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../firbeaseConfig/firebaseConfig';
import { LikeSongListContext } from '../../provider/LikeSongListProvider';
import SongMenu from '../../component/menu/songMenu/songMenu';
import PlaylistMenu from '../../component/menu/playlistMenu/playlistMenu';

const ArtistList = (data) => {
    return (
        <>
            {
                data?.map((data) => {
                    return (
                        <Link to={`/artist/${data.id}`} className='artist_list_song'>{data?.name}</Link>
                    )
                })
            }
        </>
    )
}

function LikeSongBar({ data, getLikeSongList }) {

    const [showPlaylistMenu, setShowPlaylistMenu] = useState(false)

    const linkData = {
        albumLink: data?.albumId,
        artistLink: data?.artists?.artistArray?.[0]?.id
    }

    const [showMenu, setShowMenu] = useState(false)

    function convertMillisecondsToTimeString(milliseconds) {
        const seconds = Math.floor(milliseconds / 1000);
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds
            % 60;

        const timeString = `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
        return timeString;
    }

    const userId = window.localStorage.getItem('userId');
    console.log(data)

    const removeLikedSong = async () => {
        console.log('clicked')
        await deleteDoc(doc(db, userId, "liked-songs", "liked-song-list", data.id))
            .then(() => {
                getLikeSongList();
                console.log("successfully")
            })
        console.log(data)
    }

    return (
        <div className='like_song_item' >
            <div className='like_song_cover' >
                <img src={data.songImage} />
                <div>
                    <Link to={`/track/${data.songId}`} >
                        <h2>{data.songName}</h2>
                    </Link>
                    <h3>{ArtistList(data.artists.artistArray)}</h3>
                </div>
            </div>
            <Link to={`/album/${data.albumId}`} className='like_song_album' >{data.albumName}</Link>
            <div className='like_song_duration' >
                <h3>{convertMillisecondsToTimeString(data.songDuration)}</h3>
                <div style={{ height: "40px" }} onClick={removeLikedSong}>

                    <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.0693 14.0678L20.2054 15.8738L18.3416 14.0678C16.3872 12.1741 13.2521 12.2787 11.4282 14.2984C9.65847 16.2581 9.41482 19.1936 11.0174 21.2923C11.2143 21.5502 11.408 21.7972 11.5922 22.0232C12.7587 23.4542 15.3037 25.9531 16.5788 27.2942C17.5209 28.285 18.3677 29.1113 19.0057 29.7132C19.6794 30.3488 20.7194 30.335 21.3944 29.7007C22.5707 28.5954 24.3747 26.8736 25.6453 25.5372C26.9205 24.1961 27.6522 23.4542 28.8186 22.0232C29.0029 21.7972 29.1965 21.5502 29.3935 21.2923C30.996 19.1936 30.7524 16.2581 28.9826 14.2984C27.1588 12.2787 24.0236 12.1741 22.0693 14.0678Z" fill="#1ED760" stroke="#1ED760" stroke-width="2.02054" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <div className='menu_icon_songs' onClick={() => setShowMenu(true)} >
                    <svg width="42" height="41" viewBox="0 0 42 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12.4299" cy="20.2056" r="1.68378" fill="#898989" />
                        <circle cx="20.8488" cy="20.2056" r="1.68378" fill="#898989" />
                        <circle cx="29.2678" cy="20.2056" r="1.68378" fill="#898989" />
                    </svg>
                </div>
                {
                    showMenu ?
                        <SongMenu removeLikedSong={removeLikedSong} linkData={linkData} setShowMenu={setShowMenu} setShowPlaylistMenu={setShowPlaylistMenu} />
                        : ""
                }
                {
                    showPlaylistMenu ?
                        <PlaylistMenu setShowPlaylistMenu={setShowPlaylistMenu} songData={data} /> : ""
                }
            </div>
        </div >
    )
}

export default LikeSongBar
