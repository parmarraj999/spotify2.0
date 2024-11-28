import React, { useContext } from 'react'
import './library.css'
import { Link } from 'react-router-dom'
import { AllPlaylistDataContext } from '../../provider/AllPlaylistDataProvider'
import { ArtistListContext } from '../../provider/ArtistListProvider'
import { MyAlbumListContext } from '../../provider/MyAlbumListProvider'

function Library() {

  const { playlistData } = useContext(AllPlaylistDataContext)

  const allPlaylistLimit = playlistData?.slice(0, 3);

  const { artistList } = useContext(ArtistListContext);
  const artistListLimit = artistList?.slice(0, 3);

  const { albumData } = useContext(MyAlbumListContext);
  const albumDataLimit = albumData.slice(0, 3);

  return (
    <div className='library_container' >
      <div className='library_collection' >
        <Link to='/liked' className='like_song_link'>
          <img src='../../../../image/like-cover.png' />
          <h4>Liked Songs</h4>
        </Link>
        {
          allPlaylistLimit?.map((data) => {
            return (
              <Link to={`/playlist/${data.playlistId}`} className='like_song_link' >
                <div className='label_image'>
                  <img src={data.playlistImage} />
                  <h6 style={{ background: " rgb(255, 0, 0)" }}>Playlist</h6>
                </div>
                <h4>{data.playlistName}</h4>
              </Link>
            )
          })
        }
        {
          artistListLimit?.map((data) => {
            return (
              <Link to={`/artist/${data.artistId}`} className='like_song_link' >
                <div className='label_image'>
                  <img style={{ borderRadius: "50%" }} src={data.artistImage} />
                  <h6 style={{background:"rgb(21, 0, 255)"}}>Artist</h6>
                </div>
                <h4>{data.artistName}</h4>
              </Link>
            )
          })
        }
        {
          albumDataLimit?.map((data) => {
            return (
              <Link to={`/artist/${data.albumId}`} className='like_song_link' >
                <div className='label_image'>
                  <img src={data.albumImage} />
                  <h6>Album</h6>
                </div>
                <h4>{data.albumName}</h4>
              </Link>
            )
          })
        }
      </div>
    </div >
  )
}

export default Library