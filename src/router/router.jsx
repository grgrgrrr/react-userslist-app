import React, { Component } from "react";
import { Router, Route, IndexRoute } from "react-router";
import { history } from "../store/store";
import {StyleRoot} from 'radium';

import App from "../components/App";
import UsersPage from "../containers/UsersPage";
import UsersGalleryPage from '../containers/UsersGalleryPage';
import PhotosPage from '../containers/PhotosPage';
import NotFound from '../components/NotFound';


export default () => {
    return (
        <StyleRoot>
            <Router history={history}>
                <Route path="/" component={App}>
                    <IndexRoute component={UsersPage}/>
                    <Route path="users" component={UsersPage}/>
                    <Route path="users/:id" component={UsersGalleryPage}>
                        <Route path="album/:albumId" component={PhotosPage}/>
                    </Route>
                    <Route path="*" component={NotFound}/>
                </Route>
            </Router>
        </StyleRoot>
    );
}