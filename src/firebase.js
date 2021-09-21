import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDsiIePr_XpvER8DmdMqjqMkP8Ba6eT8G8",
    authDomain: "dans-disney-clone.firebaseapp.com",
    projectId: "dans-disney-clone",
    storageBucket: "dans-disney-clone.appspot.com",
    messagingSenderId: "647705940523",
    appId: "1:647705940523:web:bd9ec614f762825e52106e",
    measurementId: "G-6HMDNVJ626"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage };
  export default db;