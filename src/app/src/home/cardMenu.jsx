import React from "react";
import {Link} from "react-router-dom";

import styles from '../../style/home/cardMenu.scss';

/**
 * Card Menu
 */
class CardMenu extends React.Component {
    /**
     * Render
     * @returns {*} JSX
     */
    render() {
        const { labels, url } = this.props;

        return (
            <div className="col s12 m4">
                <Link to={url}>
                    <div className={`${styles.card} card hoverable teal darken-3`}>
                        <div className="card-content white-text">
                            <span className="card-title">{labels.title}</span>
                            <p>{labels.description}</p>
                        </div>
                        <div className="card-action">
                            <span className={styles.link}>{labels.link}</span>
                        </div>
                    </div>
                </Link>
            </div>
        );
    }
}

export default CardMenu;
