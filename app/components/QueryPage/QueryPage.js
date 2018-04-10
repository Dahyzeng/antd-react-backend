import React from 'react';
import { Form, Card, Row, Col, Button, Modal, Table } from 'antd';
import {Link} from 'react-router-dom';

import SearchForm from './SearchForm';
import fieldsConfig from './../../common/fieldsConfig';
import Input from './../../components/Form/TInput';

const FormItem = Form.Item;
const dataSource = [
    {
        name: '管理员A',
        email: '11@qq.com',
    },
    {
        name: '管理员B',
        email: '11@qq.com',
    },
    {
        name: '管理员C',
        email: '11@qq.com',
    },
];


export default class AdminQueryPage extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
        this.columns = [
            {
                title: '名称',
                dataIndex: 'name',
            },
            {
                title: '邮箱',
                dataIndex: 'email',

            },
            {
                title: '操作',
                key: 'action',
                render: (text, record) => (
                    <span>
                        <a href="#" onClick={this.edit.bind(this, record)} style={{paddingRight: '10px'}}>编辑</a>
                    </span>
                )
            }
        ];
    }
    initTopButtons(){
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
    };

    initModals(buttons) {
        const self = this;
        if (buttons) {
            return buttons.map((eachButton, index) => {
                if (eachButton.openType === 'modal') {
                    const tmpObj = {};
                    const ModalForm = eachButton.modalForm;
                    tmpObj[eachButton.englishName + 'Button'] = false;
                    return <Modal key={index} title={eachButton.title} visible={self.state[eachButton.englishName + 'Button']} footer={null} onCancel={()=>{self.setState(tmpObj)}}>
                        <ModalForm handleSubmit={self.handleFormSubmit.bind(self, eachButton.requestUrl)}/>
                    </Modal>
                }
            });
        }
    };
    initColumns() {
        const columns = [];
        if (this.props.pageConfig.tableColumns) {
            this.props.pageConfig.tableColumns.map((column) => {
                columns.push({ title: fieldsConfig[column].title, dataIndex: fieldsConfig[column].code});
            })
        }
        return columns;
    };

    handleFormSubmit(url, values){
        console.log(url + ':' + values);
    };
    onSubmitSearch(values) {
        console.log(values);
    };

    renderNewPageButton(button, index){
        return <Button key={index} className="ant-btn ant-btn-primary query-page-button"><Link to={button.path}>{button.title}</Link></Button>
    };
    renderModalButton(button, index){
        const tmpObj = {};
        tmpObj[button.englishName + 'Button'] = true;
        return <Button key={index} className="ant-btn ant-btn-primary query-page-button" onClick={()=>{this.setState(tmpObj)}}>{button.buttonName}</Button>
    };
    renderConfirmButton(button, index) {
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
        const rowSelection = {
            key: [],
        };
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
                        <Table rowSelection={rowSelection} columns={this.initColumns()} dataSource={dataSource}/>
                    </div>
                </Card>
                {
                    this.initModals(this.props.pageConfig.topButtons)
                }
                {
                    this.initModals(this.props.pageConfig.lineButtons)
                }
            </div>
        );
    }
}