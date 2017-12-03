import React, {Component} from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Radium from 'radium';
import {Link as ReactRouterLink} from 'react-router';
const Link = Radium(ReactRouterLink);

import {colors, shadow} from '../theme.js';
import PageWrapper from '../components/PageWrapper';
import UserCard from '../components/UserCard';
import Card from '../components/Card';
import AlbumLogo from '../components/AlbumLogo';
import { fetchUsers, fetchAlbums, clearAlbums } from '../actions/actions';
import { formatAlbumName } from '../formatters';

const styles = {
    currentUser: {
        ':hover': {
            boxShadow:  shadow.normal,
            cursor: 'normal'
        }
    },
    albumsCard: {
        width: '60%',
        color: 'white',
        backgroundColor: colors.primary,
        ':hover': {
            boxShadow: 'none',
            cursor: 'normal'
        },
        ':active': {
            boxShadow: 'none',
            cursor: 'normal'
        }
    },
    albumsContainer: {
        display: 'flex',
        flexDirection: 'row'
    },
    linkStyle: {
        marginRight: '5px',
        textDecoration: 'none',
        color: colors.lightPrimary,
        ':hover': {
            color: colors.lightGrey
        }
    }
};

class UsersGalleryPage extends Component {
    componentWillMount(){
        if (!this.props.users || this.props.users.length === 0){
            this.props.fetchUsers();
        }
        this.props.fetchAlbums(this.props.params.id);
    }

    componentWillUnmount(){
        this.props.clearAlbums();
    }

    render() {
        const {users, albums, params} = this.props;
        if (!users || !albums) return null;
        const currentUser = this.props.currentUser || users.find(user => user.id == params.id);
        if (!currentUser) return null;

        return (
            <PageWrapper title={`Albums of ${currentUser.name}`}
                         titleIcon="fa-user-circle"
                         backButtonLink={this.props.params.albumId ? `/users/${currentUser.id}` : "/users"}
            >
                <UserCard  user={currentUser}
                           style={styles.currentUser}
                />
                <Card title="Albums"
                      style={styles.albumsCard}>
                    <div style={styles.albumsContainer}>
                        <div style={{ width: '70%' }}>
                            {
                                albums.map(album => <div key={album.id}>
                                    <Link to={`/users/${currentUser.id}/album/${album.id}`} style={styles.linkStyle}>
                                        {formatAlbumName(album.title)}
                                    </Link>
                                    {
                                        this.props.params.albumId == album.id &&
                                        <i className="fa fa-picture-o" aria-hidden="true"></i>
                                    }
                                </div>)
                            }
                        </div>
                        <div style={{ width: '30%' }}>
                            <AlbumLogo />
                        </div>
                    </div>
                </Card>
                    { this.props.children }
            </PageWrapper>
        );
    }
}

UsersGalleryPage.propTypes = {};

export default connect(
    (state, props) => ({
        users: state.users,
        currentUser: state.users ? state.users.find(user => user.id == props.params.id) : null,
        albums: state.albums
    }),
    dispatch => ({
        fetchUsers: () => { dispatch(fetchUsers()) },
        fetchAlbums: (userId) => { dispatch(fetchAlbums(userId)) },
        clearAlbums: () => { dispatch(clearAlbums()) },
        changeRoute: (newRoute) => { dispatch(push(newRoute)) }
    })
)(Radium(UsersGalleryPage));