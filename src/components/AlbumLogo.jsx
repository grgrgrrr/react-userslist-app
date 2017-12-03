import React, {Component} from "react";
import variables from '!!sass-variable-loader!../styles/_variables.scss';

const styles = {
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        height: '50%',
        alignItems: 'center'
    },
    square: {
        width: '5em',
        height: '5em'
    }
};

export default () => {
    return <div>
        <div style={styles.row}>
            <div style={{
                ...styles.square,
                width: '3em',
                height: '3em',
                marginLeft: '1em',
                marginRight: '1em',
                backgroundColor: variables.lightGrey
            }}></div>
            <div style={{
                ...styles.square,
                backgroundColor: variables.lightPrimary
            }}></div>
        </div>
        <div style={styles.row}>
            <div style={{
                ...styles.square,
                width: '4em',
                height: '4em',
                marginLeft: '0.5em',
                marginRight: '0.5em',
                marginTop: '0.5em',
                backgroundColor: variables.middleGrey
            }}></div>
            <div style={{
                ...styles.square,
                width: '2em',
                height: '2em',
                marginLeft: '1.5em',
                marginRight: '1.5em',
                backgroundColor: variables.darkGrey
            }}></div>
        </div>
    </div>
}