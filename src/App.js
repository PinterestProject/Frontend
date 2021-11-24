import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Mainboard from './components/Mainboard';
import MainPage from './components/MainPage';
import React, { Component } from 'react';
import Test from './components/LandingPage/test';
import Pin from './components/PinPage/pin';





export default class App extends Component {
  render() {
    return (
      <div>
          <Pin/>
          {/* <MainPage/> */}
          {/* <Test/>  */}
          {/* <Header/> 
         <Mainboard/>  */}
         {/* <MainPage/> */}
      </div>
    )
  }
}