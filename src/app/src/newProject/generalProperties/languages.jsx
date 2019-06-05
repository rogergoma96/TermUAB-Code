import React from "react";
import FlagIcon from '../../lib/flagIconFactory.js';


import stylesCard from "../../../style/newProject/newProject.scss";
import styles from "../../../style/newProject/generalProperties/languages.scss";

/**
 * Languages
 */
class Languages extends React.Component {
    /**
     * Render
     * @returns {*} JSX
     */
    render() {
        const { labels } = this.props;

        return (
            <div className="row card teal darken-3">
                <h5 className={`${stylesCard['card-title']} card-action`}>
                    Llengües del projete:
                </h5>
                <div className="col s4 card-content white-text">
                    <label className={styles.checkbox}>
                        <input type="checkbox" className="filled-in checkbox-orange-white" />
                        <span><FlagIcon code="es-ct" /> Català</span>
                    </label>
                </div>
                <div className="col s4 card-content white-text">
                    <label className={styles.checkbox}>
                        <input type="checkbox" className="filled-in checkbox-orange-white" />
                        <span><FlagIcon code="es-ct" /> Català</span>
                    </label>
                </div>
                <div className="col s4 card-content white-text">
                    <label className={styles.checkbox}>
                        <input type="checkbox" className="filled-in checkbox-orange-white" />
                        <span><FlagIcon code="fr" /> Frances</span>
                    </label>
                </div>
                <div className="col s4 card-content white-text">
                    <label className={styles.checkbox}>
                        <input type="checkbox" className="filled-in checkbox-orange-white" />
                        <span><FlagIcon code="it" /> Italiano</span>
                    </label>
                </div>
                <div className="col s4 card-content white-text">
                    <label className={styles.checkbox}>
                        <input type="checkbox" className="filled-in checkbox-orange-white" />
                        <span><FlagIcon code="es" /> Español</span>
                    </label>
                </div>
            </div>
        );
    }
}

export default Languages;
