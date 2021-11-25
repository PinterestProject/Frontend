import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Mainboard from './components/Mainboard';
import MainPage from './components/MainPage';
import React, { Component } from 'react';
import Form from './components/EditProfileComponents/Form'




export default class App extends Component {
  render() {
    return (
      <div> 
          <MainPage/>
          <Header/>
          <Form />
      </div>
    )
  }
}