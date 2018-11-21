import React from 'react';
import { Form, Button, Row, Col } from 'antd';
import Input from './../../../components/Form/TInput';

@Form.create()
export default class AdminForm extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                if (this.props.currentData.id) {
                    values.id = this.props.currentData.id
                }
                this.props.handleSubmit(values);
            }
        });
    };

    render() {
        const {currentData, form} = this.props;
        return (
            <Form onSubmit={this.handleSubmit.bind(this)}>
                <Input form={form} name="name" value={currentData.name}/>
                <Input form={form} name="email" value={currentData.email}/>
                <Form.Item style={{textAlign: 'center'}}>
                    <Button htmlType="submit" className="ant-btn ant-btn-primary query-page-button">
                        保存
                    </Button>
                </Form.Item>
            </Form>
        )
    }
}