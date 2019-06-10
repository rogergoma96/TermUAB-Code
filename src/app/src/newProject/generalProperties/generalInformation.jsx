import React from "react";

import stylesCard from "../../../style/newProject/newProject.scss";
import styles from "../../../style/newProject/generalProperties/generalInformation.scss";

/**
 * General information
 */
class GeneralInformation extends React.Component {
    /**
     * Render
     * @returns {*} JSX
     */
    render() {
        const { labels } = this.props;

        return (
            <div className="card teal darken-3">
                <h5 className={`${stylesCard['card-title']} card-action`}>
                    {labels.projectInformation}
                </h5>
                <div className="card-content white-text">
                    <div className={`${styles.input} input-field`}>
                        <input id="first_name" type="text" />
                        <label className="active">{labels.projectName}</label>
                    </div>
                    <div className={`${styles.input} input-field`}>
                        <textarea className="materialize-textarea" id="projectDescription" name="projectDescription" />
                        <label className="active">{labels.projectDescription}</label>
                    </div>
                </div>
            </div>
        );
    }
}

export default GeneralInformation;
