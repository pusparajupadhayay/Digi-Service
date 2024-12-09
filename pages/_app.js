// pages/_app.js
import { Provider } from 'react-redux';
import { store } from '../store/store';
import '../styles/globals.css';
import React from "react";
import Sidenavbar from "../components/Sidenavbar";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>

        <Sidenavbar />  {/* Sidebar component is used here */}
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
