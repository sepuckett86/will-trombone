import React from 'react';
import styles from './Footer.css';

function Footer() {
  return (
    <footer className={styles.Footer}>
      <div className={styles.left}>Other</div>
      <div className={styles.right}>Social Media Here</div>
      <div>
        © Copyright 2019 | Will Martin
        <div className={styles.updated}>Website Created by Susan Puckett</div>
      </div> 
    </footer>
  );
}

export default Footer;
