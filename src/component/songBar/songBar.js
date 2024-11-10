import React, { useState } from 'react';
import './songbar.css';
import { Link } from 'react-router-dom';
import PlaylistMenu from '../menu/playlistMenu/playlistMenu';

function SongBar({ data }) {

    const artistNamePlaylist = data?.track?.artists

    const [showPlaylistMenu, setShowPlaylistMenu] = useState(false)

    function convertMillisecondsToTimeString(milliseconds) {
        const seconds = Math.floor(milliseconds / 1000);
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds
            % 60;

        const timeString = `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
        return timeString;
    }

    const linkData = {
        albumLink: data?.track.album.id,
        artistLink: data?.track?.artists?.[0]?.id
    }

    console.log(data)

    return (
        <div className='song_bar_container' >
            <div className='song_number' >

                <h4>{data?.track?.track_number}</h4>

            </div>
            <div className='song_details' >
                <div className='song_cover_img' >
                    <Link to={`/track/${data.track.id}`}>
                        <img src={data?.track?.album?.images[0]?.url} />
                    </Link>
                </div>
                <div className='song_names'>
                    <Link to={`/track/${data.track.id}`}>
                        <h4>{data?.track?.name}</h4>
                    </Link>

                    <div style={{ width: '200px', display: "flex", gap: '.3rem', overflow: 'hidden' }} >
                        {
                            artistNamePlaylist?.map((data) => {
                                return (
                                    <Link to={`/artist/${data.id}`}>
                                        <h5>{data.name},</h5>
                                    </Link>
                                )
                            })
                        }

                    </div>
                </div>
            </div>

            <div className='song_type' >
                <Link to={`/album/${data.track?.album?.id}`} >
                    <h4>{data?.track?.album?.name}</h4>
                </Link>
            </div>

            <div className='song_timing' style={{ position: "relative" }} >

                <h4>{convertMillisecondsToTimeString(data?.track?.duration_ms)}</h4>

                <div>

                    <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.0693 14.4785L20.2054 16.2844L18.3416 14.4785C16.3872 12.5848 13.2521 12.6893 11.4282 14.709C9.65847 16.6688 9.41482 19.6042 11.0174 21.7029C11.2143 21.9608 11.408 22.2078 11.5922 22.4339C12.7587 23.8648 15.3037 26.3638 16.5788 27.7049C17.5209 28.6957 18.3677 29.522 19.0057 30.1239C19.6794 30.7595 20.7194 30.7456 21.3944 30.1114C22.5707 29.006 24.3747 27.2843 25.6453 25.9479C26.9205 24.6068 27.6522 23.8648 28.8186 22.4339C29.0029 22.2078 29.1965 21.9608 29.3935 21.7029C30.996 19.6042 30.7524 16.6688 28.9826 14.709C27.1588 12.6893 24.0236 12.5848 22.0693 14.4785Z" stroke="#898989" stroke-width="2.02054" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <div className='menu_icon_songs' onClick={() => setShowPlaylistMenu(true)} >
                    <svg width="42" height="41" viewBox="0 0 42 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12.4299" cy="20.2056" r="1.68378" fill="#898989" />
                        <circle cx="20.8488" cy="20.2056" r="1.68378" fill="#898989" />
                        <circle cx="29.2678" cy="20.2056" r="1.68378" fill="#898989" />
                    </svg>
                </div>
                {
                    showPlaylistMenu ?
                        <PlaylistMenu setShowPlaylistMenu={setShowPlaylistMenu} linkData={linkData} /> : ""
                }
            </div>
        </div>
    )
}

export default SongBar