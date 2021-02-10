import React from 'react';
import Head from 'next/head';
import Header from '../components/Organisms/Header';
import HeaderMovie from '../components/Molecules/HeaderMovie';
import styles from './index.module.scss';

const Home = () => (
  <>
    <Head>
      <title>Next App</title>
    </Head>
    <Header />

    <main className={styles.hoge}>
      <HeaderMovie />

      <div className={styles.secondary}>
        <h2 className={styles.secondary__hdg}>
          <span className={styles.secondary__hdgSub}>The first candy my grandfather gave me,</span>
          it was Werthers Original and I was 4 years old
        </h2>
      </div>
    </main>
  </>
);

export default Home;
