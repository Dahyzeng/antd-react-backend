import React from 'react';
import { Breadcrumb, Card, Tree, Modal, Form } from 'antd';

const TreeNode = Tree.TreeNode;

export default class Category extends React.PureComponent{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>主页</Breadcrumb.Item>
                    <Breadcrumb.Item>产品</Breadcrumb.Item>
                    <Breadcrumb.Item>类别</Breadcrumb.Item>
                </Breadcrumb>

                <Card title="类别总览" extra={<a href="#">新增</a>} style={{ width: 300 }}>
                    <Tree showLine>
                        {
                            treeData.map((node) =>  {
                                if (node.children && node.children.length > 0) {
                                    return <TreeNode title={node.title} key={node.id}>
                                        {
                                            node.children.map((child) => {
                                                return <TreeNode title={child.title} key={child.id}/>
                                            })
                                        }
                                    </TreeNode>
                                } else {
                                    return <TreeNode title={node.title} key={node.id}/>
                                }
                            })
                        }
                    </Tree>
                </Card>

                <Modal title={this.state.modalTitle} visible={this.state.modalVisible}>
                    <Form>
                        <Form.FormItem></Form.FormItem>
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
                id: 31,
                title: "休闲鞋",
                parentId: 3
            },
        ]
    },
];