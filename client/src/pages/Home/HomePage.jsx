// src/pages/Home/HomePage.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../features/products/productsSlice';
import Navbar from '../../components/Home/Navbar';
import Banner from '../../components/Home/Banner';
import ProductCard from '../../components/Home/ProductCard';
import styles from './HomePage.module.scss';

const HomePage = () => {
    const dispatch = useDispatch();
    const { products, status } = useSelector((state) => state.products);

    console.log(products);
    

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <div className={styles.home}>
            <Navbar />
            <Banner />
            <h2 className={styles.heading}>Featured Products</h2>
            <div className={styles.productGrid}>
                {status === 'loading' ? (
                    <p>Loading...</p>
                ) : (
                    products.map((product) => <ProductCard key={product.id} product={product} />)
                )}
            </div>
        </div>
    );
};

export default HomePage;
