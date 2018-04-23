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
                    {
                        menus.map((menu, index) => {
                            if (menu.children) {
                                return (
                                    <Menu.SubMenu key={index} title={<span><Icon type={menu.icon}/><span>{menu.title}</span></span>}>
                                        {
                                            menu.children.map((childMenu) => {
                                                return (
                                                    <Menu.Item key={childMenu.link}>
                                                        <Link to={childMenu.link}>{childMenu.title}</Link>
                                                    </Menu.Item>
                                                )
                                            })
                                        }
                                    </Menu.SubMenu>
                                )
                            } else {
                                return (
                                    <Menu.Item key={index}>
                                        <Icon type={menu.icon}/>
                                        <span><Link to={menu.link} style={{color: 'rgba(255, 255, 255, 0.65)'}}>{menu.title}</Link></span>
                                    </Menu.Item>
                                )
                            }
                        })
                    }
                </Menu>
            </React.Fragment>
        )
    }
}

const menus = [
    {
        title: "账户",
        icon: "user",
        children: [
            {
                title: "管理员",
                link: "/user/admin",
            },
            {
                title: "会员",
                link: "/user/customer"
            }
        ]
    },
    {
        title: "产品",
        icon: "shop",
        children: [
            {
                title: "类别",
                link: "/product/category"
            },
            {
                title: "商品",
                link: "/product/item"
            },
        ]
    },
    {
        title: "订单",
        icon: "pay-circle",
        children: [
            {
                title: "成交单",
                link: "/order"
            },
            {
                title: "退单",
                link: "/refund"
            }
        ]
    },
    {
        title: "网站设置",
        icon: "setting",
        children: [
            {
                title: "基本设置",
                link: "/site_config/base"
            }
        ]
    }
];