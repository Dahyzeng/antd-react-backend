import React from 'react';
import { Layout, Menu, Icon, Avatar } from 'antd';
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom';
import asyncComponent from './../../../common/asyncComponent';
import GlobalHeader from '../GlobalHeader/GlobalHeader';
import SiderMenu from './../Sider/SiderMenu';
import GlobalFooter from './../GlobalFooter/GlobalFooter';

import './MainPageLayout.less'


const { Sider, Content, Footer } = Layout;

@connect((state) => ({
    profile: state.profile
}))
export default class MainPageLayout extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    // componentDidMount() {
    //     if (!this.props.profile.isLogin) {
    //         this.props.history.push('/login');
    //     }
    // }

    render() {
        return (
            <Layout className="mainLayout">
                <Sider  breakpoint="lg" collapsedWidth="0">
                    <SiderMenu/>
                </Sider>
                <Layout>
                    <GlobalHeader>b</GlobalHeader>
                    <Content className="content">
                        <Switch>
                            {
                                routes.map((route, index) => {
                                    return <Route key={index} path={route.path} component={route.component}/>
                                })
                            }
                        </Switch>
                    </Content>
                    <Footer>
                        <GlobalFooter/>
                    </Footer>
                </Layout>

            </Layout>
        );
    }
}

const routes = [
    {
        path: '/user/admin',
        component: asyncComponent(() => import('../../user/admin/AdminQueryPage')),
    },
    {
        path: '/user/customer',
        component: asyncComponent(() => import('../../user/customer/CustomerQueryPage'))
    },
    {
        path: '/site_config/base',
        component: asyncComponent(() => import('../../siteconfig/SiteConfig'))
    },
    {
        path: '/product/category',
        component: asyncComponent(() => import('../../product/category/Category'))
    },
    {
        path: '/product/item',
        component: asyncComponent(() => import('../../product/item/ProductQueryPage'))
    },
    {
        path: '/',
        component: asyncComponent(() => import('./../../dashboard/Dashboard'))
    }
]