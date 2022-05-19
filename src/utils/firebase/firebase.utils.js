import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
    } from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'; 

const firebaseConfig = {
    apiKey: "AIzaSyDCdLbyS2tZhskfYShzRmp63jrTS_vBwQ0",
    authDomain: "crwn-clothing-db-1590e.firebaseapp.com",
    projectId: "crwn-clothing-db-1590e",
    storageBucket: "crwn-clothing-db-1590e.appspot.com",
    messagingSenderId: "74582033594",
    appId: "1:74582033594:web:e467665893b9e096d3ae83"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  
  provider.setCustomParameters({
      prompt: 'select_account'
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

  export const db = getFirestore();
 
  export const createUserDocumentFromAuth = async(userAuth) => {
      const userDocRef = doc(db, 'users', userAuth.uid)
      console.log(userDocRef)

      const userSnapshot = await getDoc(userDocRef);
      console.log(userSnapshot);
      console.log(userSnapshot.exists());

      // if user data exists
    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }
    // create/set the document with the data from userAuth in my collection
    return userDocRef;
      // return userDocRef
  }