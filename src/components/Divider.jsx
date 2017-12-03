import React, {Component} from "react";
import variables from '!!sass-variable-loader!../styles/_variables.scss';

const styles = {
    borderBottom: `1px solid ${variables.lightGrey}`,
    marginBottom: '1em'
};

export default ({style}) => {
    return <div style={{...styles, ...style}}></div>
};