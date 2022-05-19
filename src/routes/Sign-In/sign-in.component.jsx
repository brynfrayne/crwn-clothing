import React from 'react';
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

export default function SignIn() {
  const logGoogleUser = async () => {
      const { user } = await signInWithGooglePopup();
      const userDocRef = createUserDocumentFromAuth(user)
  }
    return (
    <div>
        <h1>SIGN IN PAGE</h1>
        <button onClick={logGoogleUser}>Sign in with Google popup</button>
    </div>
  )
}
