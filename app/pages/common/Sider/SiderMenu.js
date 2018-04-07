import React from 'react';
import { Menu, Icon, Avatar } from 'antd';
import { Link } from 'react-router-dom';

export default class SiderMenu extends React.PureComponent {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <React.Fragment>
                <Avatar shape="square" className="logo" src="/static/img/Alanwalker.jpg" />
                <Menu theme="dark"  mode="inline">
                    <Menu.SubMenu title={<span><Icon type="user"/> <span>账户</span></span> }>
                        <Menu.Item key="1">
                            <Link to="/user/admin">管理员</Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to="/user/customer">普通用户</Link>
                        </Menu.Item>
                    </Menu.SubMenu>
                    <Menu.SubMenu title={<span><Icon type="shop"/> <span>产品</span></span> }>
                        <Menu.Item key="3">
                            <span>类别</span>
                        </Menu.Item>
                    </Menu.SubMenu>
                    <Menu.Item key="4">
                        <Icon type="pay-circle"/>
                        <span>订单</span>
                    </Menu.Item>
                    <Menu.Item key="5">
                        <Icon type="setting"/>
                        <span>网站设置</span>
                    </Menu.Item>
                </Menu>
            </React.Fragment>
        )
    }
}