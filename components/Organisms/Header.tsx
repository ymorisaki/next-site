import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.scss';

const Header = () => (
  <header className={styles.header}>
    <h1 className={styles.logo}>
      <Link href="/">
        <a href="/">
          <Image src="/images/logo.svg" width={177} height={100} />
        </a>
      </Link>
    </h1>

    <nav className={styles.globalNav}>
      <ul className={styles.globalNav__nav}>
        <li className={styles.globalNav__item}>
          <Link href="/about">about</Link>
        </li>
        <li className={styles.globalNav__item}>
          <Link href="/case">case</Link>
        </li>
        <li className={styles.globalNav__item}>
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            GitHub&nbsp;
            <Image src="/images/blank.svg" width={15} height={15} alt="open new window" />
          </a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
