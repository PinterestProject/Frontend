import React from 'react';
import axios from 'axios';
import './profile.css'
import IconButton from '@mui/material/IconButton';
import Model from './Pop'
import { Link } from 'react-router-dom';
import Header from '../HeaderComponent/Header';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            boardsDetail: {},
            ready: false
                    }
         };

    componentDidMount() {
    
        axios.get("http://127.0.0.1:8000/boards/api/v1/boards/", 
        { headers: {"Authorization" : localStorage.getItem("Token")} })
        .then((response)=>{
            console.log(response);
            const boardData = response.data;
            this.setState({ boardsDetail: boardData , ready: true})

            })
        }
    render() {
        if(!this.state.ready)
         return null;
        return <div>
            <Header />

            <div className='container'>
                <div className='row '>
                        <Link to='/new-board' className='AddButton'>
                            <i class="fas fa-plus"></i>
                        </Link>
                    <div className='col-12 m-auto text-center d-flex justify-content-center align-items-center'>
                            {this.state.boardsDetail.slice(0,1).map((details)=>(
                                <div className='mt-5' >
                                    <img style={{ borderRadius: '50%', 
                                                marginBottom: '20px', 
                                                width:'200px', 
                                                height:'200px' }} 
                                            src={"http://127.0.0.1:8000"+details.profile_image} 
                                            />
                                    <h2 style={{ fontWeight: '700' }}>{details.username}</h2>
                                    <span >@{details.username}</span>
                                    <span style={{ display: 'block' }}>{details.bio}</span>
                                </div>
                            ))}

                    </div>
                    <div className='col-12 text-center mb-5'>
                        <Model />
                        <IconButton className={"MyCustomButton"}>
                            <div style={Home} >
                                <Link to="/edit-profile" className="ProfileIcons">Edit Profile</Link>
                            </div>
                        </IconButton>
                    </div>
                    {this.state.boardsDetail.map((details)=>(
                            
                          <Link to={'/board-details/'+details.id} 
                            className='col-xxl-3 .col-lg-3 col-md-4 col-sm-6 col-12  p-0 board ' 
                            style={{textDecoration: 'none', color:'#000'}} >
                          <div className='parent' >
                              <div className=' pin1'>
                                  <img className='img-fluid'
                                      style={boardImg}
                                      src="https://images.unsplash.com/photo-1637439011095-8bd0bebc7223?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />
                              </div>
                              <div className=' pin2'>
                                  <img className='img-fluid'
                                      style={boardImg}
                                      src="https://images.unsplash.com/photo-1637439011095-8bd0bebc7223?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />
                              </div>
                              <div className=' pin3'>
                                  <img className='img-fluid'
                                      style={boardImg}
                                      src="https://images.unsplash.com/photo-1637439011095-8bd0bebc7223?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />
                              </div>
                              
                          </div>
                          <h6 >{details.name}</h6>
                          <span >{details.pins.length+" Pins"}</span>
                      </Link>  
                     
                    ))}

                </div>
            </div>
        </div>;
    }
}

export default Profile;


const boardImg = {
    cursor: 'pointer !important'
}

const Home = {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    justifyContent: 'center',
    cursor: 'pointer',
    fontWeight: '700',
    fontSize: '100px'
};





