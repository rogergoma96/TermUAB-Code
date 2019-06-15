import React from "react";
import GeneralInformation from "./generalInformation";
import Languages from "./languages";
import ThematicAreas from "./thematicAreas";

/**
 * GeneralProperites
 */
class GeneralProperties extends React.Component {
    /**
     * Constructor
     */
    constructor() {
        super();

        this.state = {
            description: '',
            name: '',
            languages: [],
            thematicAreas: [],
        };

        this.saveName = this.saveName.bind(this);
        this.saveDescription = this.saveDescription.bind(this);
        this.saveLanguages = this.saveLanguages.bind(this);
        this.saveThematicAreas = this.saveThematicAreas.bind(this);
    }

    /**
     * Save project name
     * @param name {string} - Project name
     */
    saveName(name) {
        this.setState({ name });
    }

    /**
     * Save project description
     * @param description {string} - Project description
     */
    saveDescription(description) {
        this.setState({ description })
    }

    /**
     * Save project languages
     * @param selectedLanguage {string} - Language selected
     */
    saveLanguages(selectedLanguage) {
        const { languages } = this.state;
        const index = languages.indexOf(selectedLanguage);

        if (index === -1) {
            languages.push(selectedLanguage);
        } else {
            languages.splice(index, 1);
        }

        this.setState({ languages });
    }

    /**
     * Save project thematic areas
     * @param thematicAreas {string} - Project thematic areas
     */
    saveThematicAreas(thematicAreas) {
        this.setState({ thematicAreas });
    }

    /**
     * Render
     * @returns {*} JSX
     */
    render() {
        const { labels, nextStep } = this.props;
        const action = () => nextStep(2, this.state);

        return (
            <React.Fragment>
                <GeneralInformation
                    labels={labels.generalInformation}
                    saveName={this.saveName}
                    saveDescription={this.saveDescription}
                />
                <Languages
                    labels={labels.generalInformation}
                    saveLanguages={this.saveLanguages}
                />
                <ThematicAreas
                    labels={labels.generalInformation}
                    saveAreas={this.saveThematicAreas} />
                <button className="teal darken-3 btn waves-effect waves-light hoverable" onClick={action}>
                    {labels.generalInformation.nextStep}
                </button>
            </React.Fragment>
        );
    }
}

export default GeneralProperties;
