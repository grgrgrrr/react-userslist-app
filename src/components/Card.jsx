import React, {Component} from "react";
import PropTypes from 'prop-types';
import Radium from 'radium';

import {colors, shadow} from '../theme.js';

const styles = {
    card: {
        width: '28%',
        borderRadius: '2px',
        boxShadow: shadow.normal,
        marginTop: '0.5em',
        marginBottom: '0.5em',
        marginLeft: '0.1em',
        marginRight: '0.1em',
        padding: '1em',
        ':hover': {
            boxShadow: shadow.highlighted,
            cursor: 'pointer'
        },
        ':active': {
            boxShadow: shadow.highlighted,
            cursor: 'pointer'
        },
        '@media only screen and (max-width: 1070px)': {
            width: '80%'
        },
        '@media screen and (max-device-width: 1070px)': {
            width: '80%'
        }
    },
    cardTitle: {
        fontWeight: 'normal',
        margin: '2px 0px'
    },
    cardSubtitle: {
        fontWeight: 'normal',
        margin: '2px 0px',
        color: colors.middleGrey
    },
    cardBody: {
        marginTop: '1em'
    }
};


class Card extends Component {
    render(){
        const { title, subtitle, style } = this.props;
        return <div style={{ ...styles.card, ...style }} onClick={this.props.handleOnClick}>
            <h3 style={styles.cardTitle}>
                {title}
            </h3>
            <h5 style={styles.cardSubtitle}>
                {subtitle}
            </h5>
            <div style={styles.cardBody}>
                { this.props.children }
            </div>
        </div>
    }

}

Card.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    handleOnClick: PropTypes.func,
    style: PropTypes.object
};

export default Radium(Card);