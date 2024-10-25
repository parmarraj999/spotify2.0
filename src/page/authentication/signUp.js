import React, { useState } from 'react'
import { auth } from '../../firbeaseConfig/firebaseConfig';
import { createUserWithEmailAndPassword, getRedirectResult, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

function SignUp({ current, setCurrent }) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState();

    const handleSignUp = () => {
        console.log(name, email, password)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
            });
    }

    const handleGoogleSign = () => {
        console.log('ssldfl')
        getRedirectResult(auth)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access Google APIs.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
      
          // The signed-in user info.
          const user = result.user;
          // IdP data available using getAdditionalUserInfo(result)
          // ...
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
        //   const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });
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