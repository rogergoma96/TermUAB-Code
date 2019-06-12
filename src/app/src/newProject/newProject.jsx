import React from "react";
import GeneralInformation from "./generalProperties/generalInformation";
import Languages from "./generalProperties/languages";
import ThematicAreas from "./generalProperties/thematicAreas";
import Breadcrumbs from "../breadcrumbs";

import styles from "../../style/newProject/newProject.scss";

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
                <Breadcrumbs labels={labels} />
                <div className={`col s6 offset-s4 ${styles.container}`}>
                    <GeneralInformation labels={labels.generalInformation}/>
                    <Languages labels={labels.generalInformation} />
                    <ThematicAreas labels={labels.generalInformation} />
                    <button className="teal darken-3 btn waves-effect waves-light" type="submit" name="action">
                        {labels.generalInformation.nextStep}
                    </button>
                </div>
            </div>
        );
    }
}

export default NewProject;
