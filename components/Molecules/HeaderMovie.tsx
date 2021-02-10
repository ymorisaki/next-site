import React, { useRef, useEffect } from 'react';
import styles from './HeaderMovie.module.scss';
import HeaderMovieModal from './HeaderMovieModal';

const HeaderMovie = () => {
  const pEl = useRef(null);

  const loadedAnimation = (target: HTMLElement | null) => {
    if (!target) {
      throw new Error('対象の要素が存在しない');
    }

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        const targets = entry.target.querySelectorAll('span');
        let count = 0;

        const timer = () => {
          setTimeout(() => {
            targets[count].style.transform = 'translateY(0%)';
            count += 1;
            if (count < targets.length) {
              timer();
            }
          }, 50);
        };

        timer();
      });
    };

    const observer = new IntersectionObserver(callback);
    observer.observe(target);
  };

  useEffect(() => {
    loadedAnimation(pEl.current);
  }, []);

  return (
    <div className={styles.movie}>
      <div className={styles.movie__content}>
        <p
          className={styles.movie__lede}
          ref={pEl}
        >
          <span>S</span>
          <span>o</span>
          <span>m</span>
          <span>e</span>
          <span>h</span>
          <span>o</span>
          <span>w</span>
          <span>&nbsp;</span>
          <span>c</span>
          <span>o</span>
          <span>o</span>
          <span>l</span>
          <span>&nbsp;</span>
          <span>a</span>
          <span>n</span>
          <span>d</span>
          <span>&nbsp;</span>
          <span>s</span>
          <span>l</span>
          <span>o</span>
          <span>g</span>
          <span>a</span>
          <span>n</span>
        </p>

        <p className={styles.movie__subLede}>
          <span className="block">It was just Karinto,</span>
          <span className="block">too ephemeral and meaningless</span>
          <span className="block">A phantom taste that cannot be tasted just once.</span>
        </p>

        <HeaderMovieModal />
      </div>

      <video className={styles.movie__video} autoPlay muted loop>
        <source src="/movie/movie.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default HeaderMovie;
