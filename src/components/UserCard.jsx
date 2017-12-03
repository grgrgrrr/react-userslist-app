import React, {Component} from "react";
import PropTypes from 'prop-types';
import Radium from 'radium';

import {colors, shadow} from '../theme.js';
import Card from '../components/Card';

const styles = {
    label: {
        color: colors.primary,
        marginRight: 4
    },
    smallText: {
        fontSize: '12px',
        color: colors.middleGrey
    }
};


class UserCard extends Component {
    formatters = {
        email: {
            formatLabel: () => <i className="fa fa-envelope" style={styles.label}></i>
        },
        phone: {
            formatLabel: () => <i className="fa fa-mobile" style={styles.label}></i>
        },
        website: {
            formatLabel: () => <i className="fa fa-globe" style={styles.label}></i>,
            formatText: website => <a href={`http://${website}`}>{website}</a>
        },
        address: {
            formatLabel: () => <i className="fa fa-map-marker" style={styles.label}></i>,
            formatText: address => <a target="_blank" href={`http://www.google.com/maps/place/${address.geo.lat},${address.geo.lng}`}>
                {address.zipcode} {address.street}, {address.suite}, {address.city}
                </a>
        },
        company: {
            formatLabel: () => "",
            formatText: company => <div>
                <div><span style={styles.label}>Company: </span> {company.name} </div>
                <div style={styles.smallText}>{company.catchPhrase}</div>
                <div style={{ ...styles.smallText, fontWeight: 'bold' }}>{company.bs}</div>
            </div>
        }

    };

    renderInfoItem(key, user, style={}) {
        const formatter = this.formatters[key];
        return <div style={style}>
                  <span style={styles.label}>
                      {
                          formatter && formatter.formatLabel ?
                              formatter.formatLabel(key) : key
                      }
                  </span>
                  <span>
                      {
                          formatter && formatter.formatText ?
                              formatter.formatText(user[key]) : `${user[key]}`
                      }
                  </span>
        </div>
    }

    render() {
        const {user, style} = this.props;
        return <Card title={user.name}
                     subtitle={user.username}
                     handleOnClick={this.props.handleOnClick}
                     style={style}
        >
            { this.renderInfoItem('email', user) }
            { this.renderInfoItem('phone', user) }
            { this.renderInfoItem('website', user) }
            { this.renderInfoItem('address', user, {marginTop: '1em'}) }
            { this.renderInfoItem('company', user, {marginTop: '1em'}) }
        </Card>
    }
}

UserCard.propTypes = {
  user: PropTypes.object.isRequired,
  handleOnClick: PropTypes.func
};

export default Radium(UserCard);