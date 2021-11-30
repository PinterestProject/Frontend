import React, { Component } from 'react'
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';
// import { Button,  FormGroup, Label, Input, FormText ,FloatingLabel ,Dropdown} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
// import {Dropdown,Form ,Button,Coln,input,Menu,Item}from 'react-bootstrap';
import photo from "./l.jpeg"
import { Link } from 'react-router-dom';
import Header from '../HeaderComponent/Header';
import axios from 'axios';


export default class FormSignup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      username: '',
      email: '',
      first_name: '',
      last_name: '',
      gender: '',
      address: '',
      bio: '',
      address: null,
      birth_day: '',
      cover_image: null,
      date_joined: null,
      language: '',
      profile_image: null,
      pronoun: null,
      social_facebook: null,
      social_google: null,
      social_twitter: null,



    }
  }
  handleChange = (e) => {

    this.setState({ [e.target.name]: e.target.value },()=>{console.log(this.state.language)})
  }

  componentDidMount = () => {
    axios.get("http://localhost:8000/users/user-details/", { headers: { "Authorization": localStorage.getItem("Token") } }).then((resp) => {
      console.log(resp.data.data)
      let userData = resp.data.data
      this.setState({
        id: userData['id'],
        first_name: userData['first_name'],
        last_name: userData['last_name'],
        username: userData['username'],
        email: userData['email'],
        bio: userData['bio'],
        gender: userData['gender'],
        address: userData['address'],
        language: userData['language'],
        birth_day: userData['birth_day'],
      })
    })
  }


  handleEditProfile=()=>{
    let {
      id,
      first_name,
      last_name,
      address,
      bio,
      username,
      email,
      gender,
      language,
      birth_day,
    } = this.state
    let send_data={
      first_name:first_name,
      last_name:last_name,
      address:address,
      gender:gender,
      language:language,
      bio:bio,
      birth_day:birth_day
    }
    console.log(send_data['language'])
    axios.patch(`http://localhost:8000/users/users/${id}/`,send_data, { headers: { "Authorization": localStorage.getItem("Token") } }).then((resp)=>{
      this.setState({
        first_name:send_data['first_name'],
        last_name:send_data['last_name'],
        address:send_data['address'],
        gender:send_data['gender'],
        language:send_data['language'],
        bio:send_data['bio'],
        birth_day:send_data['birth_day'],
      })
    })
  }

  render() {
    const {
      first_name,
      last_name,
      address,
      bio,
      username,
      email,
      gender,
      language,
      birth_day,
    } = this.state

    return (
      <div>
        <Header />
        <form classNameNameName="form" noValidate>

          <div className="container rounded bg-white mt-5 mb-5">
            <div className="row">
              <div className="col-md-3 border-right">
                <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                  <img class="rounded-circle mt-5" width="150px" src={photo} />
                  <span className="font-weight-bold">{username}</span>
                  <span className="text-black-50">{email}</span>
                  <span> </span>
                </div>
              </div>
              <div className="col-md-5 border-right">
                <div className="p-3 py-2">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="text-right">Profile Settings</h4>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-6">
                      <label className="labels">First name</label>
                      <input
                        type="text"
                        className="form-control Inputs"
                        name="first_name"
                        placeholder="Enter your first name"
                        value={first_name}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="labels">Last Name</label>
                      <input
                        type="text"
                        className="form-control Inputs"
                        name="last_name"
                        placeholder="Enter your last name"
                        value={last_name}
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-12">
                      <label className="labels">Gender</label>
                      <select onChange={this.handleChange} className="Inputs" id="Gender" name="gender" value={gender}>
                        <option value="">none</option>
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                      </select>
                    </div>

                    <div className="col-md-12">
                      <label className="labels">Your Birthday</label>
                      <input onChange={this.handleChange} value={birth_day}  name="birth_day" className="Inputs" type="date" data-date-inline-picker="true" />
                    </div>

                    <div className="col-md-12">
                      <label className="labels">Address</label>
                      <input
                        type="text"
                        className="form-control Inputs"
                        name="address"
                        placeholder="Enter your address"
                        value={address}
                        onChange={this.handleChange}
                      />
                    </div>

                  </div>

                  <label className="labels">Language</label>
                  <select onChange={this.handleChange} className="Inputs" id="Language" name="language" value={language}>
                    <option value="">None</option>
                    <option value="arabic">Arabic</option>
                    <option value="english">English</option>
              
                  </select>
                </div>

                <div className="col-md-12">
                  <label className="labels">Bio</label>
                  <input
                    type="text"
                    className="form-control"
                    name="bio"
                    placeholder="Describe your self"
                    value={bio}
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <div className="mt-5 text-center">

                {/* <Link to='/profile'> */}
                  <button style={RedButton}
                  onClick={this.handleEditProfile}
                    className="btn btn-primary profile-button"
                    type="submit"
                  >
                    Save Profile
                  </button>
                {/* </Link> */}
              </div>
            </div>
          </div>
        </form>
      </div>

    )
  }
}


const RedButton = {
  display: 'flex',
  height: ' 44px',
  width: '100%',
  borderRadius: '18px',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#E60023',
  margin: '15px 5px'
};

