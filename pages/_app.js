import '../styles/globals.css'
import Navbar from '../components/Nav';
import { Toaster } from 'react-hot-toast';
import { UserContext } from '../lib/context';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <UserContext.Provider value={{ user: {}, username: 'brahh-nin'}}>
          <Navbar />
          <Component {...pageProps} />
          <Toaster />
      </UserContext.Provider>
    </>
  ) 
}

export default MyApp
