import React from 'react';
import { Form, Input,Button, Icon } from 'antd';
import './login.less';

const FormItem = Form.Item;

@Form.create()
export default class Login extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return(
            <div className="box">
                <Form >
                    <FormItem>
                        {
                            getFieldDecorator('email', {
                                rules: [{required: true, message: '请输入邮箱！'}]
                            })(
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }}/>} placeholder="邮箱"/>
                            )
                        }
                    </FormItem>
                    <FormItem>
                        {
                            getFieldDecorator('email', {
                                rules: [{required: true, message: '请输入密码！'}]
                            })(
                                <Input type="password" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }}/>} placeholder="邮箱"/>
                            )
                        }
                    </FormItem>
                    <FormItem>
                        <Button type="primary" className="login-form-button">登录</Button>
                    </FormItem>
                </Form>
            </div>
        )
    }
}