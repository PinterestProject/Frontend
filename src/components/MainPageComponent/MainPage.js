import React from 'react'
import PinterestIcon from '@mui/icons-material/Pinterest';
import IconButton from '@mui/material/IconButton';
import { styled, Box } from '@mui/system';
import ModalUnstyled from '@mui/core/ModalUnstyled';
import Button from 'react-bootstrap/Button';
import PersonIcon from '@mui/icons-material/Person';
import {Col, Row, Container} from 'reactstrap';
import { baseUrl } from '../BaseUrl';
import axios from 'axios';
import './MainPage.css';
{/* 
const style2 = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width:700,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
    backgroundColor: 'white',
    borderRadius: '16px',
    objectFit: 'cover',
    justifyContent: 'center',
    alignItems: 'center',  
  };
*/}
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
{/* 
export class ChildModal extends React.Component{
    constructor(props){
        super(props);
        this.state={
            open: false,  
            setOpen: false,
            Pass1:'',
            Pass2:'',
        }
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.InputChange = this.InputChange.bind(this);
        this.ChangePassword = this.ChangePassword.bind(this);
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
        event.preventDefault();
       this.setState({[event.target.name]: event.target.value});
     }

    ChangePassword(event) {
        event.preventDefault();
        var Token = localStorage.getItem('Token')
        alert(Token)
        var newObject2  = {
            old_pass:this.state.Pass1,
            new_password:this.state.Pass2
         };
         var Header = {
            Authorization:Token
         };
        console.log('Current State is: ' + JSON.stringify(newObject2));
        alert('Current State is: ' + JSON.stringify(newObject2));
        axios.post('http://127.0.0.1:8000/users/changepassword/', newObject2, {headers:Header}).then(response => {
            console.log(response)
            alert(JSON.stringify(response));
        }).catch(error => {
            console.log(error)
            alert(JSON.stringify(error));
        })
    }
   
    render() {
        const{Pass1, Pass2} = this.state
        return (
            <React.Fragment>
            <a  className="l" onClick={this.handleOpen}>Forgotten your password? </a>
          <Modal
            hideBackdrop
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="child-modal-title"
            aria-describedby="child-modal-description"
          >
            <Box sx={{ ...style2, width: 280 }}>
              <h3 id="child-modal-title" >Change Your Password</h3>
              <p id="child-modal-description">
              <form onSubmit={this.ChangePassword}> 
              <input name="Pass1" placeholder="Old Password" type="text" style={Text} className="form-control"
              value={Pass1} onChange={this.InputChange} />
              <input name="Pass2" placeholder="New Password" type="password" style={Text} className="form-control"
              value={Pass2} onChange={this.InputChange}/>
              <Button type = 'submit'  style={RedButton}>Confirm</Button>
              </form>
              </p>
            </Box>
          </Modal>
        </React.Fragment>
        )
    }
}
*/}
export default class MainPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            Loginopen: false,
            LoginsetOpen: false,
            open: false,  
            setOpen: false,
            Welcomeopen: false,  
            WelcomesetOpen: false,
            Categorysopen: false,  
            CategorysetOpen: false,
            LoginEmail: '',
            LoginPassword: '', 
            ErrMessage:'',
            Login:false,
            touched: {
                LoginEmail: '',
                LoginPassword: '', 
            },
            errors: {
                LoginEmail: '',
                LoginPassword: '', 
            },
        }
        this.LoginhandleOpen = this.LoginhandleOpen.bind(this);
        this.LoginhandleClose = this.LoginhandleClose.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.WelcomehandleOpen = this.WelcomehandleOpen.bind(this);
        this.WelcomehandleClose = this.WelcomehandleClose.bind(this);
        this.CategoryhandleOpen = this.CategoryhandleOpen.bind(this);
        this.CategoryhandleClose = this.CategoryhandleClose.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.validate = this.validate.bind(this);
    }
    LoginhandleOpen(){
        this.setState({
            LoginsetOpen: true,
            Loginopen: true
        })
    }
    LoginhandleClose(){
        this.setState({
            LoginsetOpen: false,
            Loginopen: false
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
    CategoryhandleOpen(){
        this.setState({
            WelcomesetOpen: false, 
            Welcomeopen: false,
            CategorysetOpen: true,
            Categoryopen: true
        })
    }
    CategoryhandleClose(){
        this.setState({
            CategorysetOpen: false,
            Categoryopen: false
        })
    }
    handleInputChange = event => {
      this.setState({[event.target.name]: event.target.value});
      this.setState({ErrMessage:''})
    }
    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }
    validate(LoginEmail,LoginPassword) {
        const errors = {
            LoginEmail: '',
            LoginPassword: '', 
        };
        if (this.state.touched.LoginEmail && !LoginEmail.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))
            errors.LoginEmail = 'That doesnot look like an email address.';
        if (this.state.touched.LoginPassword && LoginPassword.length < 4)
            errors.LoginPassword = 'Password should be more than 4 characters.';
        else if (this.state.touched.LoginPassword && LoginPassword.length > 12)
            errors.LoginPassword = 'Password should be less than 12 characters.'; 
        return errors;
    }
    
    async handleSubmit(event) {
        event.preventDefault();
        const errors = this.validate(this.state.LoginEmail, this.state.LoginPassword);
        await this.setState({errors:{LoginEmail:errors.LoginEmail,
        LoginPassword:errors.LoginPassword}});
       // alert(this.state.errors.LoginEmail)
        //alert(this.state.errors.LoginPassword)
        //alert(this.state.Login)

      if (this.state.errors.LoginEmail === '' && this.state.errors.LoginPassword === '')
          this.setState({Login:true}); 
      else
          this.setState({Login:false});
        var newObject  = {
            username:this.state.LoginEmail,
            password:this.state.LoginPassword
         };
        console.log('Current State is: ' + JSON.stringify(newObject));
       // alert(this.state.Login)
         if (this.state.Login === true){
        // alert('Current State is: ' + JSON.stringify(newObject));
        axios.post('http://127.0.0.1:8000/users/login/',newObject).then(response => {
            console.log(response)
        //  alert('Data is: ' + JSON.stringify(response.data));
        //  alert('Token is: ' + JSON.stringify(response.data.token));
            localStorage.setItem('Token',`Token ${response.data.token}`);
            this.setState({ErrMessage: "Logged", Login:false})
        }).catch(error => {
            console.log(error)
            if(error){
                error = error.response.data;
            //   alert('Error is: ' + error);
            //  alert('Error is: ' + JSON.stringify(error));
                this.setState({ErrMessage: "Provided credentials are incorrect", Login:false})
            }
        })
    }}
    render(){
        const{LoginEmail, LoginPassword} = this.state;
        const errors = this.validate(this.state.LoginEmail, this.state.LoginPassword);
        return (
            <div>
                <div style={Wrapper}>
                    <PinterestIcon style={{color:'#E60023', fontSize: '30px'}}/>
                    <div style={{color:'#E60023', fontWeight: 'bold'} }>Pinterest</div>
                <div style={SearchWrapper}></div>
                <div style={IconWrapper}>
                        <IconButton >
                            <div style={Home} >
                                <a href='/' className="l">About</a>
                            </div>
                        </IconButton>
                        <IconButton>
                            <div style={Home}>
                                <a href='/' className="l">Business</a>
                            </div>
                        </IconButton>
                        <IconButton>
                            <div style={Home}>
                                <a href='/' className="l">Press</a>
                            </div>
                        </IconButton>
                        <IconButton onClick={this.LoginhandleOpen}>
                            <div style={Login}>
                                <a  style={{textDecoration: 'none', fontSize: '14px',fontWeight: 'bold', color: 'white' }}>Log in</a>
                            </div>
                        </IconButton>
        <StyledModal aria-labelledby="unstyled-modal-title"
            aria-describedby="unstyled-modal-description"
            open={this.state.Loginopen} onClose={this.LoginhandleClose} BackdropComponent={Backdrop}>
        <Box sx={style}>
                    <div style={{ alignItems: 'center', margin:'20px 120px' }}>
                        <PinterestIcon style={{color:'#E60023', fontSize: '40px'}}/>
                    </div>
            <h3 id="unstyled-modal-title">Welcome to Pinterest</h3>
            <form onSubmit={this.handleSubmit} style={{display:'in-line'}}> 
            <input name="LoginEmail" placeholder="Email" type="text" id="LoginEmail" style={Text} className="form-control" 
            value={LoginEmail} onChange={this.handleInputChange}
            valid={errors.LoginEmail === ''} invalid={errors.LoginEmail !== ''}
            onBlur={this.handleBlur('LoginEmail')}/>
              <div style={ErrorMessage}>{errors.LoginEmail}</div>
            <input name="LoginPassword" placeholder="Password" type="password" id="LoginPassword" style={Text} className="form-control" 
            value={LoginPassword} onChange = {this.handleInputChange}
            valid={errors.LoginPassword === ''} invalid={errors.LoginPassword !== ''}
            onBlur={this.handleBlur('LoginPassword')}/>
            <div style={ErrorMessage}>{errors.LoginPassword}</div>
            {/*  <ChildModal /> */}
            <div style={ErrorMessage}>{this.state.ErrMessage}</div>
            <Button type = 'submit' style={RedButton}>Log in</Button>
            </form>
          <p id="unstyled-modal-description">By continuing, you agree to Pinterest's Terms of Service and acknowledge that you've read our Privacy Policy</p>
        </Box>
      </StyledModal>
      <IconButton onClick={this.handleOpen}>
                            <div style={SignupButton} >
                            <a style={{textDecoration: 'none', fontSize: '14px',fontWeight: 'bold', color: 'black' }}>Sign up</a>
                            </div>
                        </IconButton>
        <StyledModal aria-labelledby="unstyled-modal-title"
            aria-describedby="unstyled-modal-description"
            open={this.state.open} onClose={this.handleClose} BackdropComponent={Backdrop}>
        <Box sx={style}>
                    <div style={{ alignItems:'center', margin:'20px 120px'}}>
                        <PinterestIcon style={{color:'#E60023', fontSize: '40px'}}/>
                    </div>
            <h3 id="unstyled-modal-title" >Welcome to Pinterest</h3>
            <div style={{  margin:'-10px 65px 40px' }}>Find new ideas to try</div>
            <input name="email" placeholder="Email" type="text" style={Text} className="form-control" />
            <input name="password" placeholder="Create a Password" type="password" style={Text} className="form-control" />
            <input name="age" placeholder="Age" type="text" style={Text} className="form-control" />
            <Button type="submit" onClick={this.WelcomehandleOpen} style={RedButton}>Continue</Button>
          <p id="unstyled-modal-description">By continuing, you agree to Pinterest's Terms of Service and acknowledge that you've read our Privacy Policy</p>
        </Box>
      </StyledModal>
      <StyledModal aria-labelledby="unstyled-modal-title"
            aria-describedby="unstyled-modal-description"
            open={this.state.Welcomeopen} onClose={this.WelcomehandleClose} BackdropComponent={Backdrop}>
        <Box sx={style}>
                    <div style={{ alignItems: 'center', margin:'20px 90px' }}>
                        <PersonIcon style={{fontSize: '120px'}}/>
                    </div>
            <h3 id="unstyled-modal-title">Welcome to Pinterest</h3>
            <h4 style={Center} >Jhon Doe</h4>
          <p id="unstyled-modal-description" style={{margin:'10px'}}>Your answer to the next question will help us find the right ideas for you</p>
          <Button type="submit" onClick={this.CategoryhandleOpen} style={RedButton}>Next</Button>
        </Box>
      </StyledModal>
      <StyledModal aria-labelledby="unstyled-modal-title"
            aria-describedby="unstyled-modal-description"
            open={this.state.Categoryopen} onClose={this.CategoryhandleClose} BackdropComponent={Backdrop}>
        <Box sx={style}>
          <h3 id="unstyled-modal-title">Tell us what you 're interested in</h3>
          <p id="unstyled-modal-description" style={{margin:'10px'}}>
          <Container>
          <div class="form-check">
            <Row>
                <Col style={Category}><input class="form-check-input"  type="checkbox" value="" id="defaultCheck1"></input> Holidays</Col>
                <Col style={Category}><input class="form-check-input" type="checkbox" value="" id="defaultCheck2"></input> Art</Col>
            </Row>
            <Row>
                <Col style={Category}><input class="form-check-input" type="checkbox" value="" id="defaultCheck3"></input>Animals</Col>
                <Col style={Category}><input class="form-check-input" type="checkbox" value="" id="defaultCheck4"></input>Design</Col>
            </Row>
            <Row>
                <Col style={Category}><input class="form-check-input" type="checkbox" value="" id="defaultCheck5"></input>Beauty</Col>
                <Col style={Category}><input class="form-check-input" type="checkbox" value="" id="defaultCheck6"></input>Quotes</Col>
            </Row>
            <Row>
                <Col style={Category}><input class="form-check-input" type="checkbox" value="" id="defaultCheck8"></input>Event planning</Col>
                <Col style={Category}><input class="form-check-input" type="checkbox" value="" id="defaultCheck7"></input>Home décor</Col>
            </Row>
            </div>
            </Container>
          </p>      
          <Button type="submit" style={RedButton}>Done
          </Button>
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
  const  Home = {
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '24px',
    cursor: 'pointer', 
    height: '35px',
    minWidth: '60px',       
};
const  Login = {
    backgroundColor: '#E60023',
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '24px',
    cursor: 'pointer', 
    height: '35px',
    minWidth: '60px',      
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
const  SearchWrapper = {
    flex: 1 //takes all the space it can gets
};
const  IconWrapper = {
    marginLeft:'20px',
};
const  Center = { 
    margin: 'auto',
    width: '40%',
    padding: '5px',
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
const  Category = { 
    border:"2px solid lightgray", 
    borderRadius: '18px',
    margin:"6px 10px",
};
const ErrorMessage ={
    fontSize: '10px',
    color: '#E60023'
}