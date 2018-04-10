import React from 'react';
import { Form, Card, Row, Col, Button, Modal, Table } from 'antd';
import Input from './../../components/Form/TInput';


const FormItem = Form.Item;
@Form.create()
export default class SearchForm extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    handleSubmit(e) {
        e.preventDefault();
        const self = this;
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                self.props.onSubmitSearch(values);
            }
        });
    }

    render() {
        const searchFields = this.props.searchFields;
        const form = this.props.form;
        return (
            <Form layout="inline" onSubmit={this.handleSubmit.bind(this)}>
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
        )
    }
}