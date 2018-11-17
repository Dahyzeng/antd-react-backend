import React from 'react';
import { Layout, Menu, Icon, Avatar } from 'antd';
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom';
import GlobalHeader from '../GlobalHeader/GlobalHeader';
import SiderMenu from './../Sider/SiderMenu';
import GlobalFooter from './../GlobalFooter/GlobalFooter';
import Dashboard from './../../dashboard/Dashboard';
import CustomerQueryPage from "../../user/customer/CustomerQueryPage";
import AdminQueryPage from "../../user/admin/AdminQueryPage";
import SiteConfig from "../../siteconfig/SiteConfig";
import Category from "../../product/category/Category";
import Product from "../../product/item/ProductQueryPage";

import './MainPageLayout.less'


const { Sider, Content, Footer } = Layout;

@connect((state) => ({
    profile: state.profile
}))
export default class MainPageLayout extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        if (!this.props.profile.isLogin) {
            this.props.history.push('/login');
        }
    }

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
        component: AdminQueryPage,
    },
    {
        path: '/user/customer',
        component: CustomerQueryPage
    },
    {
        path: '/site_config/base',
        component: SiteConfig
    },
    {
        path: '/product/category',
        component: Category
    },
    {
        path: '/product/item',
        component: Product
    },
    {
        path: '/',
        component: Dashboard
    }
]