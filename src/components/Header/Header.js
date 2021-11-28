import React, { Component } from 'react'
import PinterestIcon from '@mui/icons-material/Pinterest';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import TextsmsIcon from '@mui/icons-material/Textsms';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FaceIcon from '@mui/icons-material/Face'; 
import Mainboard from '../Mainboard';
import './Header.css';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import axios from 'axios';
import { styled, Box } from '@mui/system';
import ModalUnstyled from '@mui/base/ModalUnstyled';
import Button from 'react-bootstrap/Button';

const StyledModal = styled(ModalUnstyled)`
position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center; 
`;

const Backdrop = styled('div')`
z-index: -1;
position: fixed;
right: 0;
bottom: 0;
top: 0;
left: 0;
background-color: rgba(0, 0, 0, 0.6);
-webkit-tap-highlight-color: transparent;
`;

const style = {
    display: 'in-line',
    width: '360px',
    borderRadius: '16px',
    objectFit: 'cover',
    margin:'10px',
    border: '2px solid #000',
    p: 2,
    px: 4,
    pb: 3,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',  
};


export default class Header extends Component {
  constructor(props) {
      super(props)
  
      this.state = {
           Authorization:'',
           open: false,  
            setOpen: false,
            Pass1:'',
            Pass2:'',
            ErrMessage:'',
            valid:false,
            touched: {
                Pass1: '',
                Pass2: '', 
            },
            errors: {
                Pass1: '',
                Pass2: '', 
            }
      }
        this.Logout = this.Logout.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.InputChange = this.InputChange.bind(this);
        this.ChangePassword = this.ChangePassword.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.validate = this.validate.bind(this);
  }
  handleBlur = (field) => (evt) => {
    this.setState({
        touched: { ...this.state.touched, [field]: true }
    });
}
validate(Pass1,Pass2) {
    const errors = {
        Pass1: '',
        Pass2: '', 
    };
    if (this.state.touched.Pass1 && Pass1.length < 4)
        errors.Pass1 = 'Password should be more than 4 characters.';
    else if (this.state.touched.Pass1 && Pass1.length > 12)
        errors.Pass1 = 'Password should be less than 12 characters.';
    if (this.state.touched.Pass2 && Pass2.length < 4)
        errors.Pass2 = 'Password should be more than 4 characters.';
    else if (this.state.touched.Pass2 && Pass2.length > 12)
        errors.Pass2 = 'Password should be less than 12 characters.'; 
    return errors;
    }
  Logout(event){
    event.preventDefault();
    var v = ""
    var Token = localStorage.getItem('Token')
    //alert(Token)
    var newObject  = {
        Authorization:Token
     };
    console.log('Current State is: ' + JSON.stringify(newObject));
    //alert('Current State is: ' + JSON.stringify(newObject));
    axios.post('http://127.0.0.1:8000/users/logout/', v , {headers:newObject}).then(response => {
        console.log(response)
       // alert(JSON.stringify(response));
        localStorage.removeItem('Token')
    }).catch(error => {
        console.log(error)
        // alert(JSON.stringify(error));
    })
}
handleOpen(){
    this.setState({
        setOpen: true,
        open: true
    })
}
handleClose(){
    this.setState({
        setOpen: false,
        open: false
    })
}
InputChange = event => {
   this.setState({[event.target.name]: event.target.value});
   this.setState({ErrMessage:''})
    }

async ChangePassword(event) {
    event.preventDefault();
    const errors = this.validate(this.state.Pass1, this.state.Pass2);
    await this.setState({errors:{Pass1:errors.Pass1,Pass2:errors.Pass2}});
       // alert(this.state.errors.Pass1)
      //  alert(this.state.errors.Pass2)
      //  alert(this.state.valid)
    if (this.state.errors.Pass1 === '' && this.state.errors.Pass2 === '')
        this.setState({valid:true}); 
    else
        this.setState({valid:false});
    var Token = localStorage.getItem('Token')
    // alert(Token)
    var newObject2  = {
        old_pass:this.state.Pass1,
        new_password:this.state.Pass2
     };
     var Header = {
        Authorization:Token
     };
    console.log('Current State is: ' + JSON.stringify(newObject2));
    // alert('Current State is: ' + JSON.stringify(newObject2));
    //alert(this.state.valid)
    if (this.state.valid === true){
    axios.post('http://127.0.0.1:8000/users/changepassword/', newObject2, {headers:Header}).then(response => {
        console.log(response)
        this.setState({ErrMessage: "Password is updated", valid:false})
    }).catch(error => {
        console.log(error)
        if(error){
            error = error.response.data;
            // alert('Error is: ' + error);
           // alert('Error is: ' + JSON.stringify(error));
           // var err = JSON.stringify(error.non_field_errors).replace('[', '').replace(']', '').replace('"', '').replace('"', '')
            this.setState({ErrMessage: "Password is incorrect", valid:false})
        }
    })
}}

    render() {
        const{Pass1, Pass2} = this.state
        const errors = this.validate(this.state.Pass1, this.state.Pass2);
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
                        <form className='formstyle' onSubmit={this.Submit}>
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
                        <UncontrolledDropdown >
                                <DropdownToggle style={{backgroundColor:'transparent', border:'none', all:'none'}}>
                                <IconButton>
                                <KeyboardArrowDownIcon/>
                                </IconButton>
                                </DropdownToggle>
                                <DropdownMenu style={{margin:'-2px -160px'}}>
                                   <DropdownItem onClick={this.handleOpen} style={{backgroundColor:'white', color:'black'}} >Change Password</DropdownItem>
                                   <DropdownItem onClick={this.Logout} style={{backgroundColor:'white',color:'black'}} >Logout</DropdownItem>
                                    {/*<DropdownItem header>Header</DropdownItem>
                                     <DropdownItem>Another Action</DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>Another Action</DropdownItem> */} 
                                </DropdownMenu>
                                </UncontrolledDropdown>
                        </IconButton>
                        <StyledModal
                aria-labelledby="unstyled-modal-title"
                aria-describedby="unstyled-modal-description"
                open={this.state.open}
                onClose={this.handleClose}
                BackdropComponent={Backdrop}
              >
                <Box sx={style}>
                  <h2 id="unstyled-modal-title">Change Password</h2>
                  <p id="unstyled-modal-description"> 
              </p>
              <form onSubmit={this.ChangePassword}> 
              <input name="Pass1" placeholder="Old Password" type="text" style={Text} className="form-control"
              value={Pass1} onChange={this.InputChange}
              valid={errors.Pass1 === ''} invalid={errors.Pass1 !== ''}
              onBlur={this.handleBlur('Pass1')} />
                <div style={ErrorMessage}>{errors.Pass1}</div>
              <input name="Pass2" placeholder="New Password" type="password" style={Text} className="form-control"
              value={Pass2} onChange={this.InputChange}
              alid={errors.Pass2 === ''} invalid={errors.Pass2 !== ''}
              onBlur={this.handleBlur('Pass2')}/>
                <div style={ErrorMessage}>{errors.Pass2}</div>
                <div style={ErrorMessage}>{this.state.ErrMessage}</div>
              <Button type = 'submit'  style={RedButton}>Confirm</Button>
              </form>
                </Box>
              </StyledModal>
                </div>
                </div>
                <Mainboard/>
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
const  Text = { 
    display: 'flex',
    height:' 44px',
    width: '100%',
    borderRadius: '18px',
    margin:'5px 5px'
};
const ErrorMessage ={
    fontSize: '10px',
    color: '#E60023'
}