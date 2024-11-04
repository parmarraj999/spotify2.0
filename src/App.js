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
import PodcastDetail from './page/podcast/podcastDetail';
import TrackPage from './page/track/trackPage';
import Auth from './page/authentication/auth';
import { doc, getDoc } from 'firebase/firestore';
import { db } from './firbeaseConfig/firebaseConfig';
import UserCredentialProvider, { UserCredentialContext } from './provider/UserCredentialProvider';
import LikedSong from './page/likedSong/likedSong';
import ProfilePicture from './component/profilePicture/profilePicture';
import LikeSongListProvider from './provider/LikeSongListProvider';
import MyArtist from './page/myArtist/myArtist';

function App() {

  const CLIENT_ID = 'f5c193cd77ec4b80983881a119bbe2a2';
  const CLIENT_SECRET = "811dba94023d42fc94c5b02c56ecdcd0";

  const [accessToken, setAccessToken] = useState("");
  const [userData, setUserData] = useState([])

  const userId = localStorage.getItem("userId")
  const [showProfile, setShowProfile] = useState(false)

  const fetchData = async () => {
    const userDocRef = doc(db, userId, "user-credentials");
    const userDocSnapshot = await getDoc(userDocRef);
    setUserData(userDocSnapshot.data())
  };

  useEffect(() => {
    if (userData.profilePicture === "../../../../image/default.png") {
      setShowProfile(true)
    }
  }, [userData])

  // console.log(userData)

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
        window.localStorage.setItem('token', data.access_token)
        if (userId) {
          fetchData();
        }
      })
  }, [])


  return (
    <LikeSongListProvider>
      <UserCredentialContext.Provider value={{ userData, setUserData }} >
        <SearchValueProvider>
          <AccessTokenContext.Provider value={{ accessToken }} >
            <AsideTabProvider>
              <div className="App">
                {
                  showProfile ?
                    <ProfilePicture setShowPhotoCard={setShowProfile} />
                    : ""
                }
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
                      <Route path='artist/:id' element={<ArtistDetail />} />
                      <Route path='podcast/:id' element={<PodcastDetail />} />
                      <Route path='track/:id' element={<TrackPage />} />
                      <Route path='liked' element={<LikedSong />} />
                      <Route path='myArtist' element={<MyArtist/>} />
                    </Route>
                    <Route path='/auth' element={<Auth />}></Route>
                  </Routes>
                </BrowserRouter>
              </div>
            </AsideTabProvider>
          </AccessTokenContext.Provider>
        </SearchValueProvider>
      </UserCredentialContext.Provider>
    </LikeSongListProvider>
  );
}

export default App;
