import {useEffect, Fragment} from "react";
import type { AppProps } from 'next/app'
import Fullpage from '../assets/classes/Fullpage';
import '../assets/fonts/fontawesome/css/all.min.css';
import '../styles/main.scss';
import Header from "../components/Header";
import Footer from "../components/Footer";

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    new Fullpage();
  }, []);
  return(
      <Fragment>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Fragment>
  )
}
export default App
