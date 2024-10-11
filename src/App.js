import axios from 'axios';
import './App.css';
import './utility.css'
import { useEffect, useState } from 'react';
import Nav from './layout/nav/nav';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Layout from './layout/layout';
import Home from './page/home/home';
import Discover from './page/discover/discover';
import Search from './page/search/search';
import Library from './page/library/library';
import AsideTabProvider from './provider/AsideTabProvider';
import PlaylistDetail from './page/playlistDetail/playlistDetail';

function App() {

  const [track, setTrack] = useState([]);

  const getTrack = async () => {
    let response = await fetch("https://v1.nocodeapi.com/rajparmar/spotify/MMpjJQOImNiQcdII/search?q=hot&type=track")
    const data = await response.json();
    console.log(data)
    setTrack(data.tracks.items)
  }

  useEffect(() => {
    // getTrack();
  }, [])


  return (
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
              <Route path='playlist' element={<PlaylistDetail />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </AsideTabProvider>
  );
}

export default App;
