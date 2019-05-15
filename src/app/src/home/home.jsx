import {Component} from "react";
import React from "react";
import Header from "./header";
import SideNav from "./sideNav";

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <SideNav />
            </React.Fragment>
        );
    }
}

export default Home;
