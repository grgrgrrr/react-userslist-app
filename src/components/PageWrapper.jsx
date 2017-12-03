import React, {Component} from "react";
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import Radium from 'radium';
import 'style-loader!css-loader!../../node_modules/font-awesome/css/font-awesome.min.css';

import {colors, shadow} from '../theme.js';
import Divider from '../components/Divider';

const styles = {
    pageWrapper: {
        paddingTop: '2em',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    contentContainer: {
        width: '60%',
        '@media only screen and (max-width: 1200px)': {
            width: '100%'
        },
        '@media screen and (max-device-width: 1200px)': {
            width: '100%'
        }
    },
    titleIcon: {
        color: colors.primary,
        marginRight: '1em'
    },
    title: {
        fontWeight: 'normal',
        paddingLeft: '2em',
        paddingRight: '2em'
    },
    listContainer: {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirecrion: 'row',
        justifyContent: 'space-between',
        '@media only screen and (max-width: 1200px)': {
            justifyContent: 'center',
        },
        '@media screen and (max-device-width: 1200px)': {
            justifyContent: 'center',
        }
    }
};

class PageWrapper extends Component {
    render() {
        const {title, titleIcon, pageWrapperStyle, listContainerStyle, titleStyle, backButtonLink} = this.props;
        return (
            <div style={{...styles.pageWrapper, ...pageWrapperStyle}}>
                <div style={styles.contentContainer}>
                    <h1 style={{...styles.title, ...titleStyle}}>
                        {
                            backButtonLink && <Link to={backButtonLink}>
                                <i style={styles.titleIcon} className="fa fa-angle-left" aria-hidden="true"></i>
                            </Link>
                        }
                        <i className={`fa ${titleIcon}`} style={styles.titleIcon}></i>
                        {title}
                    </h1>
                    <Divider/>
                    <div style={{...styles.listContainer, ...listContainerStyle}}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

PageWrapper.propTypes = {};

export default Radium(PageWrapper);