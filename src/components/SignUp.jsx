import React from 'react'
import PinterestIcon from '@mui/icons-material/Pinterest';
import IconButton from '@mui/material/IconButton';
import { styled, Box } from '@mui/system';
import ModalUnstyled from '@mui/core/ModalUnstyled';
import Button from 'react-bootstrap/Button';
import axios from "axios"


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

            ErrMessage:'',
            signupFlag:false,

            touched: {
                email: '',
                first_name: '', 
                last_name: '', 
                username: '', 
                password: '', 
                password_conf: '', 
            },
            errors: {
                email: '',
                first_name: '', 
                last_name: '', 
                username: '', 
                password: '', 
                password_conf: '', 
            },
            
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.validate = this.validate.bind(this);


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

    handleInputChange = event => {
        this.setState({[event.target.name]: event.target.value});
        this.setState({ErrMessage:''})
      }
    handleBlur = (field) => (evt) => {
          this.setState({
              touched: { ...this.state.touched, [field]: true }
          });
      }
    
      validate(email,first_name, last_name, username, password, password_conf) {
        const errors = {
            email: '',
            first_name: '', 
            last_name: '', 
            username: '', 
            password: '', 
            password_conf: '', 
        };

        if (this.state.touched.email && !email.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))
            errors.email = 'That doesnot look like an email address.';

        if (this.state.touched.first_name && first_name.length =='')
            errors.first_name = 'You must wirte your First name.';

        if (this.state.touched.last_name && last_name.length =='')
            errors.last_name = 'You must wirte your Last name.';
        
        if (this.state.touched.username && username.length =='')
            errors.username = 'You must wirte your account name.';

        if (this.state.touched.password && password.length < 4)
            errors.password = 'Password should be more than 4 characters.';
        else if (this.state.touched.password && password.length > 12)
            errors.password = 'Password should be less than 12 characters.'; 
        
        if (this.state.touched.password_conf && password_conf.length < 4)
            errors.password_conf = 'Password should be more than 4 characters.';
        else if (this.state.touched.password_conf && password_conf.length > 12)
            errors.password_conf = 'Password should be less than 12 characters.'; 

    
        return errors;
    }

    

    async handleSubmit(event) {
        event.preventDefault();
        const errors = this.validate(
            this.state.email,
            this.state.first_name,
            this.state.last_name,
            this.state.username,
            this.state.password,
            this.state.password_conf,
            );

    await this.setState({errors:{
                email:errors.email,
                email:errors.first_name,
                email:errors.last_name,
                email:errors.username,
                email:errors.password,
                password:errors.password_conf
            }});
            // alert(JSON.stringify(this.state.errors));
      if (this.state.errors.email === ''  && this.state.errors.password === '' )
          this.setState({signupFlag:true}); 
          
      else
          this.setState({signupFlag:false});
          console.log('flag before send',this.state.signupFlag);
        
        var userInfObj  = {
            email:this.state.email,
            first_name:this.state.first_name,
            last_name:this.state.last_name,
            username:this.state.username,
            password:this.state.password,
            password_conf:this.state.password_conf
         };
        console.log('Current State is: ' + JSON.stringify(userInfObj));
        console.log('Current State is: ' + userInfObj);
        console.log('befor',this.state.signupFlag);

    //    alert(this.state.signupFlag)
         if (this.state.signupFlag === true){
          console.log('after',this.state.signupFlag);
        // alert('Current State is: ' + JSON.stringify(userInfObj));
        axios.post('http://127.0.0.1:8000/users/signup/',userInfObj)
        .then(response => {
            console.log(response)
            // this.props.history.push("/App"); 
            // history.push("/home");
            localStorage.setItem('Token',`Token ${response.data.token}`);
            this.setState({ErrMessage: "Logged", signupFlag:false})
        }).catch(error => {
            console.log(error)
            if(error){
                error = error.response.data;
                this.setState({ErrMessage: "Provided credentials are incorrect", signupFlag:false})
            }
        })
    }}


    render(){
        const{email, first_name, last_name, username, password, password_conf} = this.state;
        const errors = this.validate(this.state.email,
            this.state.first_name,
            this.state.last_name,
            this.state.username,
            this.state.password,
            this.state.password_conf,
             );
        return ( <React.Fragment>
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
                                <form onSubmit={this.handleSubmit} style={{display:'in-line'}}> 
                                    <input name="email" 
                                            placeholder="Email" 
                                            type="text" style={Text} 
                                            className="form-control"
                                            id="email"
                                            value={email} 
                                            onChange={this.handleInputChange}
                                            valid={errors.email === ''} 
                                            invalid={errors.email !== ''}
                                            onBlur={this.handleBlur('email')} />
                                        <div style={ErrorMessage}>{errors.email}</div>
                                    <input 
                                            name="first_name" 
                                            placeholder="First Name" 
                                            type="text" style={Text}
                                            className="form-control" 
                                            id="first_name"
                                            value={first_name} 
                                            onChange={this.handleInputChange}
                                            valid={errors.first_name === ''} 
                                            invalid={errors.first_name !== ''}
                                            onBlur={this.handleBlur('first_name')}
                                            />
                                        <div style={ErrorMessage}>{errors.first_name}</div>
                                            
                                    <input 
                                            name="last_name" 
                                            placeholder="Last Name" 
                                            type="text" 
                                            style={Text} 
                                            className="form-control" 
                                            id="last_name"
                                            value={last_name} 
                                            onChange={this.handleInputChange}
                                            valid={errors.last_name === ''} 
                                            invalid={errors.last_name !== ''}
                                            onBlur={this.handleBlur('last_name')}
                                            />
                                        <div style={ErrorMessage}>{errors.last_name}</div>
                                        
                                    <input 
                                            name="username" 
                                            placeholder="User Name" 
                                            type="text" 
                                            style={Text} 
                                            className="form-control" 
                                            id="username"
                                            value={username} 
                                            onChange={this.handleInputChange}
                                            valid={errors.username === ''} 
                                            invalid={errors.username !== ''}
                                            onBlur={this.handleBlur('username')}
                                            />
                                        <div style={ErrorMessage}>{errors.username}</div>
                                        
                                    <input 
                                            name="password" 
                                            placeholder="Create a Password" 
                                            type="password" 
                                            style={Text} 
                                            className="form-control" 
                                            id="password"
                                            value={password} 
                                            onChange={this.handleInputChange}
                                            valid={errors.password === ''} 
                                            invalid={errors.password !== ''}
                                            onBlur={this.handleBlur('password')}
                                            />
                                        <div style={ErrorMessage}>{errors.password}</div>
                                        
                                    <input 
                                            name="password_conf" 
                                            placeholder="Confirm Password" 
                                            type="password" 
                                            style={Text} 
                                            className="form-control" 
                                            id="password_conf"
                                            value={password_conf} 
                                            onChange={this.handleInputChange}
                                            valid={errors.password_conf === ''} 
                                            invalid={errors.password_conf !== ''}
                                            onBlur={this.handleBlur('password_conf')}
                                            />
                                        <div style={ErrorMessage}>{errors.password_conf}</div>

                                    <div style={ErrorMessage}>{this.state.ErrMessage}</div>
                                    <Button type="submit" 
                                            style={RedButton}>
                                                Continue
                                            </Button>
                                </form>
                                    <p id="unstyled-modal-description">
                                        By continuing, you agree to Pinterest's Terms of Service and acknowledge that you've read our Privacy Policy
                                    </p>
                            </Box>
                        </StyledModal>
            </React.Fragment>

        )
    }}
 
// const  Wrapper = {
//     display: 'flex',
//     alignItems: 'center',
//     height: '40px',
//     padding: '12px 4px 4px 16px',
//   };

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

// const  IconWrapper = {
//     marginLeft:'20px',
// };

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
const ErrorMessage ={
    fontSize: '10px',
    color: '#E60023'
}

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