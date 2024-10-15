import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { SearchValueContext } from '../../../provider/SearchValueProvider'
import { AccessTokenContext } from '../../../provider/AccessTokenProvider'

function SearchResult() {

  const { searchValue } = useContext(SearchValueContext)
  const accessToken = useContext(AccessTokenContext)

  // data store state 

  const [songs, setSongs] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [artist, setArtist] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  const [show, setShow] = useState([]);
  const [audiobook,setAudiobook] = useState([]);

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
    if(data){
      setAudiobook(data.audiobooks.items)
    }else{
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
    <div>SearchResult</div>
  )
}

export default SearchResult