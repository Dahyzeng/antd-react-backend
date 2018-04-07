import React from 'react';
import { Layout, Menu, Icon, Avatar } from 'antd';
import { Route, Switch } from 'react-router-dom';
import GlobalHeader from '../GlobalHeader/GlobalHeader';
import SiderMenu from './../Sider/SiderMenu';
import GlobalFooter from './../GlobalFooter/GlobalFooter';
import Dashboard from './../../dashboard/Dashboard';
import UserRouter from './../../../router/UserRouter';

import './MainPageLayout.less'

const { Sider, Content, Footer } = Layout;

export default class MainPageLayout extends React.PureComponent {
    constructor(props) {
        super(props);
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
                            <UserRouter/>
                            <Route path="/" component={Dashboard}/>
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