import React, { useContext, useEffect, useState } from 'react'
import { LikeSongListContext } from '../../provider/LikeSongListProvider';
import { addDoc, collection, deleteDoc, doc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firbeaseConfig/firebaseConfig';


const LikeButton = ({ data, artistData }) => {

    const { likeSongList, getLikeSongListProvider } = useContext(LikeSongListContext)
    const [trackDoc, setTrackDoc] = useState();
    const [isLiked, setIsLiked] = useState();
    const userId = window.localStorage.getItem('userId');
  
    const checkLiked = () => {
      const foundSong = likeSongList.find(song => song.songId === data?.id);
      if (foundSong) {
        setTrackDoc(foundSong);
      }
      const found = likeSongList.some(obj => obj.songId === data?.id);
      setIsLiked(found)
    }
  
    useEffect(() => {
      checkLiked();
    }, [getLikeSongListProvider])
  
    const removeLike = async () => {
      await deleteDoc(doc(db, userId, "liked-songs", "liked-song-list", trackDoc.id))
        .then(() => {
          console.log("successfully")
        })
      getLikeSongListProvider();
      checkLiked();
    }
  
    const likeSongData = {
      songId: data?.id,
      songName: data?.name,
      songDuration: data?.duration_ms,
      songImage: data?.album?.images?.[0].url || imageUrl,
      artists: { artistData },
      albumName: data?.album?.name,
      albumId: data?.album?.id,
      addedAt: serverTimestamp()
    }
  
    const AddLikedSong = async () => {
      const collectionRef = doc(db, userId, "liked-songs")
      const likeSongCollection = collection(collectionRef, "liked-song-list")
      addDoc(likeSongCollection, likeSongData)
        .then(() => {
          console.log("successfully added")
        })
      getLikeSongListProvider();
      checkLiked();
    }
  
    return (
      <>
        {
          isLiked ?
            <div style={{ cursor: "pointer" }} onClick={removeLike}>
              <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.0693 14.0678L20.2054 15.8738L18.3416 14.0678C16.3872 12.1741 13.2521 12.2787 11.4282 14.2984C9.65847 16.2581 9.41482 19.1936 11.0174 21.2923C11.2143 21.5502 11.408 21.7972 11.5922 22.0232C12.7587 23.4542 15.3037 25.9531 16.5788 27.2942C17.5209 28.285 18.3677 29.1113 19.0057 29.7132C19.6794 30.3488 20.7194 30.335 21.3944 29.7007C22.5707 28.5954 24.3747 26.8736 25.6453 25.5372C26.9205 24.1961 27.6522 23.4542 28.8186 22.0232C29.0029 21.7972 29.1965 21.5502 29.3935 21.2923C30.996 19.1936 30.7524 16.2581 28.9826 14.2984C27.1588 12.2787 24.0236 12.1741 22.0693 14.0678Z" fill="#1ED760" stroke="#1ED760" stroke-width="2.02054" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div> :
            <div style={{ cursor: "pointer" }} onClick={AddLikedSong}>
              <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.0693 14.0678L20.2054 15.8738L18.3416 14.0678C16.3872 12.1741 13.2521 12.2787 11.4282 14.2984C9.65847 16.2581 9.41482 19.1936 11.0174 21.2923C11.2143 21.5502 11.408 21.7972 11.5922 22.0232C12.7587 23.4542 15.3037 25.9531 16.5788 27.2942C17.5209 28.285 18.3677 29.1113 19.0057 29.7132C19.6794 30.3488 20.7194 30.335 21.3944 29.7007C22.5707 28.5954 24.3747 26.8736 25.6453 25.5372C26.9205 24.1961 27.6522 23.4542 28.8186 22.0232C29.0029 21.7972 29.1965 21.5502 29.3935 21.2923C30.996 19.1936 30.7524 16.2581 28.9826 14.2984C27.1588 12.2787 24.0236 12.1741 22.0693 14.0678Z" stroke="#898989" stroke-width="2.02054" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
        }
      </>
    )
  }

  export default LikeButton