import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { Component } from 'react';
import MainRoute from './components/Route/MainRoute';


      
export default class App extends Component {

  render() {
    return (
      <div>       
          
        <MainRoute/>
        {/* <CreateBoard/> */}

      </div>
    )
  }
}
