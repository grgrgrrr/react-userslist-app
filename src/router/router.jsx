import React, { Component } from "react";
import { Router, Route, IndexRoute } from "react-router";
import { history } from "../store/store";

import App from "../containers/App";
import NotFound from '../containers/NotFound';


export default () => {
    return (
        <Router history={history}>
            <Route path="/" component={App}>
                <Route path="*" component={NotFound}/>
            </Route>
        </Router>
    );
}