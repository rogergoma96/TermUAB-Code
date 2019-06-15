import React from "react";
import Breadcrumbs from "../breadcrumbs";
import GeneralProperties from "./generalProperties/generalProperties";
import ProjectData from "./projectData/projectData";

import styles from "../../style/newProject/newProject.scss";

/**
 * MyProjects
 */
class NewProject extends React.Component {
    /**
     * Constructor
     */
    constructor() {
        super();

        this.state = {
            step: 1,
            userData: {
                generalProperties: {
                    name: '',
                    description: '',
                    languages: [],
                    thematicAreas: [],
                },
            }
        };

        this.nextStep = this.nextStep.bind(this);
    }

    /**
     * Next step
     * @param step {int} - Next step
     */
    nextStep(nextStep, generalProperties) {
        this.setState({ step: nextStep, userData: { generalProperties } });
    }

    /**
     * Render
     * @returns {*} JSX
     */
    render() {
        const { labels } = this.props;
        const { step, userData } = this.state;
        console.log(userData);
        return (
            <div className="row">
                <Breadcrumbs labels={labels} step={step} />
                <div className={`col s6 offset-s4 ${styles.container}`}>
                    {step === 1 && (
                        <GeneralProperties
                            labels={labels}
                            nextStep={this.nextStep}
                            userData={userData}
                        />
                    )}
                    {step === 2 && <ProjectData labels={labels} nextStep={this.nextStep} />}
                </div>
            </div>
        );
    }
}

export default NewProject;
