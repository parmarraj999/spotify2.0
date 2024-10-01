import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [track,setTrack] = useState([]); 

 const getTrack = async () => {
  let response =  await fetch("https://v1.nocodeapi.com/rajparmar/spotify/MMpjJQOImNiQcdII/search?q=hot&type=track")
  const data = await response.json();
  console.log(data)
  setTrack(data.tracks.items)
 }

 useEffect(()=>{
  // getTrack();
 },[])

//  console.log(track)

  return (
    <div className="App">
      <div className='nav_app' >

      </div>
      <div className='main_app'>

      </div>
    </div>
  );
}

export default App;
