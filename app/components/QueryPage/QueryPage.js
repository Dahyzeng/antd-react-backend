import React from 'react';
import { Form, Card, Row, Col, Button, Modal, Table } from 'antd';
import {Link} from 'react-router-dom';

import SearchForm from './SearchForm';
import Input from './../../components/Form/TInput';

const FormItem = Form.Item;

export default class AdminQueryPage extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {};

    }
    initTopButtons = () => {
        const self = this;
        if (this.props.pageConfig.topButtons) {
            return this.props.pageConfig.topButtons.map((eachButton, index) => {
                if (eachButton.openType === 'newPage') {
                    return self.renderNewPageButton(eachButton, index);
                } else if (eachButton.openType === 'modal') {
                    return self.renderModalButton(eachButton, index);
                } else if (eachButton.openType === 'confirm') {
                    return self.renderConfirmButton(eachButton, index);
                }
            });
        }
    }

    initModals = (buttons) => {
        return buttons.map((eachButton, index) => {
            if (eachButton.openType === 'modal') {
                const tmpObj = {};
                const ModalForm = eachButton.modalForm;
                tmpObj[eachButton.englishName + 'Button'] = false;
                return <Modal key={index} title={eachButton.title} visible={this.state[eachButton.englishName + 'Button']} footer={null} onCancel={()=>{this.setState(tmpObj)}}>
                    <ModalForm handleSubmit={this.handleFormSubmit.bind(this, eachButton.action)}/>
                </Modal>
            }
        });
    };

    handleFormSubmit = (action, values) => {
        console.log(action + ':' + values);
    };
    onSubmitSearch = (values) => {
        console.log(values);
    };

    renderNewPageButton = (button, index) => {
        return <Button key={index} className="ant-btn ant-btn-primary query-page-button"><Link to={button.path}>{button.title}</Link></Button>
    };
    renderModalButton = (button, index) => {
        const tmpObj = {};
        tmpObj[button.englishName + 'Button'] = true;
        return <Button key={index} className="ant-btn ant-btn-primary query-page-button" onClick={()=>{this.setState(tmpObj)}}>{button.buttonName}</Button>
    };
    renderConfirmButton = (button, index) => {
        return <Button key={index} className="ant-btn ant-btn-primary query-page-button" onClick={()=>{
            Modal.confirm({
                title: button.title,
                content: button.message,
                onOk() {
                    button.action();
                },
                onCancel() {},
            });
        }}>{button.buttonName}</Button>
    };
    render() {
        const searchFields = this.props.pageConfig.searchFields || [];
        return (
            <div className="query-page">
                <Card>
                    <SearchForm searchFields={searchFields} onSubmitSearch={this.onSubmitSearch.bind(this)}/>
                    <div className="query-page-base-button">
                        {
                            this.initTopButtons()
                        }
                    </div>

                    <div>
                        {/*<Table rowSelection={rowSelection} columns={this.columns} dataSource={dataSource}/>*/}
                    </div>
                </Card>
                {
                    this.props.pageConfig
                }
            </div>
        );
    }
}