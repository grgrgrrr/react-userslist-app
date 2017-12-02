import React, {Component} from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import 'style-loader!css-loader!../../node_modules/font-awesome/css/font-awesome.min.css';

import variables from '!!sass-variable-loader!../styles/_variables.scss';
import { fetchUsers } from '../actions/actions';
import Divider from '../components/Divider';

const styles = {
    titleIcon: {
        color: variables.primary,
        marginRight: '1em'
    },
    title: {
        fontWeight: 'normal',
        color: variables.darkGrey
    },
    usersContainer: {
        width: '50%'
    }
};

class UsersPage extends Component {
    componentWillMount(){
        this.props.fetchUsers();
    }

    render() {
        const { users } = this.props;
        return (
            <div className="grid grid-center">
                <div style={styles.usersContainer}>
                    <h1 style={styles.title}>
                        <i className="fa fa-list" style={styles.titleIcon}></i>
                        Users List
                    </h1>
                    <Divider/>
                    <ul>
                    </ul>
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
        fetchUsers: () => { dispatch(fetchUsers()) }
    })
)(UsersPage);