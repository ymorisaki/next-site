import React from 'react';
import Image from 'next/image';
import styles from './Media.module.scss';

const Media = ({
  src, width, height, alt,
} : {
  src: string,
  width: number,
  height: number,
  alt: string
}) => (
  <div className={styles.media}>
    <Image src={src} width={width} height={height} alt={alt} />
  </div>
);

export default Media;
