import React, { useState } from 'react';
import PinterestIcon from '@mui/icons-material/Pinterest';
import IconButton from '@mui/material/IconButton';
import { styled, Box } from '@mui/system';
import ModalUnstyled from '@mui/core/ModalUnstyled';
import Button from 'react-bootstrap/Button';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import {
    EmailShareButton,
    FacebookShareButton,
    // LinkedinShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    // WorkplaceShareButton
  } from "react-share";
  import {
    EmailIcon,
    FacebookIcon,
    // LinkedinIcon,
    TwitterIcon,
    WhatsappIcon,
    // WorkplaceIcon
  } from "react-share";
export default function Model() {

const [copySuccess, setCopySuccess] = useState('');
const [open, setOpen] = React.useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);


const copyToClipBoard = async copyMe => {
    try {
      await navigator.clipboard.writeText(copyMe);
      setCopySuccess('Copied!');
    } catch (err) {
      setCopySuccess('Failed to copy!');
    }
  };
        return(  <React.Fragment>
            <IconButton onClick={handleOpen}  className='MyCustomButton'>

                <div  style={Home}>
                    <a className="ProfileIcons">Share</a>
                </div>

            </IconButton>

            <StyledModal aria-labelledby="unstyled-modal-title"
            aria-describedby="unstyled-modal-description"
            open={open} onClose={handleClose} BackdropComponent={Backdrop}>
                <Box sx={style}>
                    <h5>Send this profile</h5>
                    <FacebookShareButton
                                    style={{paddingRight:'5px'}} 
                                    url={"https://peing.net/ja/"}
                                    hashtag={"#hashtag"}
                                    description={"aiueo"}
                                    className="Demo__some-network__share-button ">
                        <FacebookIcon size={50} borderRadius={24} /> 
                    </FacebookShareButton>
                    <TwitterShareButton 
                                    style={{paddingRight:'5px'}}
                                    url={"https://peing.net/ja/"}
                                    hashtag={"#hashtag"}
                                    description={"aiueo"}
                                    className="Demo__some-network__share-button ">
                        <TwitterIcon size={50} borderRadius={24} /> 
                    </TwitterShareButton>
                    <WhatsappShareButton 
                                    style={{paddingRight:'5px'}}
                                    url={"https://peing.net/ja/"}
                                    hashtag={"#hashtag"}
                                    description={"aiueo"}
                                    className="Demo__some-network__share-button">
                        <WhatsappIcon size={50} borderRadius={24} /> 
                    </WhatsappShareButton>
                    <EmailShareButton url={"https://peing.net/ja/"}
                                    hashtag={"#hashtag"}
                                    description={"aiueo"}
                                    className="Demo__some-network__share-button">
                        <EmailIcon size={50} borderRadius={24} /> 
                    </EmailShareButton>
                    <button  onClick={() => copyToClipBoard('https://peing.net/ja/')} style={{padding:'11px', borderRadius:'18px', marginLeft:'5px'}} >
                    <ContentCopyIcon color="action" />
                    </button>

                    {copySuccess}
                    <div class="sharethis-inline-share-buttons"></div>
                            {/* <div style={{ alignItems: 'center', margin:'20px 120px' }}>
                                <PinterestIcon style={{color:'#E60023', fontSize: '40px'}}/>
                            </div>
                    <h3 id="unstyled-modal-title" >Welcome to Pinterest</h3>
                    <input name="email" placeholder="Email" type="text" style={Text} className="form-control" />
                    <input name="password" placeholder="Password" type="password" style={Text} className="form-control" />
                    <a href='/' className="l">Forgotten your password?</a>
                    <Button type="submit"  style={{display: 'flex', height:' 44px', width: '100%',
                        borderRadius: '18px',  justifyContent: 'center',
                        alignItems: 'center',backgroundColor:'#E60023',  margin:'15px 5px'}}>Log in</Button>
                <p id="unstyled-modal-description">By continuing, you agree to Pinterest's Terms of Service and acknowledge that you've read our Privacy Policy</p> */}
                </Box>
            </StyledModal>
            </React.Fragment>)
    
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
// const  SearchWrapper = {
//     flex: 1 //takes all the space it can gets
// };
// const  IconWrapper = {
//     marginLeft:'20px',
// };


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
    textAlign: 'center'
    
};
