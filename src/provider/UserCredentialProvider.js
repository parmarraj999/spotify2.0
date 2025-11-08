import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";

import { createContext } from "react";
import { db } from "../firbeaseConfig/firebaseConfig";


export const UserCredentialContext = createContext({});

const UserCredentialProvider = ({ children }) => {

    const CLIENT_ID = 'f5c193cd77ec4b80983881a119bbe2a2';
    const CLIENT_SECRET = "811dba94023d42fc94c5b02c56ecdcd0";

    const [accessToken, setAccessToken] = useState("");
    const [userData, setUserData] = useState([])
    console.log(userData)

    const userId = localStorage.getItem("userId")
    console.log(userId)

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

    const fetchData = async () => {
        console.log('getting data ')
        if(userId){
            const userDocRef = doc(db, userId, "user-credentials");
            const userDocSnapshot = await getDoc(userDocRef);
            setUserData(userDocSnapshot.data())
        }
    };

    useEffect(() => {
        fetchData();
    }, [])
    
    useEffect(() => {
        fetchData();
    }, [userId])

    return (
        <UserCredentialContext.Provider value={{ userData, setUserData, fetchData , accessToken}}>
            {children}
        </UserCredentialContext.Provider>
    )
}

export default UserCredentialProvider;

// export const UserCredentialContext = createContext();