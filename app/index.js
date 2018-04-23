import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router/Router';
import { Provider } from 'react-redux';
import store from './store/Store';

ReactDOM.render(
    <Provider store={store}>
        <Router/>
    </Provider>, document.getElementById('root'));
