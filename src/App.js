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
import ArtistListProvider from './provider/ArtistListProvider';
import MyPlaylist from './page/myPlaylist/myPlaylist';
import PlaylistPage from './page/playlistDetail/playlistPage';
import MyPlaylistDataProvider from './provider/MyPlaylistDataProvider';
import AllPlaylistDataProvider from './provider/AllPlaylistDataProvider';
import MyAlbum from './page/myAlbum/myAlbum';
import MyAlbumListProvider from './provider/MyAlbumListProvider';
import PlayerDataProvider from './provider/PlayerDataProvider';

function App() {

 

  const [showProfile, setShowProfile] = useState(false)
  const userId = localStorage.getItem("userId")

  const { userData, accessToken ,fetchData } = useContext(UserCredentialContext)

  useEffect(() => {
    if (userData?.profilePicture === "../../../../image/default.png") {
      setShowProfile(true)
    }
  }, [userData])


  return (
    <PlayerDataProvider>
      <MyAlbumListProvider>
        <AllPlaylistDataProvider>
          <MyPlaylistDataProvider>
            <LikeSongListProvider>
              <ArtistListProvider>
                <UserCredentialProvider >
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
                                <Route path='myArtist' element={<MyArtist />} />
                                <Route path='myPlaylists' element={<MyPlaylist />} />
                                <Route path='myPlaylists/:id' element={<PlaylistPage />} />
                                <Route path='myAlbum' element={<MyAlbum />} />
                              </Route>
                              <Route path='/auth' element={<Auth />}></Route>
                            </Routes>
                          </BrowserRouter>
                        </div>
                      </AsideTabProvider>
                    </AccessTokenContext.Provider>
                  </SearchValueProvider>
                </UserCredentialProvider>
              </ArtistListProvider>
            </LikeSongListProvider>
          </MyPlaylistDataProvider>
        </AllPlaylistDataProvider>
      </MyAlbumListProvider>
    </PlayerDataProvider>
  );
}

export default App;
