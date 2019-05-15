import React from "react";

class Header extends React.Component {
    render() {
        return (
            <nav className="teal darken-3 row">
                <div className="col s2">
                    <a className="brand-logo" href="/">TermUAB</a>
                </div>
            </nav>
        );
    }
}

export default Header;
