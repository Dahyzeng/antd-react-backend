import React from 'react';
import { Row, Col, Card } from 'antd';
import './Dashboard.less'

export default class Dashboard extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <React.Fragment>
                <Row gutter={24}>
                    <Col xs={24} sm={12} md={12} lg={12} xl={6} className="cardInfo">
                        <Card hoverable title="Card title" bordered={false}>Card content</Card>
                    </Col>
                    <Col xs={24} sm={12} md={12} lg={12} xl={6} className="cardInfo">
                        <Card hoverable title="Card title" bordered={false}>Card content</Card>
                    </Col>
                    <Col xs={24} sm={12} md={12} lg={12} xl={6} className="cardInfo">
                        <Card hoverable title="Card title" bordered={false}>Card content</Card>
                    </Col>
                    <Col xs={24} sm={12} md={12} lg={12} xl={6} className="cardInfo">
                        <Card hoverable title="Card title" bordered={false}>Card content</Card>
                    </Col>
                </Row>
            </React.Fragment>

        )
    }
}