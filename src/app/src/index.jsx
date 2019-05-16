import React from 'react';
import ReactDOM from 'react-dom';

import createHystory from 'history/createBrowserHistory'
import { Router, Route, Switch } from 'react-router-dom';
import Home from './home/home';

const history = createHystory();

ReactDOM.render(
    <Router history={history}>
        <div className="row">
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        </div>
    </Router>,
    document.querySelector('#app'),
);
