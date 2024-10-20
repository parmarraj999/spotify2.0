import axios from 'axios';
import './App.css';
import './utility.css'
import { useContext, useEffect, useState } from 'react';
import Nav from './layout/nav/nav';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Layout from './layout/layout';
import Home from './page/home/home';
import Discover from './page/discover/discover';
import Search from './page/search/search';
import Library from './page/library/library';
import AsideTabProvider from './provider/AsideTabProvider';
import PlaylistDetail from './page/playlistDetail/playlistDetail';
import Album from './page/album/album';
import { AccessTokenContext } from './provider/AccessTokenProvider';
import SearchValueProvider from './provider/SearchValueProvider';
import ArtistDetail from './page/artistDetail/artistDetail';

function App() {

  const CLIENT_ID = 'f5c193cd77ec4b80983881a119bbe2a2';
  const CLIENT_SECRET = "811dba94023d42fc94c5b02c56ecdcd0";

  const [track, setTrack] = useState([]);

  const [accessToken, setAccessToken] = useState("");
  console.log(accessToken)

  const getSong = async () => {

    const { data } = await axios.get("https://api.spotify.com/v1/albums/6mHNMtHrXIdUWWuZD9njsG", {
      headers: {
        Authorization: `Bearer ${accessToken}`
      },
      // params: {
      //   q: "leon",
      //   type: "album"
      // }
    })
    console.log(data)

  }

  useEffect(() => {
    var authParameters = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
    }
    fetch("https://accounts.spotify.com/api/token", authParameters)
      .then(result => result.json())
      .then(data => {
        setAccessToken(data.access_token)
        window.localStorage.setItem('token',data.access_token)
      })
  }, [])

  useEffect(() => {
    // getSong();
  })



  return (
    <SearchValueProvider>
      <AccessTokenContext.Provider value={{ accessToken }} >
        <AsideTabProvider>
          <div className="App">
            <BrowserRouter>
              <div className='nav_app'>
                <Nav />
              </div>
              <Routes>
                <Route path='/' element={<Layout />} >
                  <Route index path='' element={<Home />} />
                  <Route path='discover' element={<Discover />} />
                  <Route path='search' element={<Search />} />
                  <Route path='library' element={<Library />} />
                  <Route path='playlist/:id' element={<PlaylistDetail />} />
                  <Route path='album/:id' element={<Album />} />
                  <Route path='artist/:id' element={<ArtistDetail/>} />
                </Route>
              </Routes>
            </BrowserRouter>
          </div>
        </AsideTabProvider>
      </AccessTokenContext.Provider>
    </SearchValueProvider>
  );
}

export default App;
