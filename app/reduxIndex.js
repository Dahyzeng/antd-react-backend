import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { todoReducer } from './test/redux/reducer/todos';
import App from './test/redux/todo'

const initState = {
    todoItems: []
};

const store = createStore(todoReducer, initState);
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root')
);