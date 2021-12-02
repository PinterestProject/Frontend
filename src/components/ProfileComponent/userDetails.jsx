import React from 'react';
import axios from 'axios';
import './profile.css'
import IconButton from '@mui/material/IconButton';
import Model from './Pop'
import { Link , useParams }  from 'react-router-dom';
import Header from '../HeaderComponent/Header';
import AllUsers from './allUsers';
class UserDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: [],
            height: 0,
            width: 0,
            // windowWidth: window.innerWidth
            };
            window.addEventListener("resize", this.update);
         };
    // handleResize = (e) => {
    //     this.setState({ windowWidth: window.innerWidth });
    //     console.log(e);
    //     console.log(this.state.windowWidth);
    // };
    // componentWillUnmount() {
    //     window.addEventListener("resize", this.handleResize);
    // } 
    
    componentDidMount() {
        this.update();
        if (this.props.match && this.props.match.params.id) {
            const id = this.props.match.params.id
            // console.log(id);
            window.addEventListener("resize", this.handleResize);
            axios.get(`http://127.0.0.1:8000/users/users/${id}/`, 
            { headers: {"Authorization" : localStorage.getItem("Token")} })
            .then((response)=>{
                let details = [];
                details.push(response.data)
                // console.log(details);
            this.setState({ userData: details })
            })
        }
    }
    update = () => {
        this.setState({
          height: window.innerHeight,
          width: window.innerWidth
        });
      };
    
        render() {
            const  windowWidth  = this.state.width; 
            // console.log('withd: ',this.state.width);
        return <React.Fragment>
            <Header />
            <div className='container'>
                <div className='row '>
                    <div className='col-12 m-auto text-center d-flex justify-content-center align-items-center'>
                        
                            {this.state.userData.map((details)=>(
                                <div className='mt-2' >
                                     {details.cover_image ? (
                                    <div style={{ width: '800px',
                                                minHeight:'250px', 
                                                borderRadius:'24px',
                                                backgroundImage: `url(${details.cover_image})`,  
                                                backgroundPosition: 'center',
                                                backgroundSize: 'cover',
                                                backgroundRepeat: 'no-repeat'}} ></div>
                                     ):
                                     (
                                        <div style={{ width: '800px',
                                                minHeight:'250px', 
                                                borderRadius:'24px',
                                                backgroundImage: `url(https://logos-world.net/wp-content/uploads/2020/09/Pinterest-Logo.png)`,  
                                                backgroundPosition: 'center',
                                                backgroundSize: 'cover',
                                                backgroundRepeat: 'no-repeat'}} ></div>
                                     )}
                                {details.profile_image ? (
                                    <img style={{ borderRadius: '50%', 
                                                 
                                                width:'200px', 
                                                height:'200px',
                                                display:'block',
                                                position:'absolute',
                                                top:'25%',
                                                left:`${(windowWidth/2)-210}px`,
                                            }} 
                                            src={details.profile_image} 
                                            />
                                ):
                                (
                                    <img style={{ borderRadius: '50%', 
                                              
                                                width:'200px', 
                                                height:'200px',
                                                display:'block',
                                                position:'absolute',
                                                bottom:'25%',
                                                left:`${(windowWidth/2)-210}px` }} 
                                            src='https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png' 
                                            />
                                )}
                                    
                                    <h2 className='mt-5' style={{ fontWeight: '700' }}>{details.username}</h2>
                                    <span >@{details.username}</span>
                                    <p>{details.bio}</p>
                                </div>
                            ))}

                    </div>
                    <div className='col-12 text-center mb-5'>
                        {/* <Model /> */}
                        <IconButton className={"MyCustomButton"}>
                            <div style={Home} >
                                <Link to="/main-board" className="ProfileIcons">Home</Link>
                            </div>
                        </IconButton>
                        <IconButton className={"MyCustomButton"}>
                            <div style={Home} >
                                <Link to="/users" className="ProfileIcons">All Users</Link>
                            </div>
                        </IconButton>
                    </div>
                    {/* {this.state.userData.map((details)=>(
                            
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
                     
                    ))} */}

                </div>
            </div>
            </React.Fragment>;
    }
}

export default UserDetails;


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





