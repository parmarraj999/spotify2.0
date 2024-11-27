import { collection, doc, getDocs } from 'firebase/firestore'
import React, { useContext, useEffect, useState } from 'react'
import { db } from '../../firbeaseConfig/firebaseConfig'
import './myplaylist.css';
import MyPlaylistComponent from './myplaylistComponent/my-playlist';
import OtherPlaylist from './myplaylistComponent/other-playlits';
import { MyPlaylistDataContext } from '../../provider/MyPlaylistDataProvider';

function MyPlaylist() {

  // const userId = window.localStorage.getItem("userId");

  // const getMyPlaylist = async () => {
  //   const collectionRef = doc(db, userId, "playlist")
  //   const nesCollection = collection(collectionRef, "my-playlist-name")
  //   const data = await getDocs(nesCollection)
  //   const playlists = data.docs.map((doc) => ({
  //     id: doc.id,
  //     ...doc.data()
  //   }));
  //   // setdata(playlistName)
  //   console.log(playlists)
  // }

  // useEffect(() => {
  //   getMyPlaylist();
  // }, [])

  const { playlistData } = useContext(MyPlaylistDataContext);

  return (
    <div className='my-playlist-container' >
          <MyPlaylistComponent />
      <OtherPlaylist />
    </div>
  )
}

export default MyPlaylist