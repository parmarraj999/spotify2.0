import React, { useContext, useEffect, useState } from 'react'
import { auth, db } from '../../firbeaseConfig/firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { UserCredentialContext } from '../../provider/UserCredentialProvider';
import { doc, getDoc } from 'firebase/firestore';

function LogIn({ current, setCurrent }) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState();
  const [error, setError] = useState('')
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId")
  const {userData, setUserData, fetchData} = useContext(UserCredentialContext);

  const handleLogIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password)
        .then(async (user) => {
          console.log(user)
          navigate("/")
          localStorage.setItem("isLogIn", true)
          localStorage.setItem("userId", user.user.uid)
        })
        .then(()=>{
          fetchData();
        })
    } catch (error) {
      setError(error.message);
      console.log(error)
    }
  };

  return (
    <div className='signup_page_container' >
      <div style={{fontSize:'3rem',color:'#1ED760',fontWeight:'700',fontFamily:'sans-serif'}}>Harryfy</div>
      <h2>Log In To Spotify</h2>
      {/* <button>
        <img style={{width:"25px"}} src='../../../../image/google-icon.png'/>
         Continue With Google</button>
     <div className='line' ></div> */}
      <div className='signup_form_container' >
        <div className='form_input_items' >
          <h4>Email</h4>
          <input placeholder='Email' type='email' onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='form_input_items' >
          <h4>Password</h4>
          <input placeholder='Password' type='password' onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className='create_btn_account' onClick={handleLogIn} >Log In</div>
        <h6>Have Account ? <span onClick={() => setCurrent('signup')}>Create Account</span></h6>
      </div>
    </div>
  )
}

export default LogIn