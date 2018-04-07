import React from 'react';
import { HashRouter, Route, Switch} from 'react-router-dom';
import Login from './../pages/login/Login';
import MainPageLayout from '../pages/common/main_page_layout/MainPageLayout';

export default class CustomRouter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path="/login" component={Login}/>
                    <Route path="/" component={MainPageLayout}/>
                </Switch>
            </HashRouter>
        )
    }
}