import React, { useEffect, useState } from 'react';
import './myArtist.css';
import { collection, doc, getDocs } from 'firebase/firestore';
import { db } from '../../firbeaseConfig/firebaseConfig';
import { Link } from 'react-router-dom';

function MyArtist() {

    const [artistList, setArtistList] = useState([]);
    const userId = window.localStorage.getItem("userId");

    const getArtistList = async () => {
        const collectionRef = doc(db, userId, "favorite-artists")
        const favArtistCollection = collection(collectionRef, "favorite-artists-list")
        const data = await getDocs(favArtistCollection)
        // const artistList 
        setArtistList(data.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        })))
    }

    useEffect(() => {
        getArtistList();
    }, [])

    console.log(artistList)

    return (
        <div className='my_artist_container' >
            <div className='my_artist_header' >
                <h1>My Artists</h1>
                <div className='circle' ></div>
                <h3>{artistList.length} Artist</h3>
            </div>
            <div className='artists_list_container' >
                {
                    artistList?.map((data)=>{
                        return(
                            <Link to={`/artist/${data.artistId}`} className='artist_cover' >
                                <img src={data.artistImage} />
                                <h3>{data.artistName}</h3>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default MyArtist