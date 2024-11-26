import React, { useContext, useEffect, useState } from 'react'
import './myAlbum.css';
import { collection, doc, getDocs } from 'firebase/firestore';
import { db } from '../../firbeaseConfig/firebaseConfig';
import { Link } from 'react-router-dom';
import { MyAlbumListContext } from '../../provider/MyAlbumListProvider';

function MyAlbum() {

    const { albumData } = useContext(MyAlbumListContext)

  return (
    <div className='my_album_container' >
        <h2>My Albums</h2>
        <div className='my_album_box_container' >
        {
            albumData?.map((data)=>{
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