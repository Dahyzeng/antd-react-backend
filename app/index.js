import React from 'react';
import ReactDOM from 'react-dom';
import {withRouter} from 'react-router';
import Router from './router/Router';

ReactDOM.render(withRouter(<Router/>), document.getElementById('root'));
