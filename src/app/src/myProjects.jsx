import React from "react";
import Breadcrumbs from "./breadcrumbs";

/**
 * MyProjects
 */
class MyProjects extends React.Component {
    /**
     * Render
     * @returns {*} JSX
     */
    render() {
        const { labels } = this.props;

        return (
            <div className="row">
                <Breadcrumbs labels={labels} />
                <div className="col s10 offset-s2" />
            </div>
        );
    }
}

export default MyProjects;
