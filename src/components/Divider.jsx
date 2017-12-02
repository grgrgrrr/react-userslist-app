import React, {Component} from "react";
import variables from '!!sass-variable-loader!../styles/_variables.scss';

const styles = {
    borderBottom: `1px solid ${variables.lightGrey}`
};

class Divider extends Component {
    render() {
        return (
            <div style={styles}>
            </div>
        );
    }
}

export default Divider;