import { Toaster } from "react-hot-toast";
import Navbar from "../components/Nav";
import { UserContext } from "../lib/context";

import "../styles/globals.css";

import { useUserData } from "../lib/hooks";

function MyApp({ Component, pageProps }) {
  const userData = useUserData();

  return (
    <UserContext.Provider value={userData}>
      <Navbar />
      <Component {...pageProps} />
      <Toaster />
    </UserContext.Provider>
  );
}

export default MyApp;
