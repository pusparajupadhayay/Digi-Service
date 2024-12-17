import React, { useState } from 'react';
import styles from '../styles/header.module.css';  // Import the CSS Module

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={styles.headerContainer}>
            <img src="/logo.png" alt="Logo" className={styles.logo} />
            <button className={styles.navToggle} onClick={toggleMenu}>
                ☰
            </button>
            <ul className={`${styles.navList} ${isMenuOpen ? styles.active : ''}`}>

                <li className={styles.navItem}><a href="/"><img src="/home.png" alt="Home"
                                                                style={{width: '20px', marginRight: '8px',display:'inline-block'}}/> Home</a>
                </li>

                <li className={styles.navItem}><a href="/Services"><img src="/box.png" alt="Home"
                                                                style={{
                                                                    width: '20px',
                                                                    marginRight: '8px',
                                                                    display: 'inline-block'
                                                                }}/> Services</a></li>
                <li className={styles.navItem}><a href="/Services"><img src="/contact.svg" alt="Home"
                                                                        style={{
                                                                            width: '20px',
                                                                            marginRight: '8px',
                                                                            display: 'inline-block'
                                                                        }}/> Contact</a></li>
            </ul>
        </header>
    );
};

const App = () => {
    return (
        <div>
            <Header/>
            <main className={styles.mainContent}>
                {/* Main content goes here */}
            </main>
        </div>
    );
};

export default App;
