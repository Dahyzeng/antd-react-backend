import React from 'react';
import { connect } from 'react-redux'
import { HashRouter, BrowserRouter, Route, Switch} from 'react-router-dom';
import asyncComponent from './../common/asyncComponent';
import ReactTest from './../test/ReactTest'

@connect((state) => (
    { profile: state.profile }
))
export default class CustomRouter extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    {
                        routes.map((route, index) => {
                            return <Route key={index} path={route.path} component={route.component}/>
                        })
                    }
                </Switch>
            </BrowserRouter>
        )
    }
}

const routes = [
    {
        path: '/test',
        component: ReactTest
    },
    {
        path: "/login",
        component: asyncComponent(() => {return import('./../pages/login/Login');}),
    },
    {
        path: '/',
        component: asyncComponent(() => {return import('../pages/common/main_page_layout/MainPageLayout');}),
    },
];
