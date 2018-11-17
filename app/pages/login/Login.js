import React from 'react';
import { connect } from 'react-redux'
import { Row, Col, Form, Input, Button, Icon, Checkbox, Select, message } from 'antd';
import { PROFILE } from './../../common/actions'
import './login.less';

const FormItem = Form.Item;

@connect((state) => (
    { profile: state.profile }
))
@Form.create()
export default class Login extends React.PureComponent{
    constructor(props) {
        super(props);
        this.state={
            selectValue:['aa', 'bb']
        }
    }

    handleLoginSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.dispatch({type: PROFILE.LOGIN_ACTION, payload: values, callback: (resp) => {
                    if (resp.success) {
                        this.props.history.push('/');
                    } else {
                        message.error(resp.msg)
                    }
                }});
            }
        })
    }


    render() {
        const { getFieldDecorator } = this.props.form;
        return(
                <Row gutter={24} align="middle" justify="center" type="flex" className="box">
                    <Col xs={20} sm={16} md={8} lg={4}>
                        <div>
                            <h2 className="login-title">后端管理系统</h2>
                        </div>
                        <Form onSubmit={this.handleLoginSubmit.bind(this)}>
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
                                    getFieldDecorator('password', {
                                        rules: [{required: true, message: '请输入密码！'}]
                                    })(
                                        <Input type="password" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }}/>} placeholder="密码"/>
                                    )
                                }
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: true,
                                })(
                                    <Checkbox>Remember me</Checkbox>
                                )}
                                <a className="login-form-forgot" href="#">Forgot password?</a>
                                <Button type="primary" htmlType="submit" className="login-form-button">登录</Button>
                            </FormItem>
                        </Form>
                    </Col>
                </Row>
        )
    }
}