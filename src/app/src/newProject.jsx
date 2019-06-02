import React from "react";

/**
 * MyProjects
 */
class NewProject extends React.Component {
    /**
     * Render
     * @returns {*} JSX
     */
    render() {
        const { labels } = this.props;

        return (
            <div className="row">
                <div className="col s10 offset-s2" />
            </div>
        );
    }
}

export default NewProject;
