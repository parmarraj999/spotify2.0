import { collection, doc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firbeaseConfig/firebaseConfig";

export const MyPlaylistDataContext = React.createContext();

const MyPlaylistDataProvider = ({ children }) => {

    const [playlistData, setPlaylistData] = useState([])
    const userId = window.localStorage.getItem("userId");

    const getMyPlaylist = async () => {
        const collectionRef = doc(db, userId, "playlist")
        const nesCollection = collection(collectionRef, "my-playlist-name")
        const data = await getDocs(nesCollection)
        const playlists = data.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        setPlaylistData(playlists)
      }
    
      useEffect(() => {
        getMyPlaylist();
      }, [])

    console.log(playlistData);

    return (
        <MyPlaylistDataContext.Provider value={{playlistData,setPlaylistData}}>
            {children}
        </MyPlaylistDataContext.Provider>
    )
}

export default MyPlaylistDataProvider;