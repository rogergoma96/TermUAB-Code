import React from "react";

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
            <nav className="header teal darken-3 col s10 offset-s2">
                <div className="col s2">
                    <a className="brand-logo" href="/">TermUAB</a>
                </div>
            </nav>
        );
    }
}

export default Header;
