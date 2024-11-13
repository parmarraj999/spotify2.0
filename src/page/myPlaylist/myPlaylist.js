import { collection, doc, getDocs } from 'firebase/firestore'
import React, { useEffect } from 'react'
import { db } from '../../firbeaseConfig/firebaseConfig'

function MyPlaylist() {

  const userId = window.localStorage.getItem("userId");

  const getMyPlaylist = async () => {
    const collectionRef = doc(db, userId, "playlist")
    const nesCollection = collection(collectionRef, "my-playlist-name")
    const data = await getDocs(nesCollection)
    const playlists = data.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }));
    // setdata(playlistName)
    console.log(playlists)
  }

  useEffect(() => {
    getMyPlaylist();
  }, [])

  return (
    <div>MyPlaylist work</div>
  )
}

export default MyPlaylist