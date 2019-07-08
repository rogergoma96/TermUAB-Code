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
                    _id: '',
                },
            }
        };

        this.nextStep = this.nextStep.bind(this);
    }

    /**
     * Next step
     * @param nextStep {int} - Next step
     */
    nextStep(nextStep, generalProperties) {
        this.setState({ step: nextStep, userData: { generalProperties } }, () => {
            this.addProject();
        });
    }

    addProject() {
        if(this.state._id) {
            fetch(`/api/projects/${this.state._id}`, {
                method: 'PUT',
                body: JSON.stringify({
                    name: this.state.name,
                    description: this.state.description,
                    languages: this.state.languages,
                }),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    window.M.toast({html: 'Project Updated'});
                    this.setState({_id: '', name: '', description: '', languages: []});
                });
        } else {
            fetch('/api/projects', {
                method: 'POST',
                body: JSON.stringify(this.state.userData.generalProperties),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    window.M.toast({html: 'Project Saved'});
                })
                .catch(err => console.error(err));
        }
    }
    /**
     * Render
     * @returns {*} JSX
     */
    render() {
        const { labels } = this.props;
        const { step, userData } = this.state;

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
