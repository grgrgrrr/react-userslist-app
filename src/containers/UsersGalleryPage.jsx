import React, {Component} from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Radium from 'radium';
import {Link as ReactRouterLink} from 'react-router';
const Link = Radium(ReactRouterLink);

import variables from '!!sass-variable-loader!../styles/_variables.scss';
import PageWrapper from '../components/PageWrapper';
import UserCard from '../components/UserCard';
import Card from '../components/Card';
import AlbumLogo from '../components/AlbumLogo';
import { fetchUsers, fetchAlbums, clearAlbums } from '../actions/actions';

const styles = {
    albumsCard: {
        width: '50%',
        color: 'white',
        backgroundColor: variables.primary,
        ':hover': {
            boxShadow: 'none',
            cursor: 'normal'
        },
        ':active': {
            boxShadow: 'none',
            cursor: 'normal'
        },
    },
    albumsContainer: {
        display: 'flex',
        flexDirection: 'row'
    },
    albumColumn: {
        width: '50%'
    },
    linkStyle: {
        textDecoration: 'none',
        color: variables.lightPrimary,
        ':hover': {
            color: variables.lightGrey
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
                         titleIcon="fa-user-circle">
                <UserCard  user={currentUser}/>
                <Card title="Albums"
                      style={styles.albumsCard}>
                    <div style={styles.albumsContainer}>
                        <div style={styles.albumColumn}>
                            {
                                albums.map(album => <div key={album.id}>
                                    <Link to={`/users/${currentUser.id}/album/${album.id}`} style={styles.linkStyle}>
                                        {album.title.slice(0,1)[0].toUpperCase() + album.title.slice(1)}
                                    </Link>
                                </div>)
                            }
                        </div>
                        <div style={styles.albumColumn}>
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