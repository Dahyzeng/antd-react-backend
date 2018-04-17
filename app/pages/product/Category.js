import React from 'react';
import { Breadcrumb, Card, Tree, Modal, Form, Button } from 'antd';
import Input from './../../components/Form/TInput';
const TreeNode = Tree.TreeNode;

@Form.create()
export default class Category extends React.PureComponent{
    constructor(props){
        super(props);
        this.state = {
            modalVisible: false,
            modalTitle: '',
            currentCategory: ''
        }
    }

    showModal(category) {
        if (category) {
            this.setState({
                modalVisible: true,
                modalTitle: '类别信息',
                currentCategory: category
            })
        } else {
            this.setState({
                modalVisible: true,
                modalTitle: '新增类别',
                currentCategory: ''
            })
        }
    }

    modalClose() {
        this.setState({
            modalVisible: false,
            currentCategory: ''
        })
    }

    render() {
        const self = this;
        return (
            <React.Fragment>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>主页</Breadcrumb.Item>
                    <Breadcrumb.Item>产品</Breadcrumb.Item>
                    <Breadcrumb.Item>类别</Breadcrumb.Item>
                </Breadcrumb>

                <Card title="类别总览" extra={<Button onClick={self.showModal.bind(self)}>新增</Button>} style={{ width: 300 }}>
                    <Tree showLine>
                        {
                            treeData.map((node) =>  {
                                if (node.children && node.children.length > 0) {
                                    return <TreeNode onSelect={self.showModal.bind(self, node)} title={node.title} key={node.id}>
                                        {
                                            node.children.map((child) => {
                                                return <TreeNode onSelect={self.showModal.bind(self, child)} title={child.title} key={child.id}/>
                                            })
                                        }
                                    </TreeNode>
                                } else {
                                    return <TreeNode onSelect={self.showModal.bind(self, node)} title={node.title} key={node.id}/>
                                }
                            })
                        }
                    </Tree>
                </Card>

                <Modal title={this.state.modalTitle} visible={this.state.modalVisible} footer={null} onCancel={this.modalClose.bind(this)}>
                    <Form>
                        <Input form={this.props.form} name="categoryName" value={this.state.currentCategory.title}/>
                        <Form.Item style={{textAlign: 'center'}}>
                            <Button htmlType="submit">
                                保存
                            </Button>
                        </Form.Item>
                    </Form>
                </Modal>

            </React.Fragment>
        )
    }
}

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
                id: 21,
                title: "休闲装",
                parentId: 2,
            },
            {
                id: 22,
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