import React from 'react';
import { Breadcrumb, Form, Button, Row, Col, Card, Input } from 'antd';

const FormItem = Form.Item;

export default class Order extends React.PureComponent{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>主页</Breadcrumb.Item>
                    <Breadcrumb.Item>订单</Breadcrumb.Item>
                    <Breadcrumb.Item>成交单</Breadcrumb.Item>
                </Breadcrumb>

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
                                            getFieldDecorator('email')(
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
                            <Table rowSelection={rowSelection} columns={this.columns} dataSource={dataSource}/>
                        </div>
                    </Card>
                </div>
            </React.Fragment>
        )
    }
}