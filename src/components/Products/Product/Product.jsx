import React from 'react';
import styles from './Product.module.css'

const Product = ({prod}) => {
    return (
        <div className={styles.Product}>
            <img className={styles.ProductImage} src={prod.image} alt={prod.name} />
            {prod.name}
            <button className={styles.Button}>Comprar</button>
        </div>
    )
}

export default Product;