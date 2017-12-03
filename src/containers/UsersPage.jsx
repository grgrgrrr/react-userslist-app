import React, {Component} from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { push } from 'react-router-redux';
import 'style-loader!css-loader!../../node_modules/font-awesome/css/font-awesome.min.css';

import {fetchUsers} from '../actions/actions';
import PageWrapper from '../components/PageWrapper';
import UserCard from '../components/UserCard';


class UsersPage extends Component {
    componentWillMount() {
        this.props.fetchUsers();
    }

    render() {
        const {users} = this.props;
        return (
            <PageWrapper title="Users List"
                         titleIcon="fa-users">
                {
                    users.map(user => (
                        <UserCard key={user.id}
                                  user={user}
                                  handleOnClick={() => {
                                      this.props.changeRoute(`/users/${user.id}`)
                                  }}
                        />

                    ))
                }
            </PageWrapper>
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
        fetchUsers: () => { dispatch(fetchUsers()) },
        changeRoute: (newRoute) => { dispatch(push(newRoute)) }
    })
)(UsersPage);