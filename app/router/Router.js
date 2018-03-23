import React from 'react';
import { Router, Route} from 'react-router';
import Login from './../pages/login/Login';

export default class CustomRouter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <Route path="/page">
                    <Route path="/login" component={Login}/>
                </Route>
            </Router>
        )
    }
}