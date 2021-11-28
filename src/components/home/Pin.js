import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import Masonry from 'react-masonry-css'
import './css/pin_home.css'
import './css/bootstrap.min.css'
import { IconButton } from '@mui/material'
import axios from 'axios' 




export default class Pin extends Component {
 constructor(props) {
        super(props);
        this.state = {
           breakpointObj : {
                           default: 6,
                           1100: 5,
                           700: 4,
                           500: 3


                           },
                pins :[],
                
              
        }
    };

componentDidMount() {
  axios.get ('http://127.0.0.1:8000/pins/api/v1/pins/')
     
    .then(response => {console.log(response.data) 
      
    
    this.setState({pins: response.data})

    console.log(this.pins)
    
    })
    


}
 shuffle=(array) =>{
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

    render() {
        return (

            <div>
 <Button variant="light" style={{width:'80px',height:'80px', borderRadius:'50%',fontSize:'xx-large',position:'fixed',bottom:'130px',right:'10px',fontWeight: 'bold'}} >+</Button>
            <Button variant="light" style={{width:'80px',height:'80px', borderRadius:'50%',fontSize:'xx-large',position:'fixed',bottom:'30px',right:'10px',fontWeight: 'bold'}}>?</Button>
            <Masonry
              breakpointCols={this.state.breakpointObj}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"

              >

       { this.shuffle(this.state.pins).map((pin)=> 

       
       <Card style={{  borderStyle:'hidden'}} Key={pin.id}>
       <Card.Img style={{borderRadius:'16px',cursor: 'zoom-in'}} variant="top" src= {pin.attachment}/>
       <Button variant="danger" style={{borderRadius:'16px', float:'right',position: 'absolute',right:"3px", top:'5px',fontWeight: 'bold'}} className="btn" size="lg">Save</Button>
        <Card.Body>
          <Card.Title><h6 style ={{fontWeight: 'bold', display:'inline'}}>{pin.title}</h6>

          </Card.Title>

         <Card.Text style={{color:'Grey'}}>
         <Image src={pin.profile_image} roundedCircle style={{width:'40px', height:'40p',marginRight:'10px'}}/>
         <a href=""  className="linkProfile"> {pin.username} </a>



       </Card.Text>


     </Card.Body>
      </Card>
      
      
       
       )}




</Masonry>

        </div>
        )
    }

};



const  Wrapper = {
    display: 'inline-flex',
    padding: '8px'
}; 
const  Container = {
    display: 'flex',
    cursor: 'pointer',

    alignItems:'center',
    boxSizing: 'border-box',
    margin:'10px'
};

