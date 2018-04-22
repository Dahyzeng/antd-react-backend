import React from 'react';
import { Breadcrumb, Card, Tree, Modal, Form, Button, Row, Col } from 'antd';
import Input from '../../../components/Form/TInput';
import Select from '../../../components/Form/TSelect';
const TreeNode = Tree.TreeNode;

@Form.create()
export default class Category extends React.PureComponent{
    constructor(props){
        super(props);
        this.state = {
            formVisible: false,
            modalTitle: '',
            currentCategory: ''
        }
    }

    showModal(category, { node={} }) {
        if (category) {
            this.setState({
                formVisible: true,
                modalTitle: '类别信息',
                currentCategory: node.props.dataRef
            })
        } else {
            this.setState({
                formVisible: true,
                modalTitle: '新增类别',
                currentCategory: ''
            })
        }
    }

    modalClose() {
        this.setState({
            formVisible: false,
            currentCategory: ''
        })
    }

    render() {
        const self = this;
        const currentCategory = this.state.currentCategory || {};
        return (
            <React.Fragment>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>主页</Breadcrumb.Item>
                    <Breadcrumb.Item>产品</Breadcrumb.Item>
                    <Breadcrumb.Item>类别</Breadcrumb.Item>
                </Breadcrumb>

                <Row gutter={24}>
                    <Col xs={24} sm={24} md={8} lg={8}>
                        <Card title="类别总览" extra={<a href="javascript:;" onClick={self.showModal.bind(self, '', {})}>新增</a>} style={{ width: 300 }}>
                            <Tree showLine onSelect={self.showModal.bind(self)}>
                                {
                                    treeData.map((node) =>  {
                                        if (node.children && node.children.length > 0) {
                                            return <TreeNode title={node.title} key={node.id} dataRef={node}>
                                                {
                                                    node.children.map((child) => {
                                                        return <TreeNode title={child.title} key={child.id} dataRef={child}/>
                                                    })
                                                }
                                            </TreeNode>
                                        } else {
                                            return <TreeNode title={node.title} dataRef={node} key={node.id}/>
                                        }
                                    })
                                }
                            </Tree>
                        </Card>
                    </Col>
                    {
                        this.state.formVisible ?
                            <Col xs={24} sm={24} md={8} lg={8}>
                                <Card title="类别信息" extra={currentCategory.parentId ? '' : <a href="javascript:;" onClick={self.showModal.bind(self)}>添加子类</a>} style={{ width: 300 }}>
                                    <Form>
                                        <Input form={this.props.form} name="categoryName" value={this.state.currentCategory.title}/>
                                        <Select form={this.props.form} selectConfig={{ mode: 'multiple' }} options={attributeData} name="categoryAttribute"/>
                                        <Form.Item style={{textAlign: 'center'}}>
                                            <Button htmlType="submit">
                                                保存
                                            </Button>
                                        </Form.Item>
                                    </Form>
                                </Card>
                            </Col>
                            : ''
                    }

                </Row>


            </React.Fragment>
        )
    }
}

const attributeData = [
    {
        value: '1001',
        title: '尺码',
    },
    {
        value: '1002',
        title: '颜色'
    },
    {
        value: '1003',
        title: '长短'
    }
];

const treeData = [
    {
        id: 1,
        title: "男装",
        parentId: null,
        children: [
            {
                id: 11,
                title: "运动装",
                parentId: 1,
            },
            {
                id: 12,
                title: "休闲装",
                parentId: 1,
            },
            {
                id: 13,
                title: "羽绒服",
                parentId: 1,
            },
        ]
    },
    {
        id: 2,
        title: "女装",
        parentId: null,
        children: [
            {
                id: 21,
                title: "运动装",
                parentId: 2,
            },
            {
                id: 22,
                title: "休闲装",
                parentId: 2,
            },
            {
                id: 23,
                title: "羽绒服",
                parentId: 2,
            },
        ]
    },
    {
        id: 3,
        title: "男鞋",
        parentId: null,
        children: [
            {
                id: 31,
                title: "运动鞋",
                parentId: 3,
            },
            {
                id: 32,
                title: "休闲鞋",
                parentId: 3
            },
        ]
    },
];