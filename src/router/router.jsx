import React, { Component } from "react";
import { Router, Route, IndexRoute } from "react-router";
import { history } from "../store/store";

import App from "../containers/App";
import UsersPage from "../containers/UsersPage";
import NotFound from '../containers/NotFound';


export default () => {
    return (
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={UsersPage}/>
                <Route path="users" component={UsersPage}/>
                <Route path="*" component={NotFound}/>
            </Route>
        </Router>
    );
}