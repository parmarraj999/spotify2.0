import React, { useContext, useState } from 'react'
import '../asideNav.css'
import { AsideTabContext } from '../../../provider/AsideTabProvider'
import { addDoc, collection, doc, getDoc, getDocs } from 'firebase/firestore'
import { db } from '../../../firbeaseConfig/firebaseConfig'

function FriendNav() {

  const { setShowTab, setCurrentTab } = useContext(AsideTabContext)
  const userId = window.localStorage.getItem("userId")

  const [data,setData] = useState([])

  // Demo friends data (used for UI/demo purposes)
  const [demoFriends] = useState([
    { id: 'f1', name: 'Alex Turner', activity: 'Listening to: "Do I Wanna Know?" by Arctic Monkeys', avatar: 'AT' },
    { id: 'f2', name: 'Sana Park', activity: 'Added 5 songs to "Chill Vibes"', avatar: 'SP' },
    { id: 'f3', name: 'Michael B', activity: 'Listening to: "Blinding Lights" by The Weeknd', avatar: 'MB' },
    { id: 'f4', name: 'Priya K', activity: 'Liked: "Sunflower" by Post Malone', avatar: 'PK' },
    { id: 'f5', name: 'Daniel', activity: 'Started listening to "Discover Weekly"', avatar: 'D' },
  ])

  const handleCloseTab = () => {
    setShowTab(false)
    setCurrentTab("")
  }

  const dataSample = {
    name : 'reaj s',
    email:" a;lsdjf;s"
  }

  const addData = () => {
    console.log('click');
    const collectionRef = doc(db, userId, "liked-songs")
    const nesCollection = collection(collectionRef, "liked-song-list")
    addDoc(nesCollection, dataSample)
  }
  const getData = async() => {
    console.log('click');
    const collectionRef = doc(db, userId, "liked-songs")
    const nesCollection = collection(collectionRef, "liked-song-list")
    const data = await getDocs(nesCollection)
    console.log(data.docs)
    console.log(data.docs.map(data=>{
      console.log({...data.data()})
    }))
    // setData(data?.docs?.map((doc)=>({...doc.data(), id:doc.id})))
  }

  return (
    <div className='friend_nav_container' >
        <div className='friend_nav_header' >
            <h4>Friends Activity</h4>
            <div className='friend_nav_icon'>
                <div>
                <svg style={{width:"20px",height:'20px ',color:'white'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M14 14.252V16.3414C13.3744 16.1203 12.7013 16 12 16C8.68629 16 6 18.6863 6 22H4C4 17.5817 7.58172 14 12 14C12.6906 14 13.3608 14.0875 14 14.252ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11ZM18 17V14H20V17H23V19H20V22H18V19H15V17H18Z"></path></svg>
                </div>
                <div onClick={handleCloseTab} > 
                <svg style={{width:"20px",height:'20px ',color:'white'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z"></path></svg>
                </div>
            </div>
        </div>
        {/* Demo friends list */}
        <div className="friend_list" style={{marginTop: '1rem', overflowY: 'auto', maxHeight: '320px'}}>
          {demoFriends.map(friend => (
            <div key={friend.id} className="friend_item" style={{display:'flex',alignItems:'center',gap:'0.75rem',padding:'0.6rem 0',borderBottom:'1px solid rgba(255,255,255,0.04)'}}>
              <div className="friend_avatar" style={{width:44,height:44,background:'#1db954',borderRadius:8,display:'flex',alignItems:'center',justifyContent:'center',color:'#fff',fontWeight:600}}>{friend.avatar}</div>
              <div style={{minWidth:0}}>
                <div style={{fontSize:14,color:'#fff',whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>{friend.name}</div>
                <div style={{fontSize:12,color:'#b3b3b3',overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap',maxWidth:'28rem'}}>{friend.activity}</div>
              </div>
            </div>
          ))}
        </div>

        {/* <div style={{marginTop:'1rem',display:'flex',gap:'0.5rem'}}>
          <button onClick={addData} >Add data</button>
          <button onClick={getData} >Get data</button>
        </div> */}
    </div>
  )
}

export default FriendNav