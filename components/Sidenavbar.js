import React, { useState } from 'react';
import styles from './Sidebar.module.css';

const Sidenavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
            <div className={styles.toggleButton} onClick={toggleSidebar}>
                {isOpen ? 'Close' : 'Open'} Sidebar
            </div>
            <nav className={styles.nav}>
                <ul>
                    <li><a href="/Product">Product</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidenavbar;
