import React from "react";
import styles from "../../../style/newProject/newProject.scss";

/**
 * Thematic areas
 */
class ThematicAreas extends React.Component {
    /**
     * Render
     * @returns {*} JSX
     */
    render() {
        const { labels } = this.props;

        return (
            <div className="card teal darken-3">
                <h5 className={`${styles['card-title']} card-action`}>
                    Arees temàtiques:
                </h5>
                <div className="card-content white-text">
                    <p>+ Afegeix nova area temàtica</p>
                </div>
            </div>
        );
    }
}

export default ThematicAreas;
