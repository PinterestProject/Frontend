import React from 'react'
import PinterestIcon from '@mui/icons-material/Pinterest';
import IconButton from '@mui/material/IconButton';
import { styled, Box } from '@mui/system';
import ModalUnstyled from '@mui/core/ModalUnstyled';
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

export default function MainPage() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
                        <IconButton onClick={handleOpen}>
                            <div style={Login}>
                                <a  style={{textDecoration: 'none', fontSize: '14px',fontWeight: 'bold', color: 'white' }}>Log in</a>
                            </div>
                        </IconButton>
        <StyledModal aria-labelledby="unstyled-modal-title"
            aria-describedby="unstyled-modal-description"
            open={open} onClose={handleClose} BackdropComponent={Backdrop}>
        <Box sx={style}>
                    <div style={{ alignItems: 'center', margin:'20px 120px' }}>
                        <PinterestIcon style={{color:'#E60023', fontSize: '40px'}}/>
                    </div>
            <h3 id="unstyled-modal-title" >Welcome to Pinterest</h3>
            <input name="email" placeholder="Email" type="text" style={Text} className="form-control" />
            <input name="password" placeholder="Password" type="password" style={Text} className="form-control" />
            <a href='/' className="l">Forgotten your password?</a>
            <Button type="submit"  style={{display: 'flex', height:' 44px', width: '100%',
                borderRadius: '18px',  justifyContent: 'center',
                alignItems: 'center',backgroundColor:'#E60023',  margin:'15px 5px'}}>Log in</Button>
          <p id="unstyled-modal-description">By continuing, you agree to Pinterest's Terms of Service and acknowledge that you've read our Privacy Policy</p>
        </Box>
      </StyledModal>
                    <IconButton>
                        <div style={SignupButton}>
                            <a href='/' style={{textDecoration: 'none', fontSize: '14px',fontWeight: 'bold', color: 'black' }}>Sign up</a>
                        </div>
                    </IconButton>
                </div> 
                </div>
            </div>
        )
    }
 
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