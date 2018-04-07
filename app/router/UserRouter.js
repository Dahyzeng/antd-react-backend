import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import AdminQueryPage from './../pages/User/admin/AdminQueryPage';
import CustomerQueryPage from './../pages/User/customer/CustomerQueryPage';

export default class UserRouter extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <Switch>
                <Route path="/user/admin" component={AdminQueryPage}/>
                <Route path="/user/customer" component={CustomerQueryPage}/>
            </Switch>
        )
    }
}