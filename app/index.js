import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router/Router';
import { Provider } from 'react-redux';
import store from './store/Store';
import sagas from './sagas'
store.runSaga(sagas);
ReactDOM.render(
    <Provider store={store}>
        <Router/>
    </Provider>, document.getElementById('root'));
