import React, {Component} from "react";
import {colors, shadow} from '../theme.js';

const styles = {
    borderBottom: `1px solid ${colors.lightGrey}`,
    marginBottom: '1em'
};

export default ({style}) => {
    return <div style={{...styles, ...style}}></div>
};