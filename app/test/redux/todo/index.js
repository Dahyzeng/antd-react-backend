import React from 'react';
import { Button } from 'antd';
import './index.less';
import ListItem from './ListItem';
import { connect } from 'react-redux'

@connect(state => {
    return {
        todoItems: state.todoItems
    }
})
export default class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    submitTodo() {
        const todoItems = this.props.todoItems;
        if (this.state.id) {
            this.props.dispatch({
                type: 'EDIT_TODO',
                item: {
                    id: this.state.id,
                    text: this.state.todoText
                }
            })
        } else {
            this.props.dispatch({
                type: 'ADD_TODO',
                item: {
                    id: todoItems.length + 1,
                    text: this.state.todoText
                }
            });
        }
        this.setState({
            id: '',
            todoText: ''
        })
    }
    onInputChange(e) {
        this.setState({
            todoText: e.target.value
        })
    }

    handleEdit(item) {
        this.setState({
           todoText: item.text,
           id: item.id
        });
    }

    handleDelete(id) {
        this.props.dispatch({
            type: 'DELETE_TODO',
            item: {
                id
            }
        })
    }

    handleComplete(id, complete) {
        this.props.dispatch({
            type: 'COMPLETE_TODO',
            item: {
                id,
                complete: !complete
            }
        })
    }
    render() {
        console.log(this.props.todoItems)
        return (
            <div className="todo-app">
                <div className="edit-part">
                    <label>输入待办项：</label>
                    <input className="ant-input" value={this.state.todoText} onChange={this.onInputChange.bind(this)}/>
                    <Button onClick={this.submitTodo.bind(this)}>确认</Button>
                </div>

                <div>
                    {
                        this.props.todoItems.map((item) => {
                            return <ListItem key={item.id} item={item}
                                             onEdit={this.handleEdit.bind(this)}
                                             onDelete={this.handleDelete.bind(this)}
                                             onComplete={this.handleComplete.bind(this)}
                            />
                        })
                    }
                </div>
            </div>
        )
    }
}