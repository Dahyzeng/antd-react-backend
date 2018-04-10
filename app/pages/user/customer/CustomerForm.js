import React from 'react';
import { Form, Button } from 'antd';
import Input from './../../../components/Form/TInput';

@Form.create()
export default class CustomerForm extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    handleSubmit(e) {
        const self = this;
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                self.props.handleSubmit(values);
            }
        });
    };

    render() {
        const {currentData} = this.props;
        return (
            <Form onSubmit={this.handleSubmit.bind(this)}>
                <Input form={this.props.form} name="name" value={currentData.name}/>
                <Input form={this.props.form} name="email" value={currentData.email}/>
                <Form.Item style={{textAlign: 'center'}}>
                    <Button htmlType="submit" className="ant-btn ant-btn-primary query-page-button">
                        保存
                    </Button>
                </Form.Item>
            </Form>
        )
    }
}