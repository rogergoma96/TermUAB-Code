import React from "react";

import style from '../../style/home/sideNav.scss';

class SideNav extends React.Component {
    render() {
        return (
            <ul id="nav-mobile" className="sidenav sidenav-fixed col s2">
                <li className={style.login}>Login</li>
            </ul>
        );
    }
}

export default SideNav;
