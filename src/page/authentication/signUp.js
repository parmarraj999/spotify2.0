import React, { useState } from 'react'
import { auth, db } from '../../firbeaseConfig/firebaseConfig';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';

function SignUp({ current, setCurrent }) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState();

    const navigate = useNavigate();

    // const playlistRef = collection(db, `${user.uid + name.replace(/\s+/g, '')}`, 'user-data');


    const handleSignUp = async () => {
        console.log(name, email, password)
        await createUserWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
                const user = userCredential.user;
                const data = {
                    name: name,
                    email: email,
                    profilePicture: user.photoURL || "../../../../image/default.png",
                }
                await setDoc(doc(db, user.uid, "user-credentials"), data)
                    .then(() => {
                        console.log('successfull')
                        localStorage.setItem("isLogIn", true)
                        localStorage.setItem("userId", user.uid)
                    })
                if (user) {
                    navigate('/')
                }
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
            });
        await updateProfile(auth.currentUser, { displayName: name })
    }


    return (
        <div className='signup_page_container' >
            <div>logo</div>
            <h2>Welcome To Spotify</h2>
            {/* <button onClick={handleGoogleSign}>
                <img style={{ width: "25px" }} src='../../../../image/google-icon.png' />
                Continue With Google</button>
            <div className='line' ></div> */}
            <div className='signup_form_container' >
                <div className='form_input_items' >
                    <h4>Name</h4>
                    <input onChange={(e) => setName(e.target.value)} placeholder='Full Name' type='text' />
                </div>
                <div className='form_input_items' >
                    <h4>Email</h4>
                    <input onChange={(e) => setEmail(e.target.value)} placeholder='Email' type='email' />
                </div>
                <div className='form_input_items' >
                    <h4>Password</h4>
                    <input onChange={(e) => setPassword(e.target.value)} placeholder='Password' type='password' />
                </div>
                <div className='create_btn_account' onClick={handleSignUp} oncli>Create Account</div>
                <h6>Have Account ? <span onClick={() => setCurrent('login')}>Log In</span></h6>
            </div>
        </div>
    )
}

export default SignUp