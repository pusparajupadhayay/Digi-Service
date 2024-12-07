// pages/index.js
import React, { useEffect, useState } from 'react';
import { fetchData } from '../lib/api';
import Header from '../components/Header';

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const result = await fetchData('home-data');
      setData(result);
    };
    getData();
  }, []);

  return (
    <div>
      <Header />
      <main>
        <h2>Welcome to the homepage!</h2>
        {data && <p>{data.message}</p>}
      </main>
    </div>
  );
};

export default Home;
