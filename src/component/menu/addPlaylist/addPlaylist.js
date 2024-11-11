import React, { useState } from 'react'
import './addplaylist.css';
import { addDoc, collection, doc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../../firbeaseConfig/firebaseConfig';

function AddPlaylist({ setShowAddMenu, getPlaylistName }) {

  const [playlistName,setPlaylistName] = useState('')

  const userId = window.localStorage.getItem("userId");

  const data = {
    playlistName : playlistName,
    addedAt : serverTimestamp(),
  }

  const createPlaylist = () => {
    console.log(playlistName)
    const collectionRef = doc(db, userId, "playlist")
    const playlistCollection = collection(collectionRef, "my-playlist-name")
    addDoc(playlistCollection, data)
    .then(() => {
        console.log("successfully added")
        setShowAddMenu(false)
        getPlaylistName();
    })
  }

  return (
    <div className='add_playlist_container' >
      <div className='add_playlist_header' >
        <h3>New Playlist</h3>
      </div>
      <div className='add_playlist_item' >
        <input placeholder='Playlist Name' onChange={(e)=>setPlaylistName(e.target.value)} />
      </div>
      <div className='add_button_container' >
        <button className='cancel_button' onClick={() => setShowAddMenu(false)}>Cancel</button>
        <button className='add_button' onClick={createPlaylist} >Create</button>
      </div>
    </div>
  )
}

export default AddPlaylist