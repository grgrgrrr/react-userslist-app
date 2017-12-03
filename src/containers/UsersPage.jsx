import React, {Component} from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Radium from 'radium';
import 'style-loader!css-loader!../../node_modules/font-awesome/css/font-awesome.min.css';

import variables from '!!sass-variable-loader!../styles/_variables.scss';
import {fetchUsers} from '../actions/actions';
import Divider from '../components/Divider';
import UserCard from '../components/UserCard';

const styles = {
    pageWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    usersContainer: {
        width: '80%',
        '@media only screen and (max-width: 1100px)': {
            width: '100%'
        },
        '@media screen and (max-device-width: 1100px)': {
            width: '100%'
        }
    },
    titleIcon: {
        color: variables.primary,
        marginRight: '1em'
    },
    title: {
        fontWeight: 'normal'
    },
    listContainer: {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirecrion: 'row',
        justifyContent: 'center'
    },
    listItem: {
        display: 'flex'
    }
};

class UsersPage extends Component {
    componentWillMount() {
        this.props.fetchUsers();
    }

    render() {
        const {users} = this.props;
        return (
            <div key="pageWrapper" style={styles.pageWrapper}>
                <div key="usersContainer" style={styles.usersContainer}>
                    <h1 style={styles.title}>
                        <i className="fa fa-users" style={styles.titleIcon}></i>
                        Users List
                    </h1>
                    <Divider/>
                    <div style={styles.listContainer}>
                        {
                            users.map(user => (
                                <UserCard user={user} key={user.id}/>

                            ))
                        }
                    </div>
                </div>
            </div>
        );
    }
}

UsersPage.propTypes = {
    users: PropTypes.array.isRequired,
    fetchUsers: PropTypes.func.isRequired
};

export default connect(
    state => ({
        users: state.users
    }),
    dispatch => ({
        fetchUsers: () => {
            dispatch(fetchUsers())
        }
    })
)(Radium(UsersPage));