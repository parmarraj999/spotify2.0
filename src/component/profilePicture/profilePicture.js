import React, { useState } from 'react'
import './profilePicture.css'
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '../../firbeaseConfig/firebaseConfig'

function ProfilePicture({ setShowPhotoCard }) {

    const [choosePhoto,setChoosePhoto] = useState("");

    const handleClose = () => {
        setShowPhotoCard(false)
    }

    const images = [
        {
            imgSrc: '../../../../image/profile-1.jpeg'
        },
        {
            imgSrc: '../../../../image/profile-2.jpeg'
        },
        {
            imgSrc: '../../../../image/profile-3.jpeg'
        },
        {
            imgSrc: '../../../../image/profile-4.jpeg'
        },
        {
            imgSrc: '../../../../image/profile-5.jpeg'
        },
        {
            imgSrc: '../../../../image/profile-6.jpeg'
        },
    ]

    const addProfilePicture = async() => {
        const userId = localStorage.getItem('userId');
        const docRef = doc(db, userId, 'user-credentials');
        await updateDoc(docRef,{
            profilePicture : choosePhoto
        })
        .then(()=>{
            console.log("updated")
            handleClose();
        })
    }

    return (
        <div className='profile_picture_container' >
            <div className='profile_picture_card' >
                <h3>Select Profile</h3>
                <div className='profile_picture_wrapper' >
                    {
                        images?.map((data) => {
                            return (
                                <div onClick={()=>setChoosePhoto(data.imgSrc)} className='profile_pictures' >
                                    <img style={choosePhoto === data.imgSrc ? {border:"4px solid #1ed760"} : {}} src={data.imgSrc} />
                                </div>
                            )
                        })
                    }
                </div>
                <div style={{display:'flex',gap:"1rem"}} >  
                    <button className='upload_btn' onClick={addProfilePicture} >Upload</button>
                    <button className='cancel_btn' onClick={handleClose}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default ProfilePicture