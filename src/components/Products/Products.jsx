import React from 'react';
import Product from './Product/Product';
import styles from './Products.module.css'

const Products = ({prods}) => {
    return (
        <div className={styles.products}>
            {prods.map(prod => (
                <Product key={prod.id} prod={prod} />
            ))}
        </div>
    )
}

export default Products;