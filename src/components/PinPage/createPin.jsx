import React, { Component } from 'react'
import "./assets/css/main.css"
import "./assets/css/create.css"
import "./assets/css/bootstrap.min.css"
import Header from '../Header'
import { TextField } from '@mui/material'
import PlacHolder from "./assets/img/placeholder2.jpeg"
import { Description } from '@mui/icons-material'
import axios from 'axios'


export default class CreatePin extends Component {

    constructor(props) {
        super(props)
        this.state = {
            //imgPath: PlacHolder,
            title: '',
            description: '',
            imgPath:'',
           // pins:nul
            attachment:null,
            userboards: [],
            Board:[],
        }
    }

    LiveImageHandler = (e) => {
        console.log(e.target.files[0]);
        this.setState({
            imgPath : e.target.files[0]
        
            
        })
        // let imgPath = e.target.files[0]
        // if(imgPath){

        //     this.setState({
        //         imgPath: URL.createObjectURL(imgPath)
        //     })
        // }
        // else{
        //     this.setState({
        //         imgPath: PlacHolder
        //     } )
        // }
     }
    // handleChange(event){
    //     this.setState({boards: event.target.value })
    //   }
    changeHandler = (e) =>{
   
        this.setState({[e.target.name]: e.target.value})
    }
    submitHandler = (e) =>{
        if (this.state.imgPath) {
         
            let data = new FormData();
            data.append("attachment", this.state.imgPath);
            data.set("title", this.state.title);
            data.set("description", this.state.description);
            data.append("boards",this.state.Board)
            // this.boards.forEach((item) => {
            //     data.append('boards', item);
            //  });
            // alert(this.state.boards[0])
            axios.post('http://127.0.0.1:8000/pins/api/v1/pins/',data)
                .then(response => {
                    alert("hii")
                    console.log(response)
                   // alert(this.state.userboards)
                    // this.setState({ pins: response.data })
                    // alert(Number(this.state.pins.id));
                    // var id1 = Number(this.state.pins.id);
            
                })
                .catch(error => {
                    console.log(error)
                    alert(JSON.stringify(error));
                })
            
          }
        // const formData = new FormData();
        // formData.append(
        //     "attachment",
        //     this.state.imgPath,
        //     this.state.imgPath.name,
        // );
        // alert(formData)
        // var newObject  = {
        //     title:this.state.title,
        //     attachment:{ 
        //         formData
        //     }
        //  };
        // e.preventDefault()
        // console.log(this.state)
      
        
    //    var pk = localStorage.getItem('id')
    //     alert(pk)
    //     axios.patch(`http://127.0.0.1:8000/pins/api/v1/pins/${pk}/`,formData)
    //     .then(response => {
    //         console.log(response)
    //         alert(JSON.stringify(response));
    //     })
    //     .catch(error => {
    //         console.log(error)
    //         alert(JSON.stringify(error));
    //     })
    }

    componentDidMount() {
        var Token = localStorage.get('Token')
        var Header={
            Authorization:Token
        }
		axios
			.get(`http://127.0.0.1:8000//boards/api/v1/boards/`, Header)
			.then(response => {
				alert(response.data.name)
				this.setState({ userboards: response.data })
                
			})
			.catch(error => {
            alert(error)
       
			})
	}

    render() {
        const {title,description,userboards} = this.state
        return (
         
            <div>
                <form onSubmit={this.submitHandler}> 
                {/* <Header /> */}
                {/*--------------------main card which hold img and details--------------------*/}
                <div className="pin container" >
                    {/*--------------------here is the pin's image--------------------*/}
                    <div style={{ marginTop: "40px" }}>

                        <img imgPath={this.state.imgPath} />
                    </div>
                    {/*--------------------start details from here which divided into 8 rows-------------------- */}
                    <div className="form-details ">
                        {/* ------------------------------------------------------------> */}
                        <div className='row8-created'>
                            <img imgPath="https://i.pinimg.com/75x75_RS/49/eb/44/49eb44386b9d9e89dd772eaf546f73cd.jpg" alt="" />
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
                            <TextField className="mt-3" fullWidth id="standard-fullWidth" label="Add title" variant="standard" name="title" value={title} onChange={this.changeHandler}  />
                            <TextField className="mt-3" fullWidth id="standard-fullWidth" label="Description" variant="standard" name="description" value={description} onChange={this.changeHandler} />
                            <div class="input-group mt-5">
                                <select  onChange={(news)=>{this.setState({Board:news.target.value},()=>{console.log(news.target.value)})}}  class="form-select" id="inputGroupSelect02">
                                    {userboards.length ? userboards.map(board => <option key={board.id} value={board.id}> {board.name}</option>): null} 
                                </select>                                  
                            </div>
                            <button  className='save-btn2'>save</button>
                        </div>
                    </div>
                    <button
                    className="btn btn-primary profile-button"
                    type="submit"
                  >
                    Save Profile
                  </button>
                </div>
                </form>
            </div>
        )
    }
}

// {userboards.length ? userboards.map(board => <option  key={board.id} value={board.name}>{board.name}</option>): null} 
{/* <select   class="form-select" id="inputGroupSelect02">
{userboards.length ? userboards.map(board => <option onChange={this.handleChange} key={board.id} value={board.id}>{board.name}</option>): null}
</select>  */}