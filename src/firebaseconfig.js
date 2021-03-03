//configuracion firebase
import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCnXJtMc4aQXW2L76U5fNpMhGmPrsm1q3g",
    authDomain: "react-curso-d64a5.firebaseapp.com",
    projectId: "react-curso-d64a5",
    storageBucket: "react-curso-d64a5.appspot.com",
    messagingSenderId: "625920392692",
    appId: "1:625920392692:web:fd4efda4878e6cffd50da1",
    measurementId: "G-48VZ7M4WDK"
  };
  // Initialize Firebase
  const fire =firebase.initializeApp(firebaseConfig);  
  const auth= fire.auth()

  export {auth}
  
