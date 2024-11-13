import { collection, doc, getDocs } from 'firebase/firestore';
import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { db } from '../../firbeaseConfig/firebaseConfig';
import { PlaylistDataContext } from '../../provider/PlaylistDataProvider';

function PlaylistPage() {

    const {id} = useParams();
    const userId = window.localStorage.getItem("userId");

    const { playlistData } = useContext(PlaylistDataContext)

    const getMyPlaylist = async() => {
        const collectionRef = doc(db, userId, "my-playlist")
        const nesCollection = collection(collectionRef, id)
        const data = await getDocs(nesCollection)
        const playlist = data.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        }));
        // setdata(playlistName)
        console.log(playlist)
    }

    useEffect(()=>{
        getMyPlaylist();
    },[])

  return (
    <div className='playlist_page_container' >
        
    </div>
  )
}

export default PlaylistPage