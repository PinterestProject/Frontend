import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Mainboard from './components/Mainboard';
import MainPage from './components/MainPage';
import React, { Component } from 'react';
import Profile from './components/ProfileComponent/Profile';
import Model from './components/ProfileComponent/Pop'



export default class App extends Component {

  render() {
    return (
      <div> 
          <MainPage/>
          <Header/> 
         {/* <Mainboard/>  */}
         
         <Profile />
      </div>
    )
  }
}
