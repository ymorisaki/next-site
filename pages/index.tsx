import React from 'react';
import Head from 'next/head';
import Header from '../components/Organisms/Header';
import HeaderMovie from '../components/Molecules/HeaderMovie';

const Home = () => (
  <>
    <Head>
      <title>Next App</title>
    </Head>
    <Header />

    <main>
      <HeaderMovie />
    </main>
  </>
);

export default Home;
