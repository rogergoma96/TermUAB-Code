import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import Header from "./header";
import Home from "./home/home";
import Login from "./authentication/login";
import MyProjects from "./myProjects";
import NewProject from "./newProject/newProject";
import Projects from "./projects";
import SideNav from "./sideNav";
import SignUp from "./authentication/signUp";

import getTranslations from "../../config/translations";
import '../style/globals.scss';

const history = createBrowserHistory();
const labels = getTranslations['ca'];

ReactDOM.render(
    <div className="row">
        <Router history={history}>
            <SideNav />
            <Header />
            <Switch>
                <Route exact path="/" component={() => <Home labels={labels.home} />} />
                <Route exact path="/login" component={Login}/>
                <Route exact path="/signup" component={SignUp} />
                <Route exact path="/new-project" component={() => <NewProject labels={labels.newProject} />} />
                <Route exact path="/my-projects" component={() => <MyProjects labels={labels.myProjects} />} />
                <Route exact path="/projects" component={() => <Projects labels={labels.projects} />} />
            </Switch>
        </Router>
    </div>,
    document.querySelector('#app'),
);
