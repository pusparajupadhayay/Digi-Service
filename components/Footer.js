import React from 'react';
import styles from '../styles/Footer.module.css'; // Import the CSS module for styling

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <p>&copy; 2024 My Website. All rights reserved.</p>
            </div>
            <div className={styles.redBar}></div>
        </footer>
    );
};

export default Footer;
