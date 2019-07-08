import _ from 'lodash';
import React from "react";
import Breadcrumbs from "./breadcrumbs";
import FlagIcon from "./lib/flagIconFactory.js";

import styles from '../style/myProjects.scss';

/**
 * MyProjects
 */
class MyProjects extends React.Component {
    constructor() {
        super();

        this.projects = {};
    }

    componentDidMount() {
        this.getProjects();
        let elem = document.querySelector('.collapsible.popout');
        let instance = M.Collapsible.init(elem, {
            accordion: false
        });
    }

    getProjects() {
        fetch('/api/projects')
            .then(res => res.json())
            .then(data => {
                this.projects = data;
            });
    }

    /**
     * Render
     * @returns {*} JSX
     */
    render() {
        const { labels } = this.props;
        return (
            <div className="row">
                <Breadcrumbs labels={labels} />
                <div className={`col s8 offset-s3 ${styles.container}`}>
                    <ul className="collapsible popout">
                        {_.map(this.projects, (project) => {
                            return (
                                <li>
                                    <div className="collapsible-header">
                                        {project.name}
                                    </div>
                                    <div className="collapsible-body">
                                        <ul>
                                            <li>{project.description}</li>
                                            <li className={styles.more}><a>+ Veure mes</a></li>
                                            <li className={styles.flags}>
                                                {_.map(project.languages, (language) => {
                                                    return (
                                                        <FlagIcon code={language} />
                                                    )
                                                })}
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

export default MyProjects;
