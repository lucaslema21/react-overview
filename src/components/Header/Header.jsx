import React, { useContext } from 'react';
import AppContext from '../../store/app-context';
import styles from './Header.module.css'

const Header = () => {
    const context = useContext(AppContext)

    const toggleLoginHandler = () => {
        context.setIsLoggedIn(!context.isLoggedIn)
    }


    return (
        <header className={styles.header}>
            <div className={styles.headerContent}>
                <h1>Carpincho Store</h1>
                <button className={styles.loginButton} onClick={toggleLoginHandler}>{context.isLoggedIn ? 'Logout' : 'Login'}</button>
            </div>
        </header>
    )
}

export default Header