import React, { useContext } from 'react';
import AppContext from '../../../store/app-context';
import styles from './Product.module.css'

const Product = ({prod}) => {

    const context = useContext(AppContext)

    const buyCarpincho = () => {
        if (context.isLoggedIn) {
            alert('Thank you! Your carpincho will arrive soon at your doorstep.')
        } else {
            alert('You must be logged in to buy one of our carpinchitos')
        }
    }

    const deleteCarpincho = ({id, name}) => {
        if (context.isLoggedIn) {
            const rta = window.confirm(`Are you sure you wish to delete ${name}?`)
            if (rta) {
                context.deleteCarpinchoHandler(id)
            }
        } else {
            alert('WTF? Only logged in members are allowed to do this...')
        }
    }

    return (
        <div className={styles.Product}>
            {context.isLoggedIn ? <button onClick={() => deleteCarpincho(prod)} className={styles.DeleteButton}>X</button> : null}
            <img className={styles.ProductImage} src={prod.image} alt={prod.name} />
            {prod.name}
            <button onClick={buyCarpincho} className={styles.Button}>Comprar</button>
        </div>  
    )
}

export default Product;