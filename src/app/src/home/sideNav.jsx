import React from "react";

import style from '../../style/home/sideNav.scss';

class SideNav extends React.Component {
    render() {
        return (
            <ul id="nav-mobile" className="sidenav sidenav-fixed">
                <li className={style.sideNav}>SideNav</li>
            </ul>
        );
    }
}

export default SideNav;
