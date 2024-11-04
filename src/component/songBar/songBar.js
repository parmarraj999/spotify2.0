import React, { useState } from 'react';
import './songbar.css';
import { Link } from 'react-router-dom';

function SongBar({ data, album }) {

    const artistNameAlbum = data?.artists
    const artistNamePlaylist = data?.track?.artists

    function convertMillisecondsToTimeString(milliseconds) {
        const seconds = Math.floor(milliseconds / 1000);
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds
            % 60;

        const timeString = `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
        return timeString;
    }

    return (
        <Link to={`/track/${data.track.id}`} className='song_bar_container' >
            <div className='song_number' >
                {
                    album ? <h4>{data?.track_number}</h4> :
                        <h4>{data?.track?.track_number}</h4>
                }
            </div>
            <div className='song_details' >
                {
                    album ? "" :
                        <div className='song_cover_img' >
                            <img src={data?.track?.album?.images[0]?.url} />
                        </div>
                }
                <div className='song_names'>
                    {
                        album ? <h4>{data.name}</h4> :
                            <h4>{data?.track?.name}</h4>
                    }
                    <div style={{ width: '200px', display: "flex", gap: '.3rem', overflow: 'hidden' }} >
                        {
                            album ?
                                <>
                                    {
                                        artistNameAlbum?.map((data) => {
                                            return (
                                                <h5>{data.name},</h5>
                                            )
                                        })
                                    }
                                </>
                                :
                                <>
                                    {
                                        artistNamePlaylist?.map((data) => {
                                            return (
                                                <h5>{data.name},</h5>
                                            )
                                        })
                                    }
                                </>
                        }
                    </div>
                </div>
            </div>
            {
                album === true ? "" :
                    <div className='song_type' >
                        <h4>{data?.track?.album?.name}</h4>
                    </div>
            }
            <div className='song_timing' >
                {
                    album ? <h4>{convertMillisecondsToTimeString(data?.duration_ms)}</h4> :
                        <h4>{convertMillisecondsToTimeString(data?.track?.duration_ms)}</h4>
                }
                <div>

                    <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.0693 14.4785L20.2054 16.2844L18.3416 14.4785C16.3872 12.5848 13.2521 12.6893 11.4282 14.709C9.65847 16.6688 9.41482 19.6042 11.0174 21.7029C11.2143 21.9608 11.408 22.2078 11.5922 22.4339C12.7587 23.8648 15.3037 26.3638 16.5788 27.7049C17.5209 28.6957 18.3677 29.522 19.0057 30.1239C19.6794 30.7595 20.7194 30.7456 21.3944 30.1114C22.5707 29.006 24.3747 27.2843 25.6453 25.9479C26.9205 24.6068 27.6522 23.8648 28.8186 22.4339C29.0029 22.2078 29.1965 21.9608 29.3935 21.7029C30.996 19.6042 30.7524 16.6688 28.9826 14.709C27.1588 12.6893 24.0236 12.5848 22.0693 14.4785Z" stroke="#898989" stroke-width="2.02054" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                </div>

            </div>
        </Link>
    )
}

export default SongBar