import React from 'react';
import { Breadcrumb, Card, Tree, Modal, Form, Button, Row, Col } from 'antd';
import Input from './../../components/Form/TInput';
import Select from './../../components/Form/TSelect';
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

    handleFormSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            console.log(values);
            this.props.form.resetFields();
        })
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

    addChild() {
        this.setState({
            formType: 'child',
            childCategory: {parentId: this.state.currentCategory.id},
        })
    }

    backToParent() {
        this.setState({
            formType: 'parent',
            childCategory: '',
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
                                <Card style={{ width: 300 }}>
                                    {
                                        this.state.formType === 'child' ?
                                            <div>
                                                <a href="javascript:;" onClick={this.backToParent.bind(this)}>&lt;&lt;返回</a>
                                            </div>
                                            :
                                            currentCategory.parentId && currentCategory.title ?
                                                ''
                                                : <a href="javascript:;" onClick={this.addChild.bind(this)}>添加子类</a>
                                    }
                                    <Form onSubmit={this.handleFormSubmit.bind(this)}>
                                        <Input form={this.props.form} name="categoryName" value={this.state.formType === 'child' ? '' : this.state.currentCategory.title}/>
                                        <Select selectConfig={{ mode:'multiple' }} form={this.props.form} options={options} name="categoryAttribute" value={this.state.currentCategory.categoryAttribute}/>
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

const options = [
    {
        value: 1,
        title: '尺码',
    },
    {
        value: 2,
        title: '颜色'
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