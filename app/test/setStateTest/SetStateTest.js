import React from 'react';

export default class SetStateTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    //
    // componentWillMount() {
    //     setTimeout(() => {
    //         this.setState({
    //             log: 'set'
    //         })
    //     }, 1000)
    // }
    // componentWillUpdate(old, nextState) {
    //     console.log(`next: ${JSON.stringify(nextState)}`);
    //     console.log(`old: ${JSON.stringify(old)}`);
    // }
    // componentDidUpdate() {
    //     console.log(this.state.log)
    // }
    componentDidMount() {
        this.setState({
            count: this.state.count + 1
        });
        console.log(this.state.count);
        this.setState({
            count: this.state.count + 1
        });
        console.log(this.state.count);

        // setTimeout(() => {
        //     this.setState({
        //         count: this.state.count + 1
        //     });
        //     console.log(this.state.count);
        //     this.setState({
        //         count: this.state.count + 1
        //     });
        //     console.log(this.state.count);
        // }, 100)
    }

    render () {
        console.log('render called');

        return (
            null
        )
    }
}