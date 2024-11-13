import React, { useContext, useEffect, useState } from 'react'
import '../myplaylist.css';
import { collection, doc, getDocs } from 'firebase/firestore';
import { db } from '../../../firbeaseConfig/firebaseConfig';
import { Link } from 'react-router-dom';
import { PlaylistDataContext } from '../../../provider/PlaylistDataProvider';

function MyPlaylistComponent() {

    
  const userId = window.localStorage.getItem("userId");
  const [data,setData] = useState([]);

  const { playlistData, setPlaylistData } = useContext(PlaylistDataContext);

  const getMyPlaylist = async () => {
    const collectionRef = doc(db, userId, "playlist")
    const nesCollection = collection(collectionRef, "my-playlist-name")
    const data = await getDocs(nesCollection)
    const playlists = data.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }));
    setData(playlists)
    console.log(playlists)
  }

  useEffect(() => {
    getMyPlaylist();
  }, [])

  const handleClick = (data) => {
    console.log("click")
    setPlaylistData(data)

  }

  return (
    <div className='my_playlist_component' >
        <h1>Your Playlists</h1>
        <div className='my_playlist_albums' >
        {
            data?.map((data)=>{
                return(
                    <Link to={`/myPlaylists/${data.playlistId}`} className='my_playlist_album' onClick={()=>handleClick(data)} >
                        <img src={data.playlistImage} />
                        <h3>{data.playlistName}</h3>
                    </Link>
                )
            })
        }
        </div>
    </div>
  )
}

export default MyPlaylistComponent