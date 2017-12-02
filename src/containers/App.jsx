import React, {Component} from "react";

import "../styles/main.scss";

export default class App extends Component {
    render() {
        return (
            <div>
                <div>
                   { this.props.children }
                </div>
            </div>
        );
    }
}