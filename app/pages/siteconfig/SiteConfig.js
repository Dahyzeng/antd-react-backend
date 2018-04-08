import React from 'react';
import { Upload, Form, Breadcrumb, Icon } from 'antd';

const FormItem = Form.Item;

@Form.create()
export default class SiteConfig extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <React.Fragment>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>主页</Breadcrumb.Item>
                    <Breadcrumb.Item>网站设置</Breadcrumb.Item>
                </Breadcrumb>
                <Upload>
                    <div>
                        <Icon type="plus" />
                    </div>
                </Upload>
                {/*<Form>*/}
                    {/*<FormItem label={}>*/}
                        {/*{*/}
                            {/*getFieldDecorator('')*/}
                        {/*}*/}
                    {/*</FormItem>*/}
                {/*</Form>*/}
            </React.Fragment>
        )
    }
}