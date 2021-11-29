import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/HeaderComponent/Header';
import Mainboard from './components/Mainboard';
import MainPage from './components/MainPageComponent/MainPage';
import React, { Component } from 'react';

import Form from './components/EditProfileComponents/Form'

import Profile from './components/ProfileComponent/Profile';
// import Model from './components/ProfileComponent/Pop'
// import Test from './components/LandingPage/test';
import Pin from './components/PinPage/pin';
import CreatePin from './components/PinPage/createPin';
import MainRoute from './components/Route/MainRoute';
import CreateBoard from './components/CreateBoard/create';
import Grid from './components/ProfileComponent/test';
import SignUp from './components/SignUp';
import axios from "axios"



export default class App extends Component {

  render() {
    return (

   
      <div>       
          
        <MainRoute/>
        {/* <CreateBoard/> */}


        {/* <Form /> */}
      </div>
    )
  }
}
