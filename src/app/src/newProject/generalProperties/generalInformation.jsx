import React from "react";
import stylesCard from "../../../style/newProject/newProject.scss";

import styles from "../../../style/newProject/generalProperties/generalInformation.scss";

/**
 * General information
 */
class GeneralInformation extends React.Component {
    constructor(props) {
        super(props);

        this.saveProjectDescription = this.saveProjectDescription.bind(this);
        this.saveProjectName = this.saveProjectName.bind(this);
    }

    /**
     * Save description
     * @param e {object} - Event selected
     */
    saveProjectDescription(e) {
        const { saveDescription } = this.props;

        saveDescription(e.target.value);
    }

    /**
     * Save project name
     * @param e {object} - Event selected
     */
    saveProjectName(e) {
        const { saveName } = this.props;

        saveName(e.target.value);
    }

    /**
     * Render
     * @returns {*} JSX
     */
    render() {
        const { labels } = this.props;

        return (
            <div className="card">
                <h5 className={`${stylesCard['card-title']} card-action`}>
                    {labels.projectInformation}
                </h5>
                <div className="card-content white-text">
                    <div className={`${styles.input} input-field`}>
                        <input id="first_name" type="text" onBlur={this.saveProjectName} />
                        <label>{labels.projectName}</label>
                    </div>
                    <div className={`${styles.input} input-field`}>
                        <textarea
                            className="materialize-textarea"
                            id="projectDescription"
                            name="projectDescription"
                            onBlur={this.saveProjectDescription}
                        />
                        <label>{labels.projectDescription}</label>
                    </div>
                </div>
            </div>
        );
    }
}

export default GeneralInformation;
