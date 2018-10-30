import React from 'react';
import { Row, Col, Button, Checkbox } from 'antd'
import './index.less'
export default class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    handleEdit(item) {
        this.props.onEdit(item);
    }
    handleDelete(id) {
        this.props.onDelete(id)
    }
    handleComplete(id, complete) {
        this.props.onComplete(id, complete);
    }
    render() {
        return (
            <div className="item">
                <Row>
                    <Col span={4}>
                       <Checkbox onChange={this.handleComplete.bind(this, this.props.item.id, this.props.item.complete)} checked={this.props.item.complete}/>
                    </Col>
                    <Col span={16}>
                        <div className={this.props.item.complete ? 'delete' : ''}>{this.props.item.text}</div>
                    </Col>
                    <Col span={4}>
                        <div className="item-button">
                            <Button size="small" className="primary" onClick={this.handleEdit.bind(this, this.props.item)}>编辑</Button>
                            <Button size="small" className="danger" onClick={this.handleDelete.bind(this, this.props.item.id)}>删除</Button>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}