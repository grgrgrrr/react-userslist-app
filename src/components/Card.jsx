import React, {Component} from "react";
import PropTypes from 'prop-types';
import Radium from 'radium';

import variables from '!!sass-variable-loader!../styles/_variables.scss';

const styles = {
    card: {
        width: '25%',
        borderRadius: '2px',
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 6px, rgba(0, 0, 0, 0.1) 0px 1px 4px',
        margin: '0.5em',
        padding: '1em',
        ':hover': {
            boxShadow: 'rgba(0, 150, 136, 0.2) 0px 1px 15px, rgba(0, 150, 136, 0.2) 0px 1px 20px',
            cursor: 'pointer'
        },
        ':active': {
            boxShadow: 'rgba(0, 150, 136, 0.2) 0px 1px 15px, rgba(0, 150, 136, 0.2) 0px 1px 20px',
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
        color: variables.middleGrey
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