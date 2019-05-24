import { createBrowserHistory } from 'history';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';

import Home from './home/home';
import SignUp from "./authentication/signUp";
import Login from './authentication/login';

import '../style/globals.scss';

const history = createBrowserHistory();

ReactDOM.render(
    <Router history={history}>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
        </Switch>
    </Router>,
    document.querySelector('#app'),
);
