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
            boardsDetail: [],
            boards:[],
            // pins: [],
            height: 0,
            width: 0,
            };
            window.addEventListener("resize", this.update);
         };

    componentDidMount() {
        this.update();
        window.addEventListener("resize", this.handleResize);
        
        axios.get("http://localhost:8000/users/user-details/", 
        { headers: {"Authorization" : localStorage.getItem("Token")} })
        .then((response)=>{
            this.setState({ boardsDetail: response.data.data })
        })


        axios.get("http://127.0.0.1:8000/pins/api/v1/user/boards/pins/", 
        { headers: {"Authorization" : localStorage.getItem("Token")} })
        .then((response)=>{
                const boardss = Object.values(response.data);
                let details = [];
                details.push(boardss)
                let data = details[0];
                this.setState({ boards: data })

            })  
    }
    returnImage = (image)=>{
        if (image ){
            return `http://localhost:8000${image}`
        }
        return "https://images.unsplash.com/photo-1637439011095-8bd0bebc7223?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" 

    }

    update = () => {
        this.setState({
          height: window.innerHeight,
          width: window.innerWidth
        });
      };
      renderPins(pins){
        if(pins.length >= 3){
            return (
                <div className='parent' >
                              <div className=' pin1'>
                                  <img className='img-fluid'
                                      style={boardImg}
                                      src={this.returnImage(pins[0].attachment)}
                                    //   src={`http://localhost:8000${pin[0].attachment}`}
                                    //   src="https://images.unsplash.com/photo-1637439011095-8bd0bebc7223?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" 
                                    />
                              </div>
                              <div className=' pin2'>
                                  <img className='img-fluid'
                                      style={boardImg}
                                      src={this.returnImage(pins[1].attachment)}
                                    //   src={`http://localhost:8000${pin.attachment}`}
                                    //   src="https://images.unsplash.com/photo-1637439011095-8bd0bebc7223?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" 
                                      />
                              </div>
                              <div className=' pin3'>
                                  <img className='img-fluid'
                                      style={boardImg}
                                      src={this.returnImage(pins[2].attachment)}
                                    //   src={`http://localhost:8000${pin.attachment}`}
                                      //   src="https://images.unsplash.com/photo-1637439011095-8bd0bebc7223?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" 
                                        />                              </div>
                              
                          </div>
            )
        }else
        {
            return(
                <div className='parent' >
                              <div className=' pin1'>
                                  <img className='img-fluid'
                                      style={boardImg}
                                    //   src={this.returnImage(details.pins[0].attachment)}
                                    //   src={`http://localhost:8000${pin[0].attachment}`}
                                      src="https://images.unsplash.com/photo-1637439011095-8bd0bebc7223?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" 
                                    />
                              </div>
                              <div className=' pin2'>
                                  <img className='img-fluid'
                                      style={boardImg}
                                    //   src={this.returnImage(details.pins[1].attachment)}
                                    //   src={`http://localhost:8000${pin.attachment}`}
                                      src="https://images.unsplash.com/photo-1637439011095-8bd0bebc7223?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" 
                                      />
                              </div>
                              <div className=' pin3'>
                                  <img className='img-fluid'
                                      style={boardImg}
                                    //   src={this.returnImage(array[2].attachment)}
                                    //   src={`http://localhost:8000${pin.attachment}`}
                                        src="https://images.unsplash.com/photo-1637439011095-8bd0bebc7223?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" 
                                        />                              </div>
                              
                          </div>
            )
        }
      }
    render() {
        const personData = this.state.boardsDetail;
        const  windowWidth  = this.state.width; 
        return <div>
            <Header />

            <div className='container'>
                <div className='row '>
                        <Link to='/new-board' className='AddButton'>
                            <i class="fas fa-plus"></i>
                        </Link>
                    <div className='col-12 m-auto text-center d-flex justify-content-center align-items-center'>
                       
                                <div className='mt-2' >
                                {personData.cover_image ? (
                                    <div style={{ width: '800px',
                                                minHeight:'250px', 
                                                borderRadius:'24px',
                                                backgroundImage: `url(http://localhost:8000${personData.cover_image})`,  
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
                                {personData.profile_image ? (
                                    <img style={{ borderRadius: '50%', 
                                                 
                                                width:'200px', 
                                                height:'200px',
                                                display:'block',
                                                position:'absolute',
                                                top:'25%',
                                                left:`${(windowWidth/2)-210}px`,
                                            }} 
                                            src={`http://localhost:8000${personData.profile_image}`} 
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
                                    <h2 className='mt-5' style={{ fontWeight: '700' }}>{personData.username}</h2>
                                    <span >@{personData.username}</span>
                                    <span style={{ display: 'block' }}>{personData.bio}</span>
                                </div>
                     

                    </div>
                    <div className='col-12 text-center mb-5'>
                        <Model />
                        <IconButton className={"MyCustomButton"}>
                            <div style={Home} >
                                <Link to="/edit-profile" className="ProfileIcons">Edit Profile</Link>
                            </div>
                        </IconButton>
                    </div>
                    
                    {this.state.boards.map((details, key)=>{
                return <Link key={key} to={'/board-details/'+details.id} 
                            className='col-xxl-3 .col-lg-3 col-md-4 col-sm-6 col-12  p-0 board ' 
                            style={{textDecoration: 'none', color:'#000'}} >
                                {this.renderPins(details.pins)}
                          <h6 >{details.name}</h6>
                          <span >{details.pins.length+" Pins"}</span>
                      </Link>  
                     
                    })}

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





