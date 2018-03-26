import React from 'react';
import { Form, Input } from 'element-react'
import styles from './login.less';

export default class Login extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className={styles.box}>
                <Form>
                    <Form.Item>
                        <Input type={}/>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}