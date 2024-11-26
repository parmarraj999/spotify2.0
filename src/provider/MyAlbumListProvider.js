import { collection, doc, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../firbeaseConfig/firebaseConfig';

export const MyAlbumListContext = React.createContext();

function MyAlbumListProvider({children}) {

    const userId = window.localStorage.getItem("userId");

    const [albumData,setAlbumData] = useState([]);

    const getMyAlbumData = async() => {
        const collectionRef = doc(db, userId, "my-albums")
        const favArtistCollection = collection(collectionRef, "my-albums-list")
        const data = await getDocs(favArtistCollection)
        setAlbumData(data.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        })))
        console.log(albumData)
    }

    useEffect(()=>{
        getMyAlbumData();
    },[])


  return (
    <MyAlbumListContext.Provider value={{albumData,getMyAlbumData}} >
        {children}
    </MyAlbumListContext.Provider>
  )
}

export default MyAlbumListProvider