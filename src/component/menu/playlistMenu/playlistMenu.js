import React, { useEffect, useState } from 'react';
import './playlistMenu.css';
import { Link } from 'react-router-dom';
import AddPlaylist from '../addPlaylist/addPlaylist';
import { addDoc, collection, doc, getDocs } from 'firebase/firestore';
import { db } from '../../../firbeaseConfig/firebaseConfig';

function PlaylistMenu({ setShowPlaylistMenu, linkData, songData }) {

    const [data, setdata] = useState([]);

    const [showAddMenu, setShowAddMenu] = useState(false)
    const userId = window.localStorage.getItem("userId");

    const [currentId, setCurrentId] = useState("")

    // close playlist menu 

    const handlePlaylist = () => {
        console.log("click")
        if(currentId !== ""){
            const collectionRef = doc(db, userId, "my-playlist")
            const playlistCollection = collection(collectionRef, currentId)
            addDoc(playlistCollection, songData)
            .then(() => {
                console.log("successfully added")
                setShowPlaylistMenu(false)
            })
        }
    }

    const getPlaylistName = async () => {
        const collectionRef = doc(db, userId, "playlist")
        const nesCollection = collection(collectionRef, "my-playlist-name")
        const data = await getDocs(nesCollection)
        const playlistName = data.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        }));
        setdata(playlistName)
        console.log(playlistName)
        console.log(songData)
    }

    useEffect(() => {
        getPlaylistName();
    }, [])

    return (
        <div className='playlist_menu' >
            {
                showAddMenu ? <AddPlaylist getPlaylistName={getPlaylistName} setShowAddMenu={setShowAddMenu} /> :
                    <>
                        <div className='playlist_menu_header' >
                            <h2>Add to a Playlist</h2>
                        </div>
                        <div className='playlist_menu_item' style={{ position: "relative" }} onClick={() => setShowAddMenu(true)}>
                            <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 7.75736V12M12 16.2426V12M12 12L7.75732 12M12 12H16.2426" stroke="#ffffff" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <h3>New Playlist</h3>
                        </div>
                        {
                            data.map((data) => {
                                return (
                                    <div className='playlist_menu_item' onClick={() => setCurrentId(data.playlistId)}>
                                        {
                                            currentId === data.playlistId ?
                                                <svg style={{ width: '25px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(30,215,96,1)"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z"></path></svg>
                                                :
                                                <svg style={{ width: "25px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"></path></svg>
                                        }
                                        <h4>{data.playlistName}</h4>
                                    </div>
                                )
                            })
                        }
                        <div className='add_button_container' >
                            <button className='cancel_button' onClick={() => setShowPlaylistMenu(false)}>Cancel</button>
                            <button className='add_button' onClick={handlePlaylist} >Add</button>
                        </div>

                    </>
            }
        </div>
    )
}

export default PlaylistMenu