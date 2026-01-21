import React from 'react';
import styles from './Header.module.css';
import clsx from 'clsx';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={clsx('container', styles.container)}>
                <a href="#hero" className={styles.logo}>
                    DEV<span className={styles.dot}>.</span>
                </a>
            </div>
        </header>
    );
};

export default Header;
