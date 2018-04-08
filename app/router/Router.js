import React from 'react';
import { HashRouter, BrowserRouter, Route, Switch} from 'react-router-dom';
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
                    {
                        routes.map((route, index) => {
                            return <Route key={index} path={route.path} component={route.component}/>
                        })
                    }
                </Switch>
            </HashRouter>
        )
    }
}

const routes = [
    {
        path: "/login",
        component: Login,
    },
    {
        path: '/',
        component: MainPageLayout,
    },
];