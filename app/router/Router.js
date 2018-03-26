import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Login from './../pages/login/Login';

export default class CustomRouter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BrowserRouter>
                <Route path="/login" component={Login}/>
            </BrowserRouter>
        )
    }
}