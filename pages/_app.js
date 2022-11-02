import "../styles/globals.css";
import Navbar from "../components/Nav";
import { Toaster } from "react-hot-toast";
import { UserContext } from "../lib/context";

import {useState, useEffect} from 'react';
import {useAuthState} from 'react-firebase-hooks/auth'

function MyApp({ Component, pageProps }) {

  const [user] = useAuthState(auth);
  const [username, setUserName] = useState(null)

  useEffect(() => {
    // turn off realtime  subscription
    let unsubscribe;

    if(user) {
      const ref = firestore.collection('users').doc(user.uid);
      unsubscribe = ref.onSnapshot((doc) => {
        setUserName(doc.data()?.username)
      })
    } else {
      setUserName(null)
    }

  },[user])
  

  return (
    <>
      <UserContext.Provider value={{ user, username }}>
        <Navbar />
        <Component {...pageProps} />
        <Toaster />
      </UserContext.Provider>
    </>
  );
}

export default MyApp;
