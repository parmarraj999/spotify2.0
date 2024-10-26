import React, { useEffect, useState } from 'react'
import { auth } from '../../firbeaseConfig/firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function LogIn({current, setCurrent}) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState();
  const [error,setError] = useState('')
  const navigate = useNavigate();

  const handleLogIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password)
      .then(user=>{
        console.log(user)
        navigate("/")
        localStorage.setItem("isLogIn", true)
        localStorage.setItem("userId", user.user.uid)
      })
      // Handle successful login (e.g., redirect to dashboard)   
 
    } catch (error) {
      setError(error.message);
      console.log(error)
    }
  };

  return (
    <div className='signup_page_container' >
    <div>logo</div>
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
            <input placeholder='Password' type='password' onChange={(e) => setPassword(e.target.value)}/>
        </div> 
        <div className='create_btn_account' onClick={handleLogIn} >Log In</div>
        <h6>Have Account ? <span onClick={()=>setCurrent('signup')}>Create Account</span></h6>
     </div>
</div> 
  )
}

export default LogIn