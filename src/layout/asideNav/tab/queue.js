import React, { useContext, useEffect, useState } from 'react'
import '../asideNav.css';
import { AsideTabContext } from '../../../provider/AsideTabProvider';

function Queue() {

  const { setCurrentTab, setShowTab } = useContext(AsideTabContext)

  const handleCloseTab = () => {
    setCurrentTab("")
    setShowTab(false)
  }

  const [myObjects, setMyObjects] = useState([]);

  useEffect(() => {
    const storedObjects = localStorage.getItem('my-objects');
    if (storedObjects) {
      setMyObjects(JSON.parse(storedObjects));
    }
  }, []);
  console.log(myObjects)

  return (
    <div className='queue_container' >
      <div className='tab_headers' >
        <h4>Next Song</h4>
        <div className='tab_header_icon' >
          <div onClick={handleCloseTab} >
            <svg style={{ width: "20px", height: '20px ', color: 'white' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z"></path></svg>
          </div>
        </div>
      </div>
      <div>
        <div className='queue_song_list' >
          <div className='queue_song_item' ></div>
        </div>
      </div>
    </div>
  )
}

export default Queue