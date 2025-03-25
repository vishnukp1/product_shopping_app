import React from 'react';
import styles from './Banner.module.scss';

const Banner = () => {
    return (
        <section className={styles.banner}>
            <div className={styles.bannerContent}>
              
                <button className={styles.shopNow}>Shop Now</button>
            </div>
        </section>
    );
};

export default Banner;
