import React, { Component } from 'react'
import "./assets/css/main.css"
import "./assets/css/create.css"
import "./assets/css/bootstrap.min.css"
import Header from '../Header/Header'
import { TextField } from '@mui/material'
import PlacHolder from "./assets/img/placeholder2.jpeg"
import { Link } from 'react-router-dom'


export default class CreatePin extends Component {

    constructor(props) {
        super(props)
        this.state = {
            imgPath: PlacHolder
        }
    }

    LiveImageHandler = (e) => {
        let src = e.target.files[0]
        if(src){

            this.setState({
                imgPath: URL.createObjectURL(src)
            })
        }
        else{
            this.setState({
                imgPath: PlacHolder
            } )
        }
    }

    render() {

        return (
            <div>
                <Header />
                {/*--------------------main card which hold img and details--------------------*/}
                <div className="pin container" >
                    {/*--------------------here is the pin's image--------------------*/}
                    <div style={{ marginTop: "20px" }}>

                        <img src={this.state.imgPath} />
                    </div>
                    {/*--------------------start details from here which divided into 8 rows-------------------- */}
                    <div className="form-details ">
                        {/* ------------------------------------------------------------> */}
                        <div className='row8-created'>
                            <img src="https://i.pinimg.com/75x75_RS/49/eb/44/49eb44386b9d9e89dd772eaf546f73cd.jpg" alt="" />
                            <div>
                                <small>
                                    <a className="link" href="">Gerd Busch </a>
                                </small>
                            </div>
                        </div>
                        {/* ------------------------------------------------------------> */}
                        <div class="mt-3">
                            <input onChange={this.LiveImageHandler} type="file" class="form-control" id="inputGroupFile02" >
                                
                                </input>
                        </div>
                        {/* -------------------------------------------------------------> */}
                        <div className='row4' style={{ paddingTop: "10px" }}>
                            <TextField  className="mt-3" fullWidth id="standard-fullWidth" label="Add title" variant="standard" />
                            <TextField className="mt-3" fullWidth id="standard-fullWidth" label="Description" variant="standard" />
                            <div class="input-group mt-5">
                                <select class="form-select" id="inputGroupSelect02">
                                    <option selected>Choose board...</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                                <Link className='save-btn2' to="/main-board">
                                <button className='save-btn2'>
                                    save
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
