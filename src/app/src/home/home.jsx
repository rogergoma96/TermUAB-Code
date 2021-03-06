import React from "react";
import CardMenu from "./cardMenu";


import styles from '../../style/home/home.scss';

/**
 * Home
 */
class Home extends React.Component {
    /**
     * Render
     * @returns {*} JSX
     */
    render() {
        const { labels, session } = this.props;

        return (
            <div className="row">
                <div className="col s10 offset-s2">
                    <div className={`${styles.container} row`}>
                        <CardMenu labels={labels.cards[0]} url={`${session ? '/new-project' : '/login'}`} />
                        <CardMenu labels={labels.cards[1]} url={`${session ? '/my-projects' : '/login'}`}/>
                        <CardMenu labels={labels.cards[2]} url="/projects" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
