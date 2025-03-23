// src/components/Home/ProductCard.js
import React from 'react';
import styles from './ProductCard.module.scss';

const ProductCard = ({ product }) => {
    return (
        <div className={styles.card}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button>Add to Cart</button>
        </div>
    );
};

export default ProductCard;
