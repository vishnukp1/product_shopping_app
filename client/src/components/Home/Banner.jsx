// src/components/Home/Banner.js
import React from 'react';
import styles from './Banner.module.scss';

const Banner = () => {
    return (
        <section className={styles.banner}>
            <div className={styles.bannerContent}>
                <h2>iPhone 14 Series</h2>
                <p>Up to 10% off Voucher</p>
                <button className={styles.shopNow}>Shop Now</button>
            </div>
        </section>
    );
};

export default Banner;
