import React from 'react';
import { Avatar, Layout, Dropdown, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import './GlobalHeader.less'

const { Header } = Layout;
const infoMenu = (
    <Menu className="infoMenu">
        <Menu.Item>
            <Link to=""><Icon type="setting" className="icon"/>设置</Link>
        </Menu.Item>
        <Menu.Item>
            <Link to=""><Icon type="logout" className="icon"/>注销</Link>
        </Menu.Item>
    </Menu>
);
export default class GlobalHeader extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Header className="globalHeader">
                <div className="headerNav">
                    <Dropdown overlay={infoMenu} className="info">
                        <div>
                            <Avatar src="/static/img/Alanwalker.jpg"/>
                            <span>Taurin</span>
                        </div>
                    </Dropdown>
                </div>
            </Header>
        )
    }
}