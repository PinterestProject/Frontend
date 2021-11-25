import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';
// import { Button,  FormGroup, Label, Input, FormText ,FloatingLabel ,Dropdown} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import {Dropdown,Form ,Button,Coln,input,Menu,Item}from 'react-bootstrap';
import photo from "./l.jpeg"



const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div>
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
                      className="form-control"
                      name="firstname"
                      placeholder="Enter your first name"
                      value={values.username}
                      onChange={handleChange}
                    />
                    {errors.username && <p>{errors.username}</p>}
                  </div>
                  <div className="col-md-6">
                    <label className="labels">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="last_name"
                      placeholder="Enter your last name"
                      value={values.username}
                      onChange={handleChange}
                    />
                    {errors.username && <p>{errors.username}</p>}
                  </div>
                </div>

                <div className="col-md-12">
                  <label className="labels">Gender</label>
                  <select id="Gender" name="Gender">
                    <option value="australia">Female</option>
                    <option value="canada">Male</option>
                  </select>
                </div>
                <div className="col-md-12">
                  <label className="labels">Your Birthday</label>
                  <input type="date" data-date-inline-picker="true" />
                </div>
                <div className="row mt-3">
                  <div className="col-md-12">
                    <label className="labels">Address</label>
                    <input
                      type="text"
                      className="form-control"
                      name="address"
                      placeholder="Enter your address"
                      // value={values.address}
                      // onChange={handleChange}
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
        
                
                <div className="mt-5 text-center">
                  <button
                    className="btn btn-primary profile-button"
                    type="submit"
                  >
                    Save Profile
                  </button>
                </div>
              </div>
            </div>
           
           
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormSignup;