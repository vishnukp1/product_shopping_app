import React, { useState } from "react";
import styles from "./Navbar.module.scss";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <h1 className={styles.logo}>Exclusive</h1>

           

       
            <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
                <li onClick={() => setMenuOpen(false)}>Home</li>
                <li onClick={() => setMenuOpen(false)}>Contact</li>
                <li onClick={() => setMenuOpen(false)}>About</li>
                <li onClick={() => setMenuOpen(false)}>Sign Up</li>
            </ul>

       
            <input type="text" className={styles.searchBar} placeholder="Search products..." />
            <div className={styles.menuIcon} onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? "✖" : "☰"}
            </div>
        </nav>
    );
};

export default Navbar;
