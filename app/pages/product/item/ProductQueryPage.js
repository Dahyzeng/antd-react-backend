import React from 'react';
import { Breadcrumb } from 'antd';
import QueryPage from './../../../components/QueryPage/QueryPage';

const dataSource = [
    {
        productId: '10001',
        productName: 'iphone6s 32G',
        categoryName: '2001',
        inventory: 30,
        productStatus: 1,
    },
    {
        productId: '10002',
        productName: 'iphone5s 32G',
        categoryName: '2002',
        inventory: 30,
        productStatus: 1,
    },
    {
        productId: '10003',
        productName: 'iphone8s 32G',
        categoryName: '2003',
        inventory: 30,
        productStatus: 1,
    },
    {
        productId: '10004',
        productName: 'iphone8s 32G',
        categoryName: '2004',
        inventory: 30,
        productStatus: 1,
    },
];

export default class Product extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const queryPageConfig = {
            searchUrl: '/search',
            searchFields: ['productName', 'productId', 'categoryName', 'productStatus'],
            tableColumns: ['productId', 'productName', 'categoryName', 'inventory', 'productStatus'],
            topButtons: [
                {
                    buttonName: '新增',
                    title: '新增商品',
                    englishName: 'add',
                    openType: 'newPage',
                    path: '/product/item/detail',
                }
            ],
            lineButtons: [
                {
                    buttonName: '修改',
                    title: '信息修改',
                    openType: 'newPage',
                    path: '/product/item',
                },
                {
                    buttonName: '上架',
                    openType: 'confirm',
                    title: '确认上架',
                    message: '确定上架此商品？',
                    requestUrl: '/test',
                    action: this.handleDisable
                },
                {
                    buttonName: '下架',
                    openType: 'confirm',
                    title: '确认下架',
                    message: '确定下架此商品？',
                    requestUrl: '/test',
                    action: this.handleDisable
                }
            ]
        };
        return (
            <React.Fragment>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>主页</Breadcrumb.Item>
                    <Breadcrumb.Item>产品</Breadcrumb.Item>
                    <Breadcrumb.Item>商品管理</Breadcrumb.Item>
                </Breadcrumb>
                <QueryPage pageConfig = {queryPageConfig} dataSource={dataSource}/>
            </React.Fragment>
        )
    }
}

