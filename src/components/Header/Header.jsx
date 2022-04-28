import React from 'react';
import styles from './Header.module.css'

const Header = ({isLogged, onLoginToggle}) => {

    const toggleLoginHandler = () => {
        onLoginToggle(!isLogged)
    }

    return (
        <header className={styles.header}>
            <h1>Carpincho Store</h1>
            <button onClick={toggleLoginHandler}>{isLogged ? 'Logout' : 'Login'}</button>
        </header>
    )
}

export default Header