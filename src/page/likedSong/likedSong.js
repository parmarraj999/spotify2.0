import React, { useEffect, useState } from 'react';
import './likeSong.css';
import LikeSongBar from './likeSongBar';
import { collection, doc, getDocs } from 'firebase/firestore';
import { db } from '../../firbeaseConfig/firebaseConfig';

function LikedSong() {

  const userId = window.localStorage.getItem('userId')

  const [likeData, setLikeData] = useState([])

  const getLikeSongList = async () => {
    const collectionRef = doc(db, userId, "liked-songs")
    const nesCollection = collection(collectionRef, "liked-song-list")
    const data = await getDocs(nesCollection)
    const userList = data.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setLikeData(userList);
  }

  console.log(likeData)

  useEffect(() => {
    getLikeSongList();
  }, []);

  

  return (
    <>
    {
      likeData ?
      <div className='liked_song_container' >
        <div className='liked_song_header' >
          <h1>Liked Songs</h1>
          <div className='circle' ></div>
          <h2>20 songs</h2>
        </div>
        <div className='like_song_detail_header' >
          <h2>Title</h2>
          <h2>Album</h2>
          <h2>Duration</h2>
        </div>
        <div className='like_song_list' >
          {
            likeData?.map((data) => {
              return (
                <LikeSongBar data={data} />
              )
            })
          }
        </div>
      </div>
      : ""
    }
    </>
  )
}

export default LikedSong