import React, { PureComponent } from 'react';
import {  Form, Select } from 'antd';
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
export default class TSelect extends PureComponent {
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
        const options = this.props.options || this.state.fieldConfig.options || [];
        const selectConfig = this.props.selectConfig;
        const optionsConfig = this.props.optionsConfig;
        const label = this.props.emptyLabel ? '' : fieldConfig.title;
        return (
            <Form.Item label={label} {...formItemLayout}>
                {
                    getFieldDecorator(fieldConfig.code, {
                        initialValue: this.props.value,
                        rules: this.props.skipeValidation ? [] : fieldConfig.validateRules,
                    })(
                        <Select {...selectConfig}>
                        {

                            options.map((option, index) => (
                                <Select.Option key="index" value={option.value} {...optionsConfig}>
                                    {option.title}
                                </Select.Option>
                            ))
                        }
                    </Select>
                    )
                }


            </Form.Item>
        );
    }
}
