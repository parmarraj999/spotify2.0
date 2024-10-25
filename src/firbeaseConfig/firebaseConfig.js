import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCeIXcXMpKa--eFdonu7rq_9RRn3vZ-g7k",
  authDomain: "harryfy-a5bca.firebaseapp.com",
  projectId: "harryfy-a5bca",
  storageBucket: "harryfy-a5bca.appspot.com",
  messagingSenderId: "760488060301",
  appId: "1:760488060301:web:97bdbb41d89a97735089c4",
  measurementId: "G-VS9KMFHPY0"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const analytics = getAnalytics(app);

export { auth };