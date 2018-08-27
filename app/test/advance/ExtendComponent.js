import React from 'react';

const ExtendComponent = (WrappedComponent) => class extends React.Component{
    constructor(props) {
        super(props);
        console.log('ExtendComponent constructor is called')
    }
    componentWillMount() {
        console.log('ExtendComponent will mount is called')
    }
    componentDidMount() {
        console.log('ExtendComponent Did mount is called')
    }
    render() {
        console.log('ExtendComponent render is called');
        return (
            <WrappedComponent value="test value"/>
        )
    }
};
export default ExtendComponent;