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
                    <Col xs={24} sm={12} md={12} lg={12} xl={6}>
                        <Card hoverable bordered={false} className="cardInfo">
                            <span>用户总量</span>
                            <span className="number">888</span>
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} md={12} lg={12} xl={6}>
                        <Card hoverable bordered={false} className="cardInfo">
                            <span>订单总量</span>
                            <span className="number">9999</span>
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} md={12} lg={12} xl={6}>
                        <Card hoverable bordered={false} className="cardInfo">
                            <span>商品总数</span>
                            <span className="number">9999</span>
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} md={12} lg={12} xl={6}>
                        <Card hoverable bordered={false} className="cardInfo">
                            <span>销售总额</span>
                            <span className="number">￥888888888</span>
                        </Card>
                    </Col>
                </Row>

            </React.Fragment>

        )
    }
}