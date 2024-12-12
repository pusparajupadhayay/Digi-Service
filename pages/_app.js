// pages/_app.js
import { Provider } from 'react-redux';
import { store } from '../store/store';
import '../styles/globals.css';
import React from "react";
import Sidenavbar from "../components/Sidenavbar";
import Header from "../components/header";

function MyApp({ Component, pageProps }) {
  return (
      <Provider store={store}>

          <div>
              <Header/> {/* Adding the Header component */}
              <Sidenavbar />

              <main>
                  <Component {...pageProps} />
              </main>

          </div>


      </Provider>
  );
}

export default MyApp;
