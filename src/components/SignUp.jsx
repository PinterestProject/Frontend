import React from 'react'
import PinterestIcon from '@mui/icons-material/Pinterest';
import IconButton from '@mui/material/IconButton';
import { styled, Box } from '@mui/system';
import ModalUnstyled from '@mui/core/ModalUnstyled';
import Button from 'react-bootstrap/Button';
import PersonIcon from '@mui/icons-material/Person';
import {Col, Row, Container} from 'reactstrap';
import axios from "axios"

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
    width: '350px',
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
// const fetchData = () => {
//     return axios.get("http://localhost:8000/categories/")
//           .then((response) => console.log(response.data)
//           );
//         }


export default class SignUp extends React.Component{
    constructor(props){
        super(props);
        this.state={

            open: false,  
            setOpen: false,
            Welcomeopen: false,  
            WelcomesetOpen: false,

            email: '',
            first_name:'',
            last_name:'',
            username:'',
            password:'',
            password_conf:'',
            
        }

        // this.email = this.email.bind(this);
        // this.first_name = this.first_name.bind(this);
        // this.last_name = this.last_name.bind(this);
        // this.username = this.username.bind(this);
        // this.birth_day = this.birth_day.bind(this);
        // this.password = this.email.bind(this);
        // this.password_conf = this.password_conf.bind(this);
        this.register = this.register.bind(this);

        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.WelcomehandleOpen = this.WelcomehandleOpen.bind(this);
        this.WelcomehandleClose = this.WelcomehandleClose.bind(this);
    }


    handleOpen(){
        this.setState({
            setOpen: true, 
            open: true
        })
        // axios.get("http://127.0.0.1:8000/categories/").then((response)=>{
        //     console.log(response.data)
        //     const categories = response.data;
        //     this.setState({ categories: categories })
        // })
    }
    handleClose(){
        this.setState({
            setOpen: false,
            open: false
        })
    }
    WelcomehandleOpen(){
        this.setState({
            setOpen: false,
            open: false,
            WelcomesetOpen: true, 
            Welcomeopen: true
        })
    }
    WelcomehandleClose(){
        this.setState({
            WelcomesetOpen: false,
            Welcomeopen: false
        })
    }

    EmailHandler(event){
        this.setState({ email: event.target.value })
    }
    FisrtNameHandler(event){
        this.setState({ first_name: event.target.value })
    }
    LastNameHandler(event){
        this.setState({ last_name: event.target.value })
    }
    userNameHandler(event){
        this.setState({ username: event.target.value })
    }
    // birthDateHandler(event){
    //     this.setState({ birth_day: event.target.value })
    // }
    passwordHandler(event){
        this.setState({ password: event.target.value })
    }
    conPasswordHandler(event){
        this.setState({ password_conf: event.target.value })
    }


  register(event) {
    event.preventDefault()
    fetch('http://127.0.0.1:8000/users/signup/', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: this.state.email,
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        username: this.state.username,
        password: this.state.password,
        password_conf: this.state.password_conf,
      })
    }).then((Response) => Response.json())
      .then((Result) => {
          console.log(Response)
          console.log(Result)
        // if (Result.Status == 'Success')
                // this.props.history.push("");
        // else
        //   alert('Sorrrrrry !!!! Un-authenticated User !!!!!')
      })
  }


    // GetCategories=()=>{
    //     axios.get("http://127.0.0.1:8000/categories/").then((response)=>{
    //         console.log(response.data)
    //         const categories = response.data;
    //         this.setState({ categories: categories })
    //     })
    // }
// HandleGet=(e)=>{
//     e.preventDefault()
    
//     axios.get("http://127.0.0.1:8000/categories/").then((response)=>{
//         console.log(response.data)
//         const categories = response.data;
//         this.setState({ categories: categories })
//     })
    
// }
    
    render(){
        return (
            <div>
                <div style={Wrapper}>
                    <div style={IconWrapper}>
                        <IconButton onClick={this.handleOpen}>
                            <div style={SignupButton} >
                                <a style={{textDecoration: 'none', fontSize: '14px',fontWeight: 'bold', color: 'black' }}>Sign up</a>
                            </div>
                        </IconButton>
                        <StyledModal 
                                aria-labelledby="unstyled-modal-title"
                                aria-describedby="unstyled-modal-description"
                                open={this.state.open} 
                                onClose={this.handleClose} 
                                BackdropComponent={Backdrop}>

                            <Box sx={style}>
                                <div style={{ alignItems:'center', margin:'20px 120px'}}>
                                    <PinterestIcon style={{color:'#E60023', fontSize: '40px'}}/>
                                </div>
                                <h3 id="unstyled-modal-title" >Welcome to Pinterest</h3>
                                {/* <div style={{  margin:'-10px 65px 40px' }}>Find new ideas to try</div> */}

                                <input name="email" 
                                        placeholder="Email" 
                                        type="text" style={Text} 
                                     
                                        onChange={this.email}
                                        className="form-control" />
                                <input 
                                        name="first_name" 
                                        placeholder="First Name" 
                                        type="text" style={Text}
                                        
                                        onChange={this.first_name}
                                        className="form-control" />
                                <input 
                                        name="last_name" 
                                        placeholder="Last Name" 
                                        type="text" 
                                        style={Text} 
                                        
                                        onChange={this.last_name}
                                        className="form-control" />
                                <input 
                                        name="username" 
                                        placeholder="User Name" 
                                        type="text" 
                                        style={Text} 
                                        
                                        onChange={this.username}
                                        className="form-control" />
                                {/* <input 
                                        name="birth_day" 
                                        placeholder="Dirth Date" 
                                        type="date" 
                                        onChange={this.birth_day}
                                        style={Text} 
                                        className="form-control" /> */}
                                <input 
                                        name="password" 
                                        placeholder="Create a Password" 
                                        type="password" 
                                        style={Text} 
                                        onChange={this.password}
                                        className="form-control" />
                                <input 
                                        name="password_conf" 
                                        placeholder="Confirm Password" 
                                        type="password" 
                                        style={Text} 
                                        onChange={this.password_conf}
                                        className="form-control" />

                                  

                                <Button type="submit" 
                                        onClick={this.register} 
                                        style={RedButton}>
                                            Continue
                                        </Button>

                                <p id="unstyled-modal-description">
                                    By continuing, you agree to Pinterest's Terms of Service and acknowledge that you've read our Privacy Policy
                                </p>
                            </Box>
                        </StyledModal>
                    </div> 
                </div>
            </div>
        )
    }}
 
const  Wrapper = {
    display: 'flex',
    alignItems: 'center',
    height: '40px',
    padding: '12px 4px 4px 16px',
  };
const  SignupButton = {
    backgroundColor: 'lightgrey',
    display:'flex', 
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '24px',
    cursor: 'pointer', 
    height: '35px',
    minWidth: '60px',        
};
const  Text = { 
    display: 'flex',
    height:' 44px',
    width: '100%',
    borderRadius: '18px',
    margin:'5px 5px'
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
