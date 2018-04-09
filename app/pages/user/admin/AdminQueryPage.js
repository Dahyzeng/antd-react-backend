import React from 'react';
import { Form, Breadcrumb } from 'antd';
import QueryPage from './../../../components/QueryPage/QueryPage';

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
    edit(record, e) {
        e.preventDefault();
        this.setState({
            editActive: true,
            currentAdmin: record
        })
    }
    handlePopupOk() {
        this.setState({
            editActive: false,
            currentAdmin: {},
        })
    }
    handlePopupCancel() {
        this.setState({
            editActive: false,
            currentAdmin: {},
        })
    }
    render() {
        const queryPageConfig = {
            searchFields: ['name', 'email'],
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