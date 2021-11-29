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



// const FormSignup = ({ submitForm }) => {
//   const { this.handleChange, handleSubmit, values, errors } = useForm(
//     submitForm,
//     validate
//   );
export default class FormSignup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstname:'',
      lastname:'',
      address:'',
      bio:'',

    }
  }
  handleChange = (e) =>{
   
      this.setState({[e.target.name]: e.target.value})
  }

    handleSubmit = (e) =>{
        // axios.patch(`http://127.0.0.1:8000/users/users/${pk}/`,formData)
        // .then(response => {
        //     console.log(response)
        //     alert(JSON.stringify(response));
        // })
        // .catch(error => {
        //     console.log(error)
        //     alert(JSON.stringify(error));
        // })
}
  render() {
    const {firstname,lastname,address,bio} = this.state

  return (
    <div>
      <Header/>
      <form onSubmit={handleSubmit} classNameNameName="form" noValidate>

        <div className="container rounded bg-white mt-5 mb-5">
          <div className="row">
            <div className="col-md-3 border-right">
              <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                <img class="rounded-circle mt-5" width="150px" src={photo} />
                <span className="font-weight-bold">Edogaru</span>
                <span className="text-black-50">edogaru@mail.com.my</span>
                <span> </span>
              </div>
            </div>
            <div className="col-md-5 border-right">
              <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4 className="text-right">Profile Settings</h4>
                </div>
                <div className="row mt-2">
                  <div className="col-md-6">
                    <label className="labels">First name</label>
                    <input
                      type="text"
                      className="form-control Inputs"
                      name="firstname"
                      placeholder="Enter your first name"
                      value={firstname}
                      onChange={this.handleChange}
                    />
                    {/* {errors.username && <p>{errors.username}</p>} */}
                  </div>
                  <div className="col-md-6">
                    <label className="labels">Last Name</label>
                    <input
                      type="text"
                      className="form-control Inputs"
                      name="lastname"
                      placeholder="Enter your last name"
                      value={lastname}
                      onChange={this.handleChange}
                    />
                    {/* {errors.username && <p>{errors.username}</p>} */}
                  </div>
                </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <label className="labels">Gender</label>
                  <select className="Inputs" id="Gender" name="Gender">
                    <option value="australia">Female</option>
                    <option value="canada">Male</option>
                  </select>
                </div>
                <div className="col-md-12">
                  <label className="labels">Your Birthday</label>
                  <input className="Inputs" type="date" data-date-inline-picker="true" />
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
                  <div className="col-md-12">

                    <label className="labels">Language</label>
                    <select id="Language" name="Language">
                      <option value="Arabic">Arabic</option>
                      <option value="English">English</option>
                    < option value="French">English</option>
                    </select>
                  </div>

                  <div className="row mt-3">
                      <div className="col-md-12">
                        <label className="labels">Bio</label>
                        <input
                          type="text"
                          className="form-control"
                          name="bio"
                          placeholder="Describe your self"
                          // value={values.address}
                          // onChange={handleChange}
                        />
                      </div>
                    </div>
                </div>

                  <label className="labels">Language</label>
                  <select className="Inputs" id="Language" name="Language">
                    <option value="Arabic">Arabic</option>
                    <option value="English">English</option>
                   < option value="French">English</option>
                  </select>
                </div>
               
                  <div className="col-md-12">
                    <label className="labels">Bio</label>
                    <input
                      type="text"
                      className="form-control I"
                      name="bio"
                      placeholder="Describe your self"
                      value={bio}
                      onChange={this.handleChange}
                    />
                  </div>
                  </div>
                 
            
        
                

                <div className="mt-5 text-center">

                  <Link to='/profile'>

                  <button style={RedButton}
                    className="btn btn-primary profile-button"
                    type="submit"
                    >
                    Save Profile
                  </button>
                    </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>

  )
  }
}


export default FormSignup;
const  RedButton = { 
  display: 'flex', 
  height:' 44px', 
  width: '100%',
  borderRadius: '18px', 
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor:'#E60023', 
  margin:'15px 5px'
};

