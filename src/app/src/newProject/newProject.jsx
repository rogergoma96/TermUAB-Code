import React from "react";
import styles from "../../style/newProject.scss";
import GeneralInformation from "./generalProperties/generalInformation";
import Languages from "./generalProperties/languages";
import ThematicAreas from "./generalProperties/thematicAreas";

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
                <nav className={`${styles.header} col s10 offset-s2 grey lighten-5`}>
                    <div className="row">
                        <div className="col s6">
                            <h4 className={styles.title}>
                                Propietats generals del projecte
                            </h4>
                        </div>
                        <div className={`${styles.breadcrumbs} col s4 offset-s2`}>{labels.breadcrumbs}</div>
                    </div>
                </nav>
                <div className="col s6 offset-s4">
                    <GeneralInformation labels={labels}/>
                    <Languages labels={labels} />
                    <ThematicAreas labels={labels} />
                    <button className="btn waves-effect waves-light" type="submit" name="action">Continuar</button>
                </div>
            </div>
        );
    }
}

export default NewProject;
