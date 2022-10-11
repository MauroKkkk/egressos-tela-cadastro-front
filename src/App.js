import './App.css';
import React from 'react';
import NavMenu from './components/NavBar';
import Login from './components/Login';
import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, OAuthProvider, FacebookAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import fire from './components/fire'


function App() {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);

  const auth = getAuth();
  const provider = new OAuthProvider('microsoft.com');
  provider.addScope('mail.read');
const microsoft  = () => {

  signInWithPopup(auth, provider)
  .then((result) => {
    const credential = OAuthProvider.credentialFromResult(result);
    setEmail('ggg')
    const accessToken = credential.accessToken;
    const idToken = credential.idToken;
  })
  .catch((error) => {
    alert(error.code)
  });
}
  const facebook = () => {

    signInWithPopup(auth, new FacebookAuthProvider())
      .then((res) => console.log(res))
      .catch((err) => setEmail(err.code))

  }

  const google = () => {

    signInWithPopup(auth, new GoogleAuthProvider())
      .then((res) => console.log(res))
      .catch((err) =>setEmail(err.code))

  }



  const clearInputs = () => {
    setEmail('');
    setPassword('');
  }

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  }

  const handleLogin = () => {
    clearErrors();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      clearInputs()
      clearErrors();
      setUser(userCredential.user);
      // ...
    })
    .catch((error) => {

      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage, errorCode)
      clearInputs()
      clearErrors();
    });
  }
  const handleSingup = () => {
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    setUser(userCredential.user);
    clearInputs()
    clearErrors();
    // ...
  })
  .catch((error) => {

    setUser('')
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage, errorCode)
    clearInputs()
    clearErrors();
    // ..
  });
  }
  const handleLogout = () => {
    signOut(auth).then(() => {
      setUser('')
      clearInputs()
      clearErrors();
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage, errorCode)
      clearInputs()
      clearErrors();
    });
  }

  const authListener = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUser(uid)
        clearInputs()
        clearErrors();

      } else {
        setUser('')
      }
    });
  }

  useEffect(() =>{
    authListener();
  })


  return (
    <>
    {user !== ''? (
      <Hero email={email}  handleLogout={handleLogout}/>
    ) : (
      <>
      <NavMenu/>
      <Login
        email={email} 
        setEmail={setEmail} 
        password={password} 
        setPassword={setPassword} 
        handleLogin={handleLogin}  
        handleSingup={handleSingup} 
        hasAccount={hasAccount} 
        setHasAccount={setHasAccount} 
        emailError={emailError} 
        passwordError={passwordError}
        google={google}
        facebook={facebook}
        microsoft={microsoft}
      />
      </>
    )}





    </>
  );
}
export default App;
