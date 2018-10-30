import React from 'react';
import BaseComponent from './advance/BaseComponent';
import SetStateTest from './setStateTest/SetStateTest';
export default class ReactTest extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <SetStateTest/>
        )
    }
}