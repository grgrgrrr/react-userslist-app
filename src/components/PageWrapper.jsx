import React, {Component} from "react";
import PropTypes from 'prop-types';
import Radium from 'radium';
import 'style-loader!css-loader!../../node_modules/font-awesome/css/font-awesome.min.css';

import variables from '!!sass-variable-loader!../styles/_variables.scss';
import Divider from '../components/Divider';

const styles = {
    pageWrapper: {
        paddingTop: '2em',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    contentContainer: {
        width: '80%',
        '@media only screen and (max-width: 768px)': {
            width: '100%'
        },
        '@media screen and (max-device-width: 768px)': {
            width: '100%'
        }
    },
    titleIcon: {
        color: variables.primary,
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
        justifyContent: 'center'
    }
};

class PageWrapper extends Component {
    render() {
        const {title, titleIcon, pageWrapperStyle, listContainerStyle, titleStyle} = this.props;
        return (
            <div style={{...styles.pageWrapper, ...pageWrapperStyle}}>
                <div style={styles.contentContainer}>
                    <h1 style={{...styles.title, ...titleStyle}}>
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