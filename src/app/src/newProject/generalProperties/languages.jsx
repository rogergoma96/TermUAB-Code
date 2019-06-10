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
                <div className={`${styles.flags} row`}>
                    <div className={`${styles.checkbox} col s3 card-content white-text`}>
                        <label>
                            <input type="checkbox" className="filled-in checkbox-orange-white" />
                            <span className={styles.text}><FlagIcon code="es-ct" /> Català</span>
                        </label>
                    </div>
                    <div className={`${styles.checkbox} col s3 card-content white-text`}>
                        <label>
                            <input type="checkbox" className="filled-in checkbox-orange-white" />
                            <span className={styles.text}><FlagIcon code="es-ct" /> Català</span>
                        </label>
                    </div>
                    <div className={`${styles.checkbox} col s3 card-content white-text`}>
                        <label>
                            <input type="checkbox" className="filled-in checkbox-orange-white" />
                            <span className={styles.text}><FlagIcon code="fr" /> Frances</span>
                        </label>
                    </div>
                    <div className={`${styles.checkbox} col s3 card-content white-text`}>
                        <label>
                            <input type="checkbox" className="filled-in checkbox-orange-white" />
                            <span className={styles.text}><FlagIcon code="it" /> Italiano</span>
                        </label>
                    </div>
                    <div className={`${styles.checkbox} col s3 card-content white-text`}>
                        <label>
                            <input type="checkbox" className="filled-in checkbox-orange-white" />
                            <span className={styles.text}><FlagIcon code="es" /> Español</span>
                        </label>
                    </div>
                </div>
            </div>
        );
    }
}

export default Languages;
