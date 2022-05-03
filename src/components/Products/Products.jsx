import React, { useContext } from 'react';
import AppContext from '../../store/app-context';
import Product from './Product/Product';
import styles from './Products.module.css'

const Products = () => {

    const context = useContext(AppContext)
    return (
        <div className={styles.products}>
            {context.products.map(prod => (
                <Product key={prod.id} prod={prod} />
            ))}
        </div>
    )
}

export default Products;