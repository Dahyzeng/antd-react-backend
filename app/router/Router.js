import React from 'react';
import { connect } from 'react-redux'
import { HashRouter, BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './../pages/login/Login';
import MainPageLayout from '../pages/common/main_page_layout/MainPageLayout';
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
        component: Login,
    },
    {
        path: '/',
        component: MainPageLayout,
    },
];
