import React from 'react';
import { Row, Col, Form, Button, Table, Checkbox, Card, Modal, Breadcrumb } from 'antd';

import Input from './../../../components/Form/TInput';

const FormItem = Form.Item;
const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};

const dataSource = [
    {
        name: '用户A',
        email: '11@qq.com',
    },
    {
        name: '用户B',
        email: '11@qq.com',
    },
    {
        name: '用户C',
        email: '11@qq.com',
    },
];

@Form.create()
export default class CustomerQueryPage extends React.PureComponent {
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
        const form = this.props.form;
        const rowSelection = {
            key: [],
        };
        return (
            <React.Fragment>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>主页</Breadcrumb.Item>
                    <Breadcrumb.Item>账户</Breadcrumb.Item>
                    <Breadcrumb.Item>会员</Breadcrumb.Item>
                </Breadcrumb>
                <div className="query-page">
                    <Card>
                        <Form layout="inline">
                            <Row gutter={24}>
                                <Col xs={24} sm={8} md={8} lg={8}>
                                    <Input form={this.props.form} name="name" skipeValidation={true}/>
                                </Col>
                                <Col xs={24} sm={8} md={8} lg={8}>
                                    <Input name="email" form={this.props.form} skipeValidation={true}/>
                                </Col>
                                <Col xs={24} sm={8} md={8} lg={8}>
                                    <FormItem>
                                        <Button htmlType="submit" className="ant-btn ant-btn-primary query-page-button">
                                            查询
                                        </Button>
                                        <Button>
                                            重置
                                        </Button>
                                    </FormItem>
                                </Col>
                            </Row>
                        </Form>
                        <div className="query-page-base-button">
                            <FormItem>
                                <Button className="ant-btn ant-btn-primary query-page-button">新增</Button>
                                <Button className="ant-btn ant-btn-primary">删除</Button>
                            </FormItem>
                        </div>

                        <div>
                            <Table rowSelection={rowSelection} columns={this.columns} dataSource={dataSource}/>
                        </div>
                    </Card>
                    <Modal title="编辑" visible={this.state.editActive} onOk={this.handlePopupOk.bind(this)} onCancel={this.handlePopupCancel.bind(this)} okText="确认" cancelText="取消">
                        <Form layout="inline">
                            <Input form={form} name="name" value={this.state.currentAdmin.name}/>
                            <Input form={form} name="email" value={this.state.currentAdmin.email}/>
                        </Form>
                    </Modal>
                </div>
            </React.Fragment>
        )
    }
}