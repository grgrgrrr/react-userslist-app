import React, {Component} from "react";
import PropTypes from 'prop-types';
import Radium from 'radium';

import variables from '!!sass-variable-loader!../styles/_variables.scss';

const styles = {
    card: {
        width: '400px',
        borderRadius: '2px',
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 6px, rgba(0, 0, 0, 0.1) 0px 1px 4px',
        margin: '0.5em',
        padding: '1em',
        ':hover': {
            boxShadow: 'rgba(0, 150, 136, 0.2) 0px 1px 15px, rgba(0, 150, 136, 0.2) 0px 1px 20px',
        }
    },
    cardTitle: {
        fontWeight: 'normal',
        margin: '2px 0px'
    },
    cardSubtitle: {
        fontWeight: 'normal',
        margin: '2px 0px',
        color: variables.middleGrey
    },
    mainInfo: {
        marginTop: '1em'
    },
    label: {
        color: variables.primary,
        marginRight: 4
    },
    smallText: {
        fontSize: '12px',
        color: variables.middleGrey
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

    render(){
        const { user } = this.props;
        return <div style={styles.card}>
            <h3 style={styles.cardTitle}>
                {user.name}
            </h3>
            <h5 style={styles.cardSubtitle}>
                {user.username}
            </h5>
            <div style={styles.mainInfo}>
                { this.renderInfoItem('email', user) }
                { this.renderInfoItem('phone', user) }
                { this.renderInfoItem('website', user) }
                { this.renderInfoItem('address', user, { marginTop: '1em' }) }
                { this.renderInfoItem('company', user, { marginTop: '1em' }) }
            </div>
        </div>
    }

}

UserCard.propTypes = {
  user: PropTypes.object.isRequired
};

export default Radium(UserCard);