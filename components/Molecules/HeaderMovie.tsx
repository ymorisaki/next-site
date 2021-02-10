import React from 'react';
import styles from './HeaderMovie.module.scss';

const HeaderMovie = () => (
  <div className={styles.movie}>
    <div className={styles.movie__content}>
      <p className={styles.movie__lede}>
        Somehow cool and slogan
      </p>

      <p className={styles.movie__subLede}>
        <span className="block">It was just Karinto,</span>
        <span className="block">too ephemeral and meaningless</span>
        <span className="block">A phantom taste that cannot be tasted just once.</span>
      </p>

      <button className={styles.movie__btn} type="button">Watch Video</button>
    </div>

    <video className={styles.movie__video} autoPlay muted loop>
      <source src="/movie/movie.mp4" type="video/mp4" />
    </video>
  </div>
);

export default HeaderMovie;
