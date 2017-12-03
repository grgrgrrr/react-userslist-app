import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { store } from './store/store';

import Routes from "./router/router";

const render = () => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <Routes />
            </Provider>
        </AppContainer>,
        document.getElementById('app'),
    )
};

render();

if (module.hot) {
    module.hot.accept('./components/App', () => { render() })
}