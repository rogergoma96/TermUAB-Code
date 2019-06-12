import React from "react";
import { Link } from "react-router-dom";

import styles from '../style/sideNav.scss';

/**
 * SideNav
 */
class SideNav extends React.Component {
    /**
     * Render
     * @returns {*} JSX
     */
    render() {
        return (
            <ul id="nav-mobile" className="sidenav sidenav-fixed col s2">
                <li className={styles.item}>
                    <Link to={'/login'}>
                        <span>Inicia sesión</span>
                    </Link>
                </li>
                <li className={styles.item}>
                    <Link to={'/signup'}>
                        <span>Regístrate</span>
                    </Link>
                </li>
                <li className={styles.item}>
                    <Link to={'/new-project'}>
                        <span>Nou projecte</span>
                    </Link>
                </li>
                <li className={styles.item}>
                    <Link to={'/my-projects'}>
                        <span>Els meus projectes</span>
                    </Link>
                </li>
                <li className={styles.item}>
                    <Link to={'/projects'}>
                        <span>Buscar projectes</span>
                    </Link>
                </li>
            </ul>
        );
    }
}

export default SideNav;
