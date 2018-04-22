import React from 'react';
import { Form, Card, Row, Col, Button, Modal, Table } from 'antd';
import Moment from 'moment';
import {Link} from 'react-router-dom';

import SearchForm from './SearchForm';
import fieldsConfig from './../../common/fieldsConfig';

export default class QueryPage extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            currentData: {},
        };
    }
    initButtons(buttons){
        const self = this;
        if (buttons) {
            return buttons.map((eachButton, index) => {
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
                        <ModalForm handleSubmit={self.handleFormSubmit.bind(self, eachButton.requestUrl)} currentData={self.state.currentData}/>
                    </Modal>
                }
            });
        }
    };
    initColumns() {
        let columns = [];
        if (this.props.pageConfig.tableColumns) {
            columns = this.props.pageConfig.tableColumns.map((column) => {
                const field = fieldsConfig[column];
                if (field.inputType === 'select') {
                    return { title: field.title, key:field.code, render: (record) => {
                        const option = field.options.find((option)=> {
                            return option.value === record[column]
                        });
                        return option ? <span>{option.title}</span> : '????'
                    }};
                } else if (field.inputType === 'date') {
                    return {
                        title: field.title, key:field.code, render: (record) => {
                            return new Moment(record[column]).format(field.dateFormat || 'YYYY-MM-DD');
                        }
                    }
                }
                else {
                    return { title: field.title, key:field.code, dataIndex: field.code};
                }
            })
        }
        if (this.props.pageConfig.lineButtons) {
            const self = this;
            columns.push({
                title: "操作",
                key: "action",
                render: (text, record) => {
                    return this.props.pageConfig.lineButtons.map((button, index) => {
                        if (button.openType === 'newPage') {
                            return <Link key={index} to={button.path} style={{paddingRight: '10px'}}>{button.buttonName}</Link>;
                        } else if (button.openType === 'modal') {
                            const tmpObj = {};
                            tmpObj[button.englishName + 'Button'] = true;
                            tmpObj.currentData = record;
                            return <a key={index} style={{paddingRight: '10px'}} href="javascript:;" onClick={()=>{this.setState(tmpObj)}}>{button.buttonName}</a>
                        } else if (button.openType === 'confirm') {
                            return <a key={index} style={{paddingRight: '10px'}} onClick={()=>{
                                Modal.confirm({
                                    title: button.title,
                                    content: button.message,
                                    onOk() {
                                        button.action(record);
                                    },
                                    onCancel() {},
                                });
                            }}>{button.buttonName}</a>
                        }
                    })
                }
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
                            this.initButtons(this.props.pageConfig.topButtons)
                        }
                    </div>

                    <div>
                        <Table rowSelection={rowSelection} columns={this.initColumns()} dataSource={this.props.dataSource}/>
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