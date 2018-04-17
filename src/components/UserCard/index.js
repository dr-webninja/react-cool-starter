/* @flow */

import React from 'react';

import styles from './styles.scss';

import small from '../../app/assets/small-image.png';
import medium from '../../app/assets/medium-image.jpg';
import large from '../../app/assets/large-image.png';

type Props = { info: Object };

export default ({ info }: Props) => (
  <div className={styles.UserCard}>
    <h4>User Card</h4>
    <img src={small} alt="Logo" role="presentation" className={styles.image} />
    <img src={medium} alt="Logo" role="presentation" className={styles.image} />
    <img src={large} alt="Logo" role="presentation" className={styles.image} />
    <p>OLA</p>
    <ul>
      <li>Name: {info.name}</li>
      <li>Phone: {info.phone}</li>
      <li>Email: {info.email}</li>
      <li>Website: {info.website}</li>
    </ul>
  </div>
);
