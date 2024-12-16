// components/Sidenavbar.js
import React, { useState } from 'react';
import styles from '../styles/Sidebar.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Sidenavbar = () => {
    const [isOpen, setIsOpen] = useState(false); // Start with the sidebar closed

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    // Close the sidebar when a link is clicked
    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
            <button onClick={toggleSidebar} className={styles.toggleButton} aria-expanded={isOpen ? "true" : "false"}>
                {/* Hamburger Icon for mobile */}
                <span className={styles.hamburgerIcon}></span>
            </button>
            <nav className={styles.nav}>
                <ul>
                    <li>
                        <Link href="/Product" onClick={handleLinkClick}>
                            <Image className="rounded-full w-10 h-10 mt-5 ml-7" src="/product.svg" width={40} height={40} alt="Product" />
                            Product
                        </Link>
                    </li>
                    <li>
                        <Link href="/" onClick={handleLinkClick}>
                            <Image className="rounded-full w-10 h-10 mt-5 ml-7" src="/service.svg" width={40} height={40} alt="Services" />
                            Services
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidenavbar;
