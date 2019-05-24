import React from "react";
import { Link } from "react-router-dom";

import style from '../../style/home/sideNav.scss';

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
                <li className={style.item}>
                    <Link to={'/login'}>
                        <span>Inicia sesión</span>
                    </Link>
                </li>
                <li className={style.item}>
                    <Link to={'/signup'}>
                        <span>Regístrate</span>
                    </Link>
                </li>
            </ul>
        );
    }
}

export default SideNav;
