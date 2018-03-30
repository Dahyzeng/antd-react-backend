import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import GlobalHeader from '../GlobalHeader/GlobalHeader';
import Dashboard from './../../dashboard/Dashboard';

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
                    <div className="logo" />
                    <Menu theme="dark">
                        <Menu.Item key="1">
                            <Icon type="user"/>
                            <span>User</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="user"/>
                            <span>User</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="user"/>
                            <span>User</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <GlobalHeader>b</GlobalHeader>
                    <Content>
                        <BrowserRouter>
                            <Switch>
                                <Route path="/" component={Dashboard}/>
                            </Switch>
                        </BrowserRouter>
                    </Content>
                    <Footer>
                        d
                    </Footer>
                </Layout>

            </Layout>
        );
    }
}