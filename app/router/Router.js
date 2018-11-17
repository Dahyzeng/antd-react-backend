import React from 'react';
import { connect } from 'react-redux'
import { HashRouter, BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import asyncComponent from './../common/asyncComponent';
import ReactTest from './../test/ReactTest';
import MainPageLayout from '../pages/common/main_page_layout/MainPageLayout';

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
                            if (route.component) {
                                return <Route key={index} path={route.path} component={route.component}/>
                            } else if (route.render) {
                                return <Route key={index} path={route.path} render={route.render.bind(this, this.props)}/>
                            }

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
        render: (params, props) => {
            if (params.profile.isLogin) {
                return <MainPageLayout {...props}/>
            } else {
                return <Redirect
                    to={{
                        pathname: "/login",
                    }}
                />
            }
        },
    },
];
