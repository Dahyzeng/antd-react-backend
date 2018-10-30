import React from 'react';
import ExtendComponent from './ExtendComponent';
@ExtendComponent
export default class BaseComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            name: 'base component'
        }
        console.log('BaseComponent constructor is called')
    }
    componentWillMount() {
        console.log('BaseComponent will mount is called')
    }
    componentDidMount() {
        console.log('BaseComponent Did mount is called')
    }
    render() {
        console.log('BaseComponent render is called');
        return (
            <div>{this.props.value}</div>
        )
    }
}