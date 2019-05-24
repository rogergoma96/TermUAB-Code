import {Component} from "react";
import React from "react";
import Header from "./header";
import SideNav from "./sideNav";

/**
 * Home
 */
class Home extends Component {
    /**
     * Render
     * @returns {*} JSX
     */
    render() {
        return (
            <div className="row">
                <Header />
                <SideNav />
            </div>
        );
    }
}

export default Home;
