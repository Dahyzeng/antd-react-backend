import React from 'react';
import { Row, Col, Form, Input,Button, Table, Checkbox, Card } from 'antd';

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

const columns = [
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
                <a href="#" style={{paddingRight: '10px'}}>编辑</a>
                <a href="#" >查看</a>
            </span>
        )
    }
];

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
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const rowSelection = {
            key: [],
        };
        return (
            <div className="query-page">
                <Card>
                    <Form layout="inline">
                        <Row gutter={24}>
                            <Col xs={24} sm={8} md={8} lg={8}>
                                <FormItem label="管理员名字">
                                    {
                                        getFieldDecorator('name')(
                                            <Input/>
                                        )
                                    }
                                </FormItem>
                            </Col>
                            <Col xs={24} sm={8} md={8} lg={8}>
                                <FormItem label="邮箱">
                                    {
                                        getFieldDecorator('name')(
                                            <Input/>
                                        )
                                    }
                                </FormItem>
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
                        <Table rowSelection={rowSelection} columns={columns} dataSource={dataSource}/>
                    </div>
                </Card>
            </div>
        )
    }
}