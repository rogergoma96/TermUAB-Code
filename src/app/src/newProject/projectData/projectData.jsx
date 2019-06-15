import React from "react";

/**
 * Project Data
 */
class ProjectData extends React.Component {
    /**
     * Constructor
     * @param {object} props - Properties
     */
    constructor(props) {
        super(props);

        this.nextStep = this.nextStep.bind(this);
    }

    nextStep(step) {
        const { nextStep } = this.props;

        nextStep(step);
    }

    /**
     * Render
     * @returns {*} JSX
     */
    render() {
        const { labels } = this.props;
        const action = () => this.nextStep(2);

        return (
            <React.Fragment>
                <button className="teal darken-3 btn waves-effect waves-light hoverable" onClick={action}>
                    {labels.generalInformation.nextStep}
                </button>
            </React.Fragment>
        );
    }
}

export default ProjectData;
