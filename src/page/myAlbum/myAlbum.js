import React, { useEffect, useState } from 'react'
import './myAlbum.css';
import { collection, doc, getDocs } from 'firebase/firestore';
import { db } from '../../firbeaseConfig/firebaseConfig';
import { Link } from 'react-router-dom';

function MyAlbum() {

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
    <div className='my_album_container' >
        <h2>My Albums</h2>
        <div className='my_album_box_container' >
        {
            albumData.map((data)=>{
                return(
                    <Link to={`/album/${data?.albumId}`} className='my_album_box' >
                        <img src={data?.albumImage} />
                        <h4>{data?.albumName}</h4>
                    </Link>
                )
            })
        }

        </div>
    </div>
  )
}

export default MyAlbum