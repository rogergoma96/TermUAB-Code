import React from "react";
import styles from "../../../style/newProject.scss";

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
                <h5 className={`${styles['card-title']} card-action`}>
                    Informació general
                </h5>
                <div className="card-content white-text">
                    <div className={`${styles.input} input-field`}>
                        <input id="first_name" type="text" />
                        <label className="active">Nom del projecte:</label>
                    </div>
                    <div className={`${styles.input} input-field`}>
                        <textarea className={`${styles.textarea} materialize-textarea`} id="projectDescription" name="projectDescription" />
                        <label className="active">Descripció:</label>
                    </div>
                </div>
            </div>
        );
    }
}

export default GeneralInformation;
