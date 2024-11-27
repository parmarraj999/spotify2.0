import { collection, doc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firbeaseConfig/firebaseConfig";

export const AllPlaylistDataContext = React.createContext();

const AllPlaylistDataProvider = ({ children }) => {

    const [playlistData, setPlaylistData] = useState();
    const userId = window.localStorage.getItem("userId");

    const getAllPlaylistData = async () => {
        const collectionRef = doc(db, userId, "playlist")
        const nesCollection = collection(collectionRef, "playlist-list")
        const data = await getDocs(nesCollection)
        const playlistData = data.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        }));
        // console.log(playlistData)
        setPlaylistData(playlistData)
    }

    useEffect(() => {
        getAllPlaylistData();
    }, [])

    return (
        <AllPlaylistDataContext.Provider value={{ playlistData, setPlaylistData, getAllPlaylistData }} >
            {children}
        </AllPlaylistDataContext.Provider>
    )
}

export default AllPlaylistDataProvider;