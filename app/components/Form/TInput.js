import React, { PureComponent } from 'react';
import {  Form, Input } from 'antd';
import queryFields from "./../../common/fieldsConfig";
const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};
export default class TInput extends PureComponent {
    constructor(props) {
        super(props);
        const name = props.name;
        if(!name) {
            throw "字段名不能为空";
        }
        const fieldConfig = queryFields[name];
        if(!fieldConfig){
            throw `common/fieldsConfig.js中找不到,字段名${name}的配置项`;
        }
        this.state = {fieldConfig: fieldConfig};
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const fieldConfig = this.state.fieldConfig;
        const options = this.props.options;
        const label = this.props.emptyLabel ? '' : fieldConfig.title;
        return (
            <Form.Item {...formItemLayout} label={label}>
                {getFieldDecorator(fieldConfig.code, {
                    initialValue: this.props.value,
                    rules: this.props.skipeValidation ? [] : fieldConfig.validateRules,
                })(
                    <Input {...options} placeholder={`请输入${fieldConfig.title}`} />
                )}
            </Form.Item>
        );
    }
}
