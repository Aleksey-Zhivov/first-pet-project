import { FC } from 'react';
import styles from './header.module.css';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';


export const Header: FC = () => {
    const location = useLocation();
    const currentLocation = location.pathname;
    
    return (
        <header className={styles.header}>
        <nav className={`${styles.menu}`}>
            <>
            <Link
                  className={clsx(
                    styles.link,
                    currentLocation === '/'
                      ? [styles.link_active, styles.link]
                      : styles.link
                  )}
                  to={'/'}
                >
                    Партнеры
                </Link>
            </>
        </nav>
        </header>
    )
};