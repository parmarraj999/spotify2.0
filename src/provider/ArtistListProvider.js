
import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "../firbeaseConfig/firebaseConfig";
import React, { useEffect, useState } from "react";

export const ArtistListContext = React.createContext();

const ArtistListProvider = ({ children }) => {

    const [artistList,setArtistList] = useState([]);
    const userId = window.localStorage.getItem("userId");

    const getArtistList = async () => {
        const collectionRef = doc(db, userId, "favorite-artists")
        const favArtistCollection = collection(collectionRef, "favorite-artists-list")
        const data = await getDocs(favArtistCollection)
        // const artistList 
        setArtistList(data.docs.map((doc)=>({
            id: doc.id,
            ...doc.data()
        })))
    }
    
    // console.log(artistList)
    useEffect(()=>{
        getArtistList();
    },[])

    return (
        <ArtistListContext.Provider value={{artistList,setArtistList, getArtistList}}>
            {children}
        </ArtistListContext.Provider>
    )
}

export default ArtistListProvider;