// pages/index.js
import React, { useEffect, useState } from 'react';
import Header from '../components/Header'; // Importing Header with PascalCase
import Sidenavbar from "../components/Sidenavbar";

import Footer from '../components/Footer';

const Home = () => {
    const [data, setData] = useState(null);

    // Optional: You can add a useEffect here if you want to fetch data on component mount
    useEffect(() => {
        // Placeholder for data fetching logic
        // fetchData().then(response => {
        //   setData(response);
        // });

        // Example data for demonstration purposes:
        setData({ message: "This is a sample message from useEffect." });
    }, []);

    return (
        <div>
           <Header /> {/* Adding the Header component */}
            <main>

            </main>
            <Footer/>
        </div>

    );
};

export default Home;
