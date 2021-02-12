import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <ul className={styles.footer__links}>
      <li>
        <Link href="/">About</Link>
        <ul className={`${styles.footer__links} ${styles.footer__childLinks}`}>
          <li>
            <Link href="/">Hoge</Link>
          </li>
          <li>
            <Link href="/">PiyoPiyo</Link>
          </li>
          <li>
            <Link href="/">FugaFugaFugaFuga</Link>
          </li>
          <li>
            <Link href="/">FugaFuga</Link>
          </li>
          <li>
            <Link href="/">Hoge</Link>
          </li>
          <li>
            <Link href="/">PiyoPiyoPiyo</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link href="/">Pages</Link>
        <ul className={`${styles.footer__links} ${styles.footer__childLinks}`}>
          <li>
            <Link href="/">Hoge</Link>
          </li>
          <li>
            <Link href="/">PiyoPiyo</Link>
          </li>
          <li>
            <Link href="/">Fuga</Link>
          </li>
          <li>
            <Link href="/">FugaFuga</Link>
          </li>
          <li>
            <Link href="/">Piyo</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link href="/">Products</Link>
        <ul className={`${styles.footer__links} ${styles.footer__childLinks}`}>
          <li>
            <Link href="/">Hoge</Link>
          </li>
          <li>
            <Link href="/">PiyoPiyo</Link>
          </li>
          <li>
            <Link href="/">FugaFugaFugaFuga</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link href="/">Support</Link>
        <ul className={`${styles.footer__links} ${styles.footer__childLinks}`}>
          <li>
            <Link href="/">Hoge</Link>
          </li>
          <li>
            <Link href="/">PiyoPiyo</Link>
          </li>
          <li>
            <Link href="/">FugaFugaFuga</Link>
          </li>
          <li>
            <Link href="/">FugaFuga</Link>
          </li>
        </ul>
      </li>
    </ul>

    <p className={styles.copy}>
      <small>
        <a href="https://github.com/ymorisaki" target="_blank" rel="noreferrer">ymorisaki</a>
        {' '}
        ALL rights reserved.
      </small>
    </p>
  </footer>
);

export default Footer;
