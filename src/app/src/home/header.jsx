import React from "react";

import styles from '../../style/header.scss';

/**
 * Header
 */
class Header extends React.Component {
    /**
     * Render
     * @returns {*} JSX
     */
    render() {
        if (window.location.pathname === '/login' || window.location.pathname === '/signup') {
            return null;
        }

        return (
            <nav className={`${styles.header} col s10 offset-s2 teal darken-3`}>
                <div className="col s2">
                    <a className="brand-logo" href="/">TermUAB</a>
                </div>
            </nav>
        );
    }
}

export default Header;
