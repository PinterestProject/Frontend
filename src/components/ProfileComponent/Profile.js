import React from 'react';
import './profile.css'
import { styled } from '@mui/system';
import IconButton from '@mui/material/IconButton';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Popover } from 'react-tiny-popover'
import Model from './Pop'
import { Link } from 'react-router-dom';
import Header from '../HeaderComponent/Header';

class Profile extends React.Component {
    // MouseOver(event) {
    //     event.target.style.background = 'red';
    //   }
      
    render() { 
        return <div>
                <Header/>
            <div className='container'>
                <div className='row '>
                    <div className='AddButton'>
                        <i class="fas fa-plus"></i>
                    </div>
                    <div className='col-12 m-auto text-center d-flex justify-content-center align-items-center'>
                        <div className='mt-5' >
                            <img style={{borderRadius: '50%', marginBottom:'20px'}} src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20200%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17d51ade03c%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17d51ade03c%22%3E%3Crect%20width%3D%22200%22%20height%3D%22200%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2274.4296875%22%20y%3D%22104.5%22%3E200x200%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" />
                            <h2 style={{fontWeight: '700'}}>Khalil Gazairly</h2>
                            <span >@Khalil Gazairly</span>
                            <span style={{ display: 'block'}}>0 Followers</span>
                        </div>
                    </div>
                    <div className='col-12 text-center mb-5'>
                    <Model/>
                    <IconButton className={"MyCustomButton"}>
                            <div style={Home} >
                                <Link to="/edit-profile" className="ProfileIcons">Edit Profile</Link>
                            </div>
                    </IconButton>                
                    </div>
                    <div  className='col-xxl-3 .col-lg-3 col-md-4 col-sm-6 col-12  p-0 board '  >
                        <div className='parent'>
                            <div className=' pin1'>
                                <img className='img-fluid' style={boardImg}  src="https://images.unsplash.com/photo-1637439011095-8bd0bebc7223?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />
                            </div>
                            <div className=' pin2'>
                                <img className='img-fluid' style={boardImg}  src="https://images.unsplash.com/photo-1637439011095-8bd0bebc7223?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />
                            </div>
                            <div className=' pin3'>
                                <img className='img-fluid' style={boardImg}  src="https://images.unsplash.com/photo-1637439011095-8bd0bebc7223?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />
                            </div>
                            {/* <div className='PinImgs pin4'></div> */}
                        </div>
                        <h5 >Name</h5>
                        <span >0</span>
                    </div>
                    <div  className='col-xxl-3 .col-lg-3 col-md-4 col-sm-6 col-12 rounded p-0 board '  >
                        <div className='parent'>
                            <div className=' pin1'>
                                <img className='img-fluid' style={boardImg}  src="https://images.unsplash.com/photo-1637439011095-8bd0bebc7223?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />
                            </div>
                            <div className=' pin2'>
                                <img className='img-fluid' style={boardImg}  src="https://images.unsplash.com/photo-1637439011095-8bd0bebc7223?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />
                            </div>
                            <div className=' pin3'>
                                <img className='img-fluid' style={boardImg}  src="https://images.unsplash.com/photo-1637439011095-8bd0bebc7223?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />
                            </div>
                            {/* <div className='PinImgs pin4'></div> */}
                        </div>
                        <h5 style={{paddingLeft:'15px'}}>Name</h5>
                        <span style={{paddingLeft:'15px'}}>0</span>
                    </div>
                    <div  className='col-xxl-3 .col-lg-3 col-md-4 col-sm-6 col-12  p-0 board '  >
                        <div className='parent'>
                            <div className=' pin1'>
                                <img className='img-fluid' style={boardImg}  src="https://images.unsplash.com/photo-1637439011095-8bd0bebc7223?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />
                            </div>
                            <div className=' pin2'>
                                <img className='img-fluid' style={boardImg}  src="https://images.unsplash.com/photo-1637439011095-8bd0bebc7223?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />
                            </div>
                            <div className=' pin3'>
                                <img className='img-fluid' style={boardImg}  src="https://images.unsplash.com/photo-1637439011095-8bd0bebc7223?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />
                            </div>
                            {/* <div className='PinImgs pin4'></div> */}
                        </div>
                        <h5 >Name</h5>
                        <span >0</span>
                    </div>
                    <div  className='col-xxl-3 .col-lg-3 col-md-4 col-sm-6 col-12  p-0 board '  >
                        <div className='parent'>
                            <div className=' pin1'>
                                <img className='img-fluid' style={boardImg}  src="https://images.unsplash.com/photo-1637439011095-8bd0bebc7223?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />
                            </div>
                            <div className=' pin2'>
                                <img className='img-fluid' style={boardImg}  src="https://images.unsplash.com/photo-1637439011095-8bd0bebc7223?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />
                            </div>
                            <div className=' pin3'>
                                <img className='img-fluid' style={boardImg}  src="https://images.unsplash.com/photo-1637439011095-8bd0bebc7223?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />
                            </div>
                            {/* <div className='PinImgs pin4'></div> */}
                        </div>
                        <h5 >Name</h5>
                        <span >0</span>
                    </div>
                    <div  className='col-xxl-3 .col-lg-3 col-md-4 col-sm-6 col-12  p-0 board '  >
                        <div className='parent'>
                            <div className=' pin1'>
                                <img className='img-fluid' style={boardImg}  src="https://images.unsplash.com/photo-1637439011095-8bd0bebc7223?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />
                            </div>
                            <div className=' pin2'>
                                <img className='img-fluid' style={boardImg}  src="https://images.unsplash.com/photo-1637439011095-8bd0bebc7223?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />
                            </div>
                            <div className=' pin3'>
                                <img className='img-fluid' style={boardImg}  src="https://images.unsplash.com/photo-1637439011095-8bd0bebc7223?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />
                            </div>
                            {/* <div className='PinImgs pin4'></div> */}
                        </div>
                        <h5 >Name</h5>
                        <span >0</span>
                    </div>
                    <div  className='col-xxl-3 .col-lg-3 col-md-4 col-sm-6 col-12  p-0 board '  >
                        <div className='parent'>
                            <div className=' pin1'>
                                <img className='img-fluid' style={boardImg}  src="https://images.unsplash.com/photo-1637439011095-8bd0bebc7223?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />
                            </div>
                            <div className=' pin2'>
                                <img className='img-fluid' style={boardImg}  src="https://images.unsplash.com/photo-1637439011095-8bd0bebc7223?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />
                            </div>
                            <div className=' pin3'>
                                <img className='img-fluid' style={boardImg}  src="https://images.unsplash.com/photo-1637439011095-8bd0bebc7223?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />
                            </div>
                            {/* <div className='PinImgs pin4'></div> */}
                        </div>
                        <h5 >Name</h5>
                        <span >0</span>
                    </div>
                    <div  className='col-xxl-3 .col-lg-3 col-md-4 col-sm-6 col-12  p-0 board '  >
                        <div className='parent'>
                            <div className=' pin1'>
                                <img className='img-fluid' style={boardImg}  src="https://images.unsplash.com/photo-1637439011095-8bd0bebc7223?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />
                            </div>
                            <div className=' pin2'>
                                <img className='img-fluid' style={boardImg}  src="https://images.unsplash.com/photo-1637439011095-8bd0bebc7223?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />
                            </div>
                            <div className=' pin3'>
                                <img className='img-fluid' style={boardImg}  src="https://images.unsplash.com/photo-1637439011095-8bd0bebc7223?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />
                            </div>
                            {/* <div className='PinImgs pin4'></div> */}
                        </div>
                        <h5 >Name</h5>
                        <span >0</span>
                    </div>
                    <div  className='col-xxl-3 .col-lg-3 col-md-4 col-sm-6 col-12  p-0 board '  >
                        <div className='parent'>
                            <div className=' pin1'>
                                <img className='img-fluid' style={boardImg}  src="https://images.unsplash.com/photo-1637439011095-8bd0bebc7223?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />
                            </div>
                            <div className=' pin2'>
                                <img className='img-fluid' style={boardImg}  src="https://images.unsplash.com/photo-1637439011095-8bd0bebc7223?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />
                            </div>
                            <div className=' pin3'>
                                <img className='img-fluid' style={boardImg}  src="https://images.unsplash.com/photo-1637439011095-8bd0bebc7223?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />
                            </div>
                            {/* <div className='PinImgs pin4'></div> */}
                        </div>
                        <h5 >Name</h5>
                        <span >0</span>
                    </div>
                </div>
            </div>
            {/* <Popover
                isOpen={isPopoverOpen}
                positions={['top', 'bottom', 'left', 'right']} // preferred positions by priority
                content={<div>Hi! I'm popover content.</div>}
                >
                <div onClick={() => setIsPopoverOpen(!isPopoverOpen)}>
                    Click me!
                </div>
                </Popover> */}

        </div>;
    }
}

export default Profile;




// const board = {
//     cursor : 'pointer',
//     }
const boardImg = {
    cursor : 'pointer !important'
}

const  Home = {
    display:'flex',
    alignItems: 'center',
    padding :'10px',
    justifyContent: 'center',
    cursor: 'pointer', 
    fontWeight : '700',
    fontSize: '100px'      
};





