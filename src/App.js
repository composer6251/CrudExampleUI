import React, { Component } from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import CrudExample from './ui/CrudExample'

class App extends Component {
  render(){
    return (
      <div className="App">
       <CrudExample/>

      </div>
    );
  }
}

export default App;
