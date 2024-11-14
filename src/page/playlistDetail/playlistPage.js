import { collection, doc, getDocs } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { db } from '../../firbeaseConfig/firebaseConfig';
import { MyPlaylistDataContext } from '../../provider/MyPlaylistDataProvider';
import './playlistdetail.css';
import SongBar from '../../component/songBar/songBar';

function PlaylistPage() {

  const { id } = useParams();
  const userId = window.localStorage.getItem("userId");

  const [data, setData] = useState([]);
  const { playlistData } = useContext(MyPlaylistDataContext)

  const getMyPlaylist = async () => {
    const collectionRef = doc(db, userId, "my-playlist")
    const nesCollection = collection(collectionRef, id)
    const data = await getDocs(nesCollection)
    const playlist = data.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }));
    setData(playlist)
    console.log(playlist)
  }

  const deleteplaylist = () =>{
    console.log('click')
  }

  useEffect(() => {
    getMyPlaylist();
  }, [])

  return (
    <div className='playlist_page_container' >
      <div className='playlist_page_header' >
        <img src={playlistData.playlistImage} />
        <div className='playlist_page_details' >
          <h2>{playlistData.playlistName}</h2>
          <div style={{ display: 'flex', gap: '.5rem' }} >
            <svg style={{ width: "20px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM13 12H17V14H11V7H13V12Z"></path></svg>
            <h4>{playlistData.addedAt}</h4>
          </div>
          <div onClick={deleteplaylist} >
            <svg style={{width:"30px",color:'red',cursor:"pointer"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>
          </div>
        </div>
      </div>
      <div className='playlist_page_list_container' >
        <div className='playlist_page_list_header' >
          <h5 style={{ width: "50px" }} >#</h5>
          <h5>Name</h5>
          <h5>Album</h5>
          <h5>Duration</h5>
        </div>
        {
          data.map((data) => {
            return (
              <SongBar data={data} />
            )
          })
        }
      </div>
    </div>
  )
}

export default PlaylistPage