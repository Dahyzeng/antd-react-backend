import React from 'react';
import { Form, Breadcrumb } from 'antd';
import QueryPage from './../../../components/QueryPage/QueryPage';
import AdminForm from './AdminForm';

const dataSource = [
    {
        name: '管理员A',
        email: '11@qq.com',
    },
    {
        name: '管理员B',
        email: '11@qq.com',
    },
    {
        name: '管理员C',
        email: '11@qq.com',
    },
];

@Form.create()
export default class AdminQueryPage extends React.PureComponent {
    constructor(props) {
        super(props);
        this.columns = [
            {
                title: '名称',
                dataIndex: 'name',
            },
            {
                title: '邮箱',
                dataIndex: 'email',

            },
            {
                title: '操作',
                key: 'action',
                render: (text, record) => (
                    <span>
                        <a href="#" onClick={this.edit.bind(this, record)} style={{paddingRight: '10px'}}>编辑</a>
                    </span>
                )
            }
        ];
        this.state = {
            editActive: false,
            currentAdmin: {}
        }
    }
    handleCreateNew(values) {
        console.log(values);
    }
    handleEdit(values) {
        console.log(values)
    }
    handleDisable(values) {
        console.log(values)
    }

    render() {
        const queryPageConfig = {
            searchUrl: '/search',
            searchFields: ['name', 'email'],
            tableColumns: ['name', 'email'],
            topButtons: [
                {
                    buttonName: '新增',
                    englishName: 'add',
                    openType: 'modal',
                    modalForm: AdminForm,
                    formFields: ['name', 'email'],
                }
            ],
            lineButtons: [
                {
                    buttonName: '修改',
                    title: '信息修改',
                    openType: 'modal',
                    formFields: ['name', 'email'],
                    action: this.handleEdit
                },
                {
                    buttonName: '禁用',
                    openType: 'confirm',
                    title: '确认禁用',
                    message: '确定禁用此用户？',
                    action: this.handleDisable
                }
            ]
        };
        return (
            <React.Fragment>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>主页</Breadcrumb.Item>
                    <Breadcrumb.Item>账户</Breadcrumb.Item>
                    <Breadcrumb.Item>管理员</Breadcrumb.Item>
                </Breadcrumb>
                <QueryPage pageConfig = {queryPageConfig}/>
            </React.Fragment>
        )
    }
}