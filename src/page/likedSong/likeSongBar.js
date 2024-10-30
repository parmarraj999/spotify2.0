import React from 'react'
import './likeSong.css'

function LikeSongBar() {

    function convertMillisecondsToTimeString(milliseconds) {
        const seconds = Math.floor(milliseconds / 1000);
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds
            % 60;

        const timeString = `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
        return timeString;
    }

    return (
        <div className='like_song_item' >
            <div className='like_song_cover' >
                <img src='https://i.pinimg.com/564x/68/e2/ae/68e2aed9c9bf34c550eecd274fa9f2b8.jpg' />
                <div>
                    <h2>Name</h2>
                    <h3>artist</h3>
                </div>
            </div>
            <div className='like_song_album' >album</div>
            <div className='like_song_duration' >
                <h3>2:45</h3>
                <div style={{height:"40px"}}>
                    <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.0693 14.4785L20.2054 16.2844L18.3416 14.4785C16.3872 12.5848 13.2521 12.6893 11.4282 14.709C9.65847 16.6688 9.41482 19.6042 11.0174 21.7029C11.2143 21.9608 11.408 22.2078 11.5922 22.4339C12.7587 23.8648 15.3037 26.3638 16.5788 27.7049C17.5209 28.6957 18.3677 29.522 19.0057 30.1239C19.6794 30.7595 20.7194 30.7456 21.3944 30.1114C22.5707 29.006 24.3747 27.2843 25.6453 25.9479C26.9205 24.6068 27.6522 23.8648 28.8186 22.4339C29.0029 22.2078 29.1965 21.9608 29.3935 21.7029C30.996 19.6042 30.7524 16.6688 28.9826 14.709C27.1588 12.6893 24.0236 12.5848 22.0693 14.4785Z" stroke="#898989" stroke-width="2.02054" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default LikeSongBar
