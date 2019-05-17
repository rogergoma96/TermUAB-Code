import React from "react";
import { Link } from "react-router-dom";

import style from '../../style/home/sideNav.scss';

/**
 * SideNav
 */
class SideNav extends React.Component {
    render() {
        return (
            <ul id="nav-mobile" className="sidenav sidenav-fixed col s2">
                <li className={style.login}>
                    <Link aria-hidden="true" tabIndex="-1" to={'/login'}>
                        <span>Login</span>
                    </Link>
                </li>
            </ul>
        );
    }
}

export default SideNav;
