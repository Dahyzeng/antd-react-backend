import React from 'react';
import { Form, Card, Row, Col, Button, Modal, Table } from 'antd';
import Input from './../../components/Form/TInput';

const FormItem = Form.Item;
@Form.create()
export default class AdminQueryPage extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        const searchFields = this.props.searchFields || [];
        return (
            <div className="query-page">
                <Card>
                    <Form layout="inline">
                        <Row gutter={24}>
                            {
                                searchFields.map((field, index) => {
                                    return <Col key={index} xs={24} sm={8} md={8} lg={8}>
                                        <Input skipeValidation={true} form={form} name={field}/>
                                    </Col>
                                })
                            }
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
        );
    }
}