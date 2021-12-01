import React, { Component } from 'react'
import "./assets/css/main.css"
import "./assets/css/create.css"
import "./assets/css/bootstrap.min.css"
import Header from '../HeaderComponent/Header'
import { TextField } from '@mui/material'
import PlacHolder from "./assets/img/placeholder2.jpeg"
import { Description } from '@mui/icons-material'
import axios from 'axios'
import { Link } from 'react-router-dom'


export default class CreatePin extends Component {

    constructor(props) {
        super(props)
        this.state = {
            img: PlacHolder,
            title: '',
            description: '',
            imgPath: '',
            // pins:nul
            attachment: null,
            userboards: [],
            Board: [],
        }
    }


    LiveImageHandler = (e) => {
      
        this.setState({
            imgPath : e.target.files[0]
        })
      
        let img = e.target.files[0]
        if(img){

            this.setState({
                img: URL.createObjectURL(img)
            })
        }
        else{
            this.setState({
                img: PlacHolder
            } )
        }
     }
    changeHandler = (e) => {

        this.setState({ [e.target.name]: e.target.value },()=>{console.log(e.target.value)})
    }
    submitHandler = (e) => {
        e.preventDefault()
        console.log(e.target.attachment.value)
        var Token = localStorage.getItem('Token')
        var Header = {
            Authorization: Token
        }

        if (this.state.imgPath) {

            let data = new FormData();
            data.append("attachment", this.state.imgPath);
            data.set("title", this.state.title);
            data.set("description", this.state.description);
            data.append("boards", this.state.Board)
            console.log(data)
            axios.post('http://127.0.0.1:8000/pins/api/v1/pins/', data, { headers: Header })

        }
    }

    componentDidMount() {
         axios
            .get(`http://127.0.0.1:8000/boards/api/v1/boards/`,  { headers: {"Authorization" : localStorage.getItem("Token")} })
            .then(response => {
                this.setState({ userboards: response.data })
            })
    }

    render() {
        const { title, description, userboards } = this.state
        return (

            <div>

                <form onSubmit={this.submitHandler}>
                    <Header />
                    {/*--------------------main card which hold img and details--------------------*/}
                    <div className="pin container" >
                        {/*--------------------here is the pin's image--------------------*/}
                        <div style={{ marginTop: "20px" }}>

                            <img src={this.state.img} alt='here' />
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
                                <input onChange={this.LiveImageHandler} type="file" name="attachment" class="form-control" id="inputGroupFile02"  >

                                </input>
                            </div>
                            {/* -------------------------------------------------------------> */}
                            <div className='row4' style={{ paddingTop: "10px" }}>

                                <TextField className="mt-3" fullWidth id="standard-fullWidth" label="Add title" variant="standard" name="title" value={title} onChange={this.changeHandler} />
                                <TextField className="mt-3" fullWidth id="standard-fullWidth" label="Description" variant="standard" name="description" value={description} onChange={this.changeHandler} />
                                <div class="input-group mt-5">
                                    <select onChange={(news) => { this.setState({ Board: news.target.value }, () => { console.log(news.target.value) }) }} class="form-select" id="inputGroupSelect02">
                                        {userboards.length ? userboards.map(board => <option key={board.id} value={board.id}> {board.name}</option>) : null}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <button className="btn btn-danger profile-button" type="submit">
                            Save Profile
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}
