import React from 'react';
import { Form, Button } from 'antd';
import Input from './../../../components/Form/TInput';

const FormItem = Form.Item;

@Form.create()
export default class AdminForm extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    handleSubmit = (e) => {
        const self = this;
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                self.props.handleSubmit(values);
            }
        });
    };

    render() {
        return (
            <Form layout="inline" onSubmit={this.handleSubmit.bind(this)}>
                <Input form={form} name="name" value={this.props.admin.name}/>
                <Input form={form} name="email" value={this.props.admin.email}/>
                <FormItem>
                    <Button className="ant-btn ant-btn-primary query-page-button">
                        取消
                    </Button>
                    <Button htmlType="submit" className="ant-btn ant-btn-primary query-page-button">
                        保存
                    </Button>
                </FormItem>
            </Form>
        )
    }
}