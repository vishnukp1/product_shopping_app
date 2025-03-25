import React from 'react';
import styles from './Navbar.module.scss';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <h1 className={styles.logo}>Exclusive</h1>
            <ul className={styles.navLinks}>
                <li>Home</li>
                <li>Contact</li>
                <li>About</li>
                <li>Sign Up</li>
            </ul>
            <input type="text" className={styles.searchBar} placeholder="Search products..." />
        </nav>
    );
};

export default Navbar;
