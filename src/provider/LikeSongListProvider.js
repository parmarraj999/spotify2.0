import { collection, doc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firbeaseConfig/firebaseConfig";

export const LikeSongListContext = React.createContext();

const LikeSongListProvider = ({children}) => {

    const [likeSongList,setLikeSongList] = useState([])

    const userId = window.localStorage.getItem("userId");

    const getLikeSongList = async () => {
        const collectionRef = doc(db, userId, "liked-songs")
        const nesCollection = collection(collectionRef, "liked-song-list")
        const data = await getDocs(nesCollection)
        const userList = data.docs.map((doc) => ({
            id: doc.id,
          }));
          setLikeSongList(userList)
      }
    
    //   console.log(likeSongList)
      useEffect(()=>{
        getLikeSongList();
      },[])

    return (
        <LikeSongListContext.Provider value={{likeSongList,setLikeSongList}}>
            {children}
        </LikeSongListContext.Provider>
    )
}

export default LikeSongListProvider;