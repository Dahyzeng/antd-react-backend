import React from 'react';

export default class GlobalFooter extends React.PureComponent {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div style={{ textAlign: 'center'}}>
                Designed by Taurin Zeng
            </div>
        )
    }
}