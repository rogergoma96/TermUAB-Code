import React from "react";
import FlagIcon from '../../lib/flagIconFactory.js';


import stylesCard from "../../../style/newProject/newProject.scss";
import styles from "../../../style/newProject/generalProperties/languages.scss";

/**
 * Languages
 */
class Languages extends React.Component {
    /**
     * Constructor
     */
    constructor(props) {
        super(props);

        this.state = {
            languages: [],
        };

        this.setLanguage = this.setLanguage.bind(this);
    }

    /**
     * Set selected language
     * @param e {object} - Event selected
     */
    setLanguage(e) {
        const { saveLanguages } = this.props;

        saveLanguages(e.target.id);
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
                    {labels.projectLanguages}
                </h5>
                <div className={`${styles.flags} row`}>
                    <div className={`${styles.checkbox} col s3 card-content white-text`}>
                        <label>
                            <input id="es-ct" type="checkbox" className="filled-in checkbox-orange-white" onClick={this.setLanguage} />
                            <span className={styles.text}><FlagIcon code="es-ct" /> Català</span>
                        </label>
                    </div>
                    <div className={`${styles.checkbox} col s3 card-content white-text`}>
                        <label>
                            <input id="fr" type="checkbox" className="filled-in checkbox-orange-white" onClick={this.setLanguage} />
                            <span className={styles.text}><FlagIcon code="fr" /> Frances</span>
                        </label>
                    </div>
                    <div className={`${styles.checkbox} col s3 card-content white-text`}>
                        <label>
                            <input id="it" type="checkbox" className="filled-in checkbox-orange-white" onClick={this.setLanguage} />
                            <span className={styles.text}><FlagIcon code="it" /> Italiano</span>
                        </label>
                    </div>
                    <div className={`${styles.checkbox} col s3 card-content white-text`}>
                        <label>
                            <input id="es" type="checkbox" className="filled-in checkbox-orange-white" onClick={this.setLanguage}/>
                            <span className={styles.text}><FlagIcon code="es" /> Español</span>
                        </label>
                    </div>
                </div>
            </div>
        );
    }
}

export default Languages;
