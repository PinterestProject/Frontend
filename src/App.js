import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import Header from './components/Header';
// import Mainboard from './components/Mainboard';
// import MainPage from './components/MainPage';
import React, { Component } from 'react';
// import Profile from './components/ProfileComponent/Profile';
// import Model from './components/ProfileComponent/Pop'
// import Test from './components/LandingPage/test';
// import Pin from './components/PinPage/pin';
// import CreatePin from './components/PinPage/createPin';
import MainRoute from './components/Route/MainRoute';
import CreateBoard from './components/CreateBoard/create';





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
