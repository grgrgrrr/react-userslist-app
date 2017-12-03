import React, {Component} from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import variables from '!!sass-variable-loader!../styles/_variables.scss';
import PageWrapper from '../components/PageWrapper';
import UserCard from '../components/UserCard';
import Card from '../components/Card';
// import { fetchUsers, fetchAlbums, clearAlbums } from '../actions/actions';


class PhotosPage extends Component {
    componentWillMount(){
    }

    componentWillUnmount(){
    }

    render() {
        return <div>
            Photos
        </div>;
    }
}

PhotosPage.propTypes = {};

export default connect(
    (state, props) => ({
    }),
    dispatch => ({
    })
)(PhotosPage);