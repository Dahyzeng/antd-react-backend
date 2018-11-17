import React from 'react';
import { Form, Card, Row, Col, Button, Modal, Table, DatePicker } from 'antd';
import Input from './../../components/Form/TInput';
import Select from './../../components/Form/TSelect';
import Range from './../../components/Form/TRange';
import fieldsConfig from './../../common/fieldsConfig';

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
                            const config = fieldsConfig[field];
                            if (config.inputType === 'text') {
                                return <Col key={index} xs={24} sm={8} md={8} lg={8}>
                                    <Input skipeValidation={true} form={form} name={field}/>
                                </Col>
                            } else if (config.inputType === 'select') {
                                return <Col key={index} xs={24} sm={8} md={8} lg={8}>
                                    <Select name={field} form={form} selectConfig={{style:{ width: 120 }}}  skipeValidation={true}/>
                                </Col>
                            } else if (config.inputType === 'date') {
                                return <Col key={index} xs={24} sm={8} md={8} lg={8}>
                                    <Range name={field} form={form} config={{ placeholder: ['开始时间', '结束时间']}}/>
                                </Col>
                            }
                        })
                    }
                    <Col xs={24} sm={8} md={8} lg={8}>
                        <Form.Item>
                            <Button htmlType="submit" className="ant-btn ant-btn-primary query-page-button">
                                查询
                            </Button>
                            <Button>
                                重置
                            </Button>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        )
    }
}