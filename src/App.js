import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header';
import Mainboard from './components/Mainboard';
import MainPage from './components/MainPageComponent/MainPage';
import React, { Component } from 'react';
import Profile from './components/ProfileComponent/Profile';
import Model from './components/ProfileComponent/Pop'
import Test from './components/LandingPage/test';
import Pin from './components/PinPage/pin';
import CreatePin from './components/PinPage/createPin';


export default class App extends Component {

  render() {
    return (
      <div>       
          <MainPage/>
          <Header/> 
         <Profile />
          <Header/>
          <Pin/>
          <CreatePin/>

      </div>
    )
  }
}
