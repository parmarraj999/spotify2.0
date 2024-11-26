import React, { useEffect, useState } from 'react'
import '../myplaylist.css';
import { collection, doc, getDocs } from 'firebase/firestore';
import { db } from '../../../firbeaseConfig/firebaseConfig';
import { Link } from 'react-router-dom';

function OtherPlaylist({}) {

    const userId = window.localStorage.getItem("userId");
    const [data, setData] = useState([]);

    const getAllPlaylist = async () => {
        const collectionRef = doc(db, userId, "playlist")
        const nesCollection = collection(collectionRef, "playlist-list")
        const data = await getDocs(nesCollection)
        const playlistName = data.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        }));
        console.log(playlistName)
        setData(playlistName)
    }

    useEffect(() => {
        getAllPlaylist();
    }, [])

    return (
        <div className='other_playlist_container' >
            <h2>Other Playlist</h2>
            <div className='other_playlist_albums' >
                {
                    data?.map((data) => {
                        return (
                            <Link to={`/playlist/${data?.playlistId}`} className='other_playlist_album' >
                                <img src={data?.playlistImage} />
                                <h3>{data?.playlistName}</h3>
                            </Link>
                        )
                    })
                }
            </div>
        </div >
    )
}

export default OtherPlaylist