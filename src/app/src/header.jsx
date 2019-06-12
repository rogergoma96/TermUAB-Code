import React from "react";
import { Link } from "react-router-dom";

import styles from '../style/header.scss';

/**
 * Header
 */
class Header extends React.Component {
    /**
     * Render
     * @returns {*} JSX
     */
    render() {
        return (
            <nav className={`${styles.header} col s10 offset-s2 teal darken-3`}>
                <div className="col s2">
                    <Link to={'/'}>
                        <span className="brand-logo">TermUAB</span>
                    </Link>
                </div>
            </nav>
        );
    }
}

export default Header;
