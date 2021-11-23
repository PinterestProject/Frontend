import React, { Component } from 'react'
import PinterestIcon from '@mui/icons-material/Pinterest';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import TextsmsIcon from '@mui/icons-material/Textsms';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FaceIcon from '@mui/icons-material/Face';


export default class Header extends Component {
  

    render() {
        return (
            <div>
                <div style={Wrapper}>
                <div style={LogoWrapper}>
                    <IconButton>
                        <PinterestIcon style={{color:'#E60023', fontSize: '30px'}}/>
                    </IconButton>
                    </div>
                <div style={Home}>
                    <a  href='/' className="h">Home</a>
                    </div>
                <div style={SearchWrapper}>
                    <div style={SearchBarWrapper}>
                        <IconButton>
                            <SearchIcon/>
                        </IconButton>
                        <form onSubmit={this.Submit}>
                            <input name="input" type='text'/>
                            <button type='submit'/>
                        </form>
                    </div>
                    </div>
                <div style={IconWrapper}>
                        <IconButton>
                            <NotificationsIcon/>
                        </IconButton>
                        <IconButton>
                            <TextsmsIcon/>
                        </IconButton>
                        <IconButton>
                            <FaceIcon/>
                        </IconButton>
                        <IconButton>
                            <KeyboardArrowDownIcon/>
                        </IconButton>
                </div>
                </div>
            </div>
        )
    }
}

const  Wrapper = {
    color: 'black',
    display: 'flex',
    alignItems: 'center',
    height: '40px',
    padding: '12px 4px 4px 16px',
    backgroundColor: 'white',
  };
  const  LogoWrapper ={
    fontsize: '32px',
    cursor: 'pointer'
  };
  const  Home = {
    backgroundColor: 'black',
    display:'flex',
    fontsize: '32px',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '24px',
    cursor: 'pointer', 
    height: '35px',
    minWidth: '60px',
        
};
const  SearchWrapper = {
    flex: 1 //takes all the space it can gets
};
const  SearchBarWrapper = {
    backgroundColor: 'lightgray', 
    display: 'flex',
    height:' 35px',
    width: '100%',
    borderRadius: '50px',
    border: 'none',
    paddingLeft: '10px',
    marginLeft:'10px',
};
const  IconWrapper = {
    marginLeft:'20px',
};
  