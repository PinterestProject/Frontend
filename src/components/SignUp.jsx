import React from 'react'
import PinterestIcon from '@mui/icons-material/Pinterest';
import IconButton from '@mui/material/IconButton';
import { styled, Box } from '@mui/system';
import ModalUnstyled from '@mui/core/ModalUnstyled';
import Button from 'react-bootstrap/Button';
import axios from "axios"
import PersonIcon from '@mui/icons-material/Person';
import { Col, Row, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import { getTableHeadUtilityClass } from '@mui/material';
import { Redirect, Route } from 'react-router'

export default class SignUp extends React.Component {

    list_new=[]

    constructor(props) {
        super(props);
        this.state = {

            open: false,
            setOpen: false,
            Welcomeopen: false,
            WelcomesetOpen: false,
            categories:[],

            email: '',
            first_name: '',
            last_name: '',
            username: '',
            password: '',
            password_conf: '',
            newUser_id : '',

            ErrMessage: '',
            signupFlag: false,

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
            CanSignup: false,
            redirect_flag: false,

            //caategories
            holiday_id:'',
            design_id:''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.validate = this.validate.bind(this);


        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.WelcomehandleOpen = this.WelcomehandleOpen.bind(this);
        this.WelcomehandleClose = this.WelcomehandleClose.bind(this);
        this.CategoryhandleOpen = this.CategoryhandleOpen.bind(this);
        this.CategoryhandleClose = this.CategoryhandleClose.bind(this);
    }
    handleOpen() {
        this.setState({
            setOpen: true,
            open: true
        })
    }
    handleClose() {
        this.setState({
            setOpen: false,
            open: false
        })
    }
    WelcomehandleOpen() {
        this.setState({
            setOpen: false,
            open: false,
            WelcomesetOpen: true,
            Welcomeopen: true
        })
    }
    WelcomehandleClose() {
        this.setState({
            WelcomesetOpen: false,
            Welcomeopen: false
        })
    }
    CategoryhandleOpen() {
        this.setState({
            WelcomesetOpen: false,
            Welcomeopen: false,
            CategorysetOpen: true,
            Categoryopen: true
        })
    }
    CategoryhandleClose() {
        this.setState({
            CategorysetOpen: false,
            Categoryopen: false
        })
    }
    handleInputChange = event => {
        this.setState({ [event.target.name]: event.target.value });
        this.setState({ ErrMessage: '' })
    }
    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }

    validate(email, first_name, last_name, username, password, password_conf) {
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

        if (this.state.touched.first_name && first_name.length === '')
            errors.first_name = 'You must wirte your First name.';

        if (this.state.touched.last_name && last_name.length === '')
            errors.last_name = 'You must wirte your Last name.';

        if (this.state.touched.username && username.length === '')

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

        await this.setState({
            errors: {
                email: errors.email,
                email: errors.first_name,
                email: errors.last_name,
                email: errors.username,
                email: errors.password,
                password: errors.password_conf
            }
        });
        // alert(JSON.stringify(this.state.errors));
        if (this.state.errors.email && this.state.errors.password && this.state.errors.first_name && this.state.errors.password_conf && this.state.errors.last_name && this.state.errors.username)
            this.setState({ signupFlag: false });

        else
            this.setState({ signupFlag: true });
            console.log('flag before send', this.state.signupFlag);

        var userInfObj = {
            email: this.state.email,
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            username: this.state.username,
            password: this.state.password,
            password_conf: this.state.password_conf,
            categories : {}
        };
        console.log('Current State is: ' + JSON.stringify(userInfObj));
        console.log('Current State is: ' + userInfObj);
        console.log('befor', this.state.signupFlag);

        //    alert(this.state.signupFlag)
        if (this.state.signupFlag === true) {
            console.log('after', this.state.signupFlag);
            // alert('Current State is: ' + JSON.stringify(userInfObj));
            axios.post('http://127.0.0.1:8000/users/signup/', userInfObj)
                .then(response => {
                    console.log(response)
                    // this.props.history.push("/App"); 
                    // history.push("/home");
                    localStorage.setItem('Token', `Token ${response.data.user_token}`);
                    // this.setState({ ErrMessage: "Logged" })
                    // this.setState({ CanSignup: true });
                    this.setState({
                        signupFlag: false,
                        setOpen: false,
                        open: false,
                        WelcomesetOpen: true,
                        Welcomeopen: true
                    })
                }).catch(error => {
                    console.log(error)
                    if (error) {
                        error = error.response.data;
                        this.setState({ ErrMessage: "Provided credentials are incorrect", signupFlag: false })
                    }
                })
        }
    }

    handleCheckboxChecked = event =>{
        console.log(event.target.value) 
        console.log(event.target.checked)
        if (event.target.checked )
           this.list_new.push(event.target.value)
           console.log("list : "+this.list_new) 
        if (!(event.target.checked))
           this.list_new.splice(this.list_new.indexOf(event.target.value),1)
           console.log("list after remove : "+this.list_new) 
    
        console.log("final list : "+this.list_new)  
    } 


    handleCategoriesSubmit = event =>{
        
       this.setState({categories:this.list_new},
        ()=>{console.log(this.state.categories)}) 

         axios.get("http://localhost:8000/users/user-details/", 
              { headers: { "Authorization": localStorage.getItem("Token") } }).then((resp) => {
                console.log(resp.data.data.id)
                let userData = resp.data.data
                this.setState({
                    newUser_id: resp.data.data['id'],
                },()=>{console.log("uaser id : "+ this.state.newUser_id)

                let send_data = {
                    categories: this.state.categories
                }
                axios.patch(`http://localhost:8000/users/users/${this.state.newUser_id}/`,
                send_data, { headers: { "Authorization": localStorage.getItem("Token") } }).then(()=>{

                    this.setState({redirect_flag:true},()=>console.log(this.state.redirect_flag))

                })
            })
        }) 
    }

    render() {
        const redirect_flag  = this.state.redirect_flag
        
        if (redirect_flag) {
            return <Redirect to = {{ pathname: "/main-board" }} /> 
        }
        const { email, first_name, last_name, username, password, password_conf } = this.state;
        const errors = this.validate(this.state.email,
            this.state.first_name,
            this.state.last_name,
            this.state.username,
            this.state.password,
            this.state.password_conf,
        );


        return (<React.Fragment>
            <IconButton onClick={this.handleOpen}>
                <div style={SignupButton} >
                    <a style={{ textDecoration: 'none', fontSize: '14px', fontWeight: 'bold', color: 'black' }}>Sign up</a>
                </div>
            </IconButton>
            <StyledModal
                aria-labelledby="unstyled-modal-title"
                aria-describedby="unstyled-modal-description"
                open={this.state.open}
                onClose={this.handleClose}
                BackdropComponent={Backdrop}>

                <Box sx={style}>
                    <div style={{ alignItems: 'center', margin: '20px 120px' }}>
                        <PinterestIcon style={{ color: '#E60023', fontSize: '40px' }} />
                    </div>
                    <h3 id="unstyled-modal-title" >Welcome to Pinterest</h3>
                    {/* <div style={{  margin:'-10px 65px 40px' }}>Find new ideas to try</div> */}
                    <form onSubmit={this.handleSubmit} style={{ display: 'in-line' }}>
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
                            style={RedButton} >
                            Continue
                        </Button>
                    </form>
                    <p id="unstyled-modal-description">
                        By continuing, you agree to Pinterest's Terms of Service and acknowledge that you've read our Privacy Policy
                    </p>
                </Box>
            </StyledModal>

            <StyledModal aria-labelledby="unstyled-modal-title"
                aria-describedby="unstyled-modal-description"
                open={this.state.Welcomeopen} onClose={this.WelcomehandleClose} BackdropComponent={Backdrop}>
                <Box sx={style}>
                    <div style={{ alignItems: 'center', margin: '20px 90px' }}>
                        <PersonIcon style={{ fontSize: '120px' }} />
                    </div>
                    <h3 id="unstyled-modal-title">Welcome to Pinterest</h3>
                    <h4 style={Center} >{this.state.first_name}</h4>
                    <p id="unstyled-modal-description" style={{ margin: '10px' }}>Your answer to the next question will help us find the right ideas for you</p>
                    <Button type="submit" onClick={this.CategoryhandleOpen} style={RedButton}>Next</Button>
                </Box>
            </StyledModal>
            <StyledModal aria-labelledby="unstyled-modal-title"
                aria-describedby="unstyled-modal-description"
                open={this.state.Categoryopen} onClose={this.CategoryhandleClose} BackdropComponent={Backdrop}>
                <Box sx={style}>
                    <h3 id="unstyled-modal-title">Tell us what you 're interested in</h3>
                    <p id="unstyled-modal-description" style={{ margin: '10px' }}>
                        <Container>
                        <Form>
                                <Row style={{borderStyle: 'hidden'}} >
                                    <Col>
                                        <Card  className=" text-white" style={{borderStyle:'hidden'}}>
                                        <Form.Check type="checkbox"  id="defaultCheck1" onChange={(this.handleCheckboxChecked)}  value='4' />
                                        <Card.Img src="https://i.pinimg.com/564x/3f/bc/8a/3fbc8a79cce1f6e419918b2d5228a345.jpg" alt="Card image" style={{ width:'100px',height:'100px',borderStyle: 'hidden',borderRadius:'16px', filter: 'brightness(70%)'}} />
                                        <Card.ImgOverlay>
                                                <Card.Title style={{fontSize:'15px'}}>Holiday</Card.Title>
                                                </Card.ImgOverlay>
                                        </Card>
                                  </Col>
                                  <Col>
                                  <Card  className=" text-white" style={{borderStyle:'hidden'}}>
                                    <Form.Check type="checkbox"  id="defaultCheck2" onChange={(this.handleCheckboxChecked)}  value='5'/>
                                    <Card.Img src="https://i.pinimg.com/736x/91/49/b6/9149b6152aa72265369198e94ccef096.jpg" alt="Card image" style={{ width:'100px',height:'100px',borderStyle: 'hidden',borderRadius:'16px',filter: 'brightness(70%)'}} />
                                    <Card.ImgOverlay>
                                            <Card.Title style={{fontSize:'15px'}}>Art</Card.Title>
                                            </Card.ImgOverlay>
                                    </Card>
                                  </Col>
                                </Row>  

                                <Row style={{borderStyle: 'hidden'}} >
                                    <Col>
                                        <Card  className=" text-white" style={{borderStyle:'hidden'}}>
                                            <Form.Check type="checkbox" id="defaultCheck3" onChange={(this.handleCheckboxChecked)}  value='6'/>  
                                            <Card.Img src="https://i.pinimg.com/736x/a6/4e/fd/a64efdf5a4be30ba38fd0190f4a51339.jpg" alt="Card image" style={{width:'100px',height:'100px' ,borderStyle: 'hidden',borderRadius:'16px',filter: 'brightness(70%)'}} />
                                            <Card.ImgOverlay>
                                                    <Card.Title style={{fontSize:'15px'}}>Animals</Card.Title>
                                            </Card.ImgOverlay>
                                        </Card>
                                  </Col>
                                  <Col>                                  
                                    <Card  className=" text-white" style={{borderStyle:'hidden'}}>
                                    <Form.Check type="checkbox"  id="defaultCheck4" onChange={(this.handleCheckboxChecked)}  value='7'/>
                                            <Card.Img src="https://i.pinimg.com/564x/1d/f1/27/1df127a58b70a9403d80d6c569e1201a.jpg" alt="Card image" style={{ width:'100px',height:'100px',borderStyle: 'hidden',borderRadius:'16px',filter: 'brightness(70%)'}} />
                                            <Card.ImgOverlay>
                                                <Card.Title style={{fontSize:'15px'}}>Design</Card.Title>
                                            </Card.ImgOverlay>
                                    </Card>
                                  </Col>
                                </Row> 

                                <Row style={{borderStyle: 'hidden'}} >
                                    <Col>
                                    <Card  className=" text-white" style={{borderStyle:'hidden'}}>                                    
                                    <Form.Check type="checkbox"  id="defaultCheck5" onChange={(this.handleCheckboxChecked)}  value='8'/>
                                        <Card.Img src="https://i.pinimg.com/564x/a9/87/49/a9874905dbc9e8db298aad5b34483679.jpg" alt="Card image" style={{ width:'100px',height:'100px',borderStyle: 'hidden',borderRadius:'16px',filter: 'brightness(70%)'}} />
                                                <Card.ImgOverlay>
                                                        <Card.Title style={{fontSize:'15px'}}>Beauty</Card.Title>
                                                </Card.ImgOverlay>
                                        </Card>
                                  </Col>
                                  <Col>
                                     
                                  <Card  className=" text-white" style={{borderStyle:'hidden'}}>
                                  <Form.Check type="checkbox" id="defaultCheck6" onChange={(this.handleCheckboxChecked)}  value='9'/>
                                   <Card.Img src="https://i.pinimg.com/736x/6b/66/9d/6b669da26dcc8c6e388e52365b76f75e.jpg" alt="Card image" style={{ width:'100px',height:'100px',borderStyle: 'hidden',borderRadius:'16px',filter: 'brightness(70%)'}} />
                                   <Card.ImgOverlay>
                                        <Card.Title style={{fontSize:'15px'}}>Quotes</Card.Title>
                                        </Card.ImgOverlay>
                                  </Card>
                                </Col>
                                </Row> 
 
                                <Row style={{borderStyle: 'hidden'}} >
                                    <Col>
                                    <Card  className=" text-white" style={{borderStyle:'hidden'}}>
                                    <Form.Check type="checkbox"  id="defaultCheck7" onChange={(this.handleCheckboxChecked)}  value='10'/>
                                   <Card.Img src="https://i.pinimg.com/736x/f6/f6/ca/f6f6ca6bb50be348b0f8fdb87ea3b89b.jpg" alt="Card image" style={{width:'100px',height:'100px',borderStyle: 'hidden',borderRadius:'16px',filter: 'brightness(70%)'}} />
                                   <Card.ImgOverlay>
                                        <Card.Title style={{fontSize:'15px'}}>Event Planning</Card.Title>
                                        </Card.ImgOverlay>
                                  </Card>
                                  </Col>
                                  <Col>
                                  <Card  className=" text-white" style={{borderStyle:'hidden'}}>
                                    
                                 
                                  <Form.Check type="checkbox" id="defaultCheck8" onChange={(this.handleCheckboxChecked)}  value='11'/>
                                   <Card.Img src="https://i.pinimg.com/564x/51/6e/60/516e60bb9c0f64f094e8cd848f6e07b9.jpg" alt="Card image" style={{ width:'100px',height:'100px',borderStyle: 'hidden',borderRadius:'16px',filter: 'brightness(70%)'}} />
                                   <Card.ImgOverlay>
                                        <Card.Title style={{fontSize:'15px'}}>Home décor</Card.Title>
                                        </Card.ImgOverlay>
                                  </Card>
                                  </Col>
                                </Row> 
                               
                           </Form>
                        </Container>
                    </p>
                    <Button type="submit" style={RedButton} onClick={(this.handleCategoriesSubmit)}>Done
                        </Button>
                </Box>
            </StyledModal>
        </React.Fragment>

        )
    }
}

// const  Wrapper = {
//     display: 'flex',
//     alignItems: 'center',
//     height: '40px',
//     padding: '12px 4px 4px 16px',
//   };

const SignupButton = {

    backgroundColor: 'lightgrey',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '24px',
    cursor: 'pointer',
    height: '35px',
    minWidth: '60px',
};
const Text = {
    display: 'flex',
    height: ' 44px',
    width: '100%',
    borderRadius: '18px',
    margin: '5px 5px'
};

// const  IconWrapper = {
//     marginLeft:'20px',
// };

const RedButton = {
    display: 'flex',
    height: ' 44px',
    width: '100%',
    borderRadius: '18px',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E60023',
    margin: '15px 5px'
};
const ErrorMessage = {
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
    margin: '10px',
    border: '2px solid #000',
    p: 2,
    px: 4,
    pb: 3,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
};
const Center = {
    margin: 'auto',
    width: '40%',
    padding: '5px',
};
const Category = {
    border: "2px solid lightgray",
    borderRadius: '18px',
    margin: "6px 10px",
};