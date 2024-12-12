// components/Sidenavbar.js
import React, { useState } from 'react';
import styles from '../styles/Sidebar.module.css';
import Image from "next/image";

const Sidenavbar = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen); // Toggle the sidebar open/closed
    };

    return (
        <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
            <nav className={styles.nav}>
                <ul>
                    <li><a href="/Product">
                        <Image className="rounded-full w-10 h-10 mt-5 ml-7" src="/product.svg"  width={40} height={40} alt="Product" />Product</a></li>
                    <li><a href="/Services">
                        <Image className="rounded-full w-10 h-10 mt-5 ml-7" src="/service.svg"  width={40} height={40} alt="Services" />
                        Services</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidenavbar;

