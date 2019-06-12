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
            <div className="card">
                <h5 className={`${styles['card-title']} card-action`}>
                    {labels.thematicAreas}
                </h5>
                <div className="card-content white-text">
                    <p>+ {labels.newArea}</p>
                </div>
            </div>
        );
    }
}

export default ThematicAreas;
