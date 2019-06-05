import React from "react";
import styles from "../../../style/newProject.scss";

/**
 * Languages
 */
class Languages extends React.Component {
    /**
     * Render
     * @returns {*} JSX
     */
    render() {
        const { labels } = this.props;

        return (
            <div className="card teal darken-3">
                <h5 className={`${styles['card-title']} card-action`}>
                    Llengües del projete:
                </h5>
                <div className="card-content white-text">
                    <p>Català</p>
                </div>
            </div>
        );
    }
}

export default Languages;
