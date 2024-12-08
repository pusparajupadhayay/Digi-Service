// components/Sidenavbar.js
import React, { useState } from 'react';
import styles from '../styles/Sidebar.module.css'; // Import the CSS module

const Sidenavbar = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen); // Toggle the sidebar open/closed
    };

    return (
        <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
            <div className={styles.toggleButton} onClick={toggleSidebar}>
                {isOpen ? 'Close' : 'Open'} Sidebar
            </div>
            <nav className={styles.nav}>
                <ul>
                    <li><a href="/Product">Product</a></li>
                    <li><a href="/Services">Services</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidenavbar;

