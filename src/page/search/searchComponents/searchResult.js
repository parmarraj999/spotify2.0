import axios from 'axios'
import '../search.css'
import React, { useContext, useEffect, useState } from 'react'
import { SearchValueContext } from '../../../provider/SearchValueProvider'
import { AccessTokenContext } from '../../../provider/AccessTokenProvider'
import SongList from '../resultComponent/songList'
import AlbumList from '../resultComponent/albumList'
import ShowList from '../resultComponent/showList'
import PlaylistList from '../resultComponent/playlistList'
import AudioBookList from '../resultComponent/audioBookList'
import ArtistList from '../resultComponent/artistList'

const NavForSearch = ({currentPath, setCurrentPath}) => {
  return (
    <div className='search_filter_container'>
      <div style={currentPath === "all" ? { color: "black", background: 'white' } : {}} onClick={() => setCurrentPath("all")} >All</div>
      <div style={currentPath === "song" ? { color: "black", background: 'white' } : {}} onClick={() => setCurrentPath("song")} >Songs</div>
      <div style={currentPath === "artist" ? { color: "black", background: 'white' } : {}} onClick={() => setCurrentPath("artist")} >Artists</div>
      <div style={currentPath === "album" ? { color: "black", background: 'white' } : {}} onClick={() => setCurrentPath("album")} >Albums</div>
      <div style={currentPath === "playlist" ? { color: "black", background: 'white' } : {}} onClick={() => setCurrentPath("playlist")} >Playlists</div>
      {/* <div style={currentPath === "show" ? { color: "black", background: 'white' } : {}} onClick={() => setCurrentPath("show")} >Shows</div> */}
      <div style={currentPath === "audiobook" ? { color: "black", background: 'white' } : {}} onClick={() => setCurrentPath("audiobook")} >Podcasts</div>
    </div>
  )
}

function SearchResult() {

  const { searchValue } = useContext(SearchValueContext)
  const accessToken = useContext(AccessTokenContext)

  // data store state 

  const [songs, setSongs] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [artist, setArtist] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  const [show, setShow] = useState([]);
  const [audiobook, setAudiobook] = useState([]);


  const [currentPath, setCurrentPath] = useState('all')

  //  getting search data 

  const getSongsData = async () => {
    const { data } = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${accessToken.accessToken}`
      },
      params: {
        q: searchValue,
        type: "track"
      }
    })
    console.log(data)
    if (data) {
      setSongs(data.tracks.items)
    } else {
      console.log("song data found !")
    }
  }

  // getting album data 

  const getAlbumData = async () => {
    const { data } = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${accessToken.accessToken}`
      },
      params: {
        q: searchValue,
        type: "album"
      }
    })
    console.log(data)
    if (data) {
      setAlbums(data.albums.items)
    } else {
      console.log("album data found !")
    }
  }

  // getting artist data 

  const getArtistData = async () => {
    const { data } = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${accessToken.accessToken}`
      },
      params: {
        q: searchValue,
        type: "artist"
      }
    })
    console.log(data)
    if (data) {
      setArtist(data.artists.items)
    } else {
      console.log("artist data found !")
    }
  }

  // getting playlist data 

  const getPlaylistData = async () => {
    const { data } = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${accessToken.accessToken}`
      },
      params: {
        q: searchValue,
        type: "playlist"
      }
    })
    console.log(data)
    if (data) {
      setPlaylist(data.playlists.items)
    } else {
      console.log("playlist data found !")
    }
  }

  // getting show data 

  const getShowData = async () => {
    const { data } = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${accessToken.accessToken}`
      },
      params: {
        q: searchValue,
        type: "show"
      }
    })
    console.log(data)
    if (data) {
      setShow(data.shows.items)
    } else {
      console.log("show data found !")
    }
  }

  // getting audiobook data

  const getAudiobookData = async () => {
    const { data } = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${accessToken.accessToken}`
      },
      params: {
        q: searchValue,
        type: "audiobook"
      }
    })
    console.log(data)
    if (data) {
      setAudiobook(data.audiobooks.items)
    } else {
      console.log("audiobook data found !")
    }
  }


  useEffect(() => {
    getSongsData();
    getAlbumData();
    getArtistData();
    getPlaylistData();
    getShowData();
    getAudiobookData();
  }, [searchValue])

  return (
    <div className='search_result_container'>
      <NavForSearch currentPath={currentPath} setCurrentPath={setCurrentPath} />
      {
      currentPath === 'all'?
      <>
      <SongList data={songs} />
      <AlbumList data={albums} /> 
      <PlaylistList data={playlist} />
      {/* <ShowList data={show}/> */}
      <AudioBookList data={audiobook} />
      <ArtistList data={artist} />
      </>
      : ""
      }
      {
        currentPath === "song"?
        <SongList data={songs} /> : ""
      }
      {
        currentPath === "album"?
        <AlbumList data={albums}/> : ""
      }
      {/* {
        currentPath === 'show' ?
        <ShowList data={show}/> : ""
      } */}
      {
        currentPath === "playlist" ?
        <PlaylistList data={playlist} /> : ""
      }
      {
        currentPath === "audiobook" ? 
        <AudioBookList data={audiobook} /> : ""
      }
      {
        currentPath === "artist" ? 
        <ArtistList data={artist} /> : ""
      }
    </div>
  )
}

export default SearchResult