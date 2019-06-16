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
        const { session } = this.props;

        return (
            <ul id="nav-mobile" className={`sidenav sidenav-fixed col s2 ${styles.container}`}>
                {!session && (
                    <li className={styles.item}>
                        <Link to={'/login'}>
                            <span>Inicia sesión</span>
                        </Link>
                    </li>
                )}
                {!session && (
                    <li className={styles.item}>
                        <Link to={'/signup'}>
                            <span>Regístrate</span>
                        </Link>
                    </li>
                )}
                <li className={styles.item}>
                    <Link to={`${session ? '/new-project' : '/login'}`}>
                        <span>Nou projecte</span>
                    </Link>
                </li>
                <li className={styles.item}>
                    <Link to={`${session ? '/my-projects' : '/login'}`}>
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
