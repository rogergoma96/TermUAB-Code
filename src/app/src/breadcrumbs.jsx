import React from "react";
import styles from "../style/breadcrumbs.scss";
/**
 * MyProjects
 */
class Breadcrumbs extends React.Component {
    /**
     * Render
     * @returns {*} JSX
     */
    render() {
        const { labels } = this.props;

        return (
            <nav className={`${styles.header} col s10 offset-s2 grey lighten-5`}>
                <div className="row">
                    <div className={`${styles.breadcrumbs} col s6`}>{labels.breadcrumbs}</div>
                </div>
            </nav>
        );
    }
}

export default Breadcrumbs;
