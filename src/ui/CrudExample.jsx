import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import UsersTableComponent from './UsersTableComponent';


class CrudExample extends Component{
    render(){
        return(
            <BrowserRouter>
                <Route exact path ='/' component={UsersTableComponent}></Route>
            </BrowserRouter>
        );
    }
}

export default CrudExample;