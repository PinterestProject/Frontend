import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import Masonry from 'react-masonry-css'
import './css/pin_home.css'
import './css/bootstrap.min.css'
// import { IconButton } from '@mui/material'
import axios from 'axios'
import { Link } from 'react-router-dom'


export default class Pin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breakpointObj: {
        default: 6,
        1100: 5,
        700: 4,
        500: 3

      },
      pins: [],
    }
  };

  componentDidMount() {
    axios.get('http://127.0.0.1:8000/pins/api/v1/pins/', 
      { headers: { "Authorization": localStorage.getItem("Token") } })
      .then(response => {
          console.log(response.data)
          this.setState({ pins: response.data })
          console.log(this.pins)
      })

  }
  shuffle = (array) => {
    let currentIndex = array.length, randomIndex;

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }
  render() {
    let backurl={data:15}
    const SearchItem = localStorage.getItem('Item')
    return (
      
      
      <div>
        <Link to='/new-pin'>
        <Button variant="light" style={plusButton} >+</Button>
        </Link>
        <Button variant="light" style={markButton}>?</Button>
        <Masonry
          breakpointCols={this.state.breakpointObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"

        >

{this.shuffle(this.state.pins).filter((pin)=>{
                        if (SearchItem == ''){
                            return pin
                        }else if (pin.title.toLowerCase().includes(SearchItem.toLowerCase())){
                            return pin
                        }
                    }).map((pin)=> 
                    <Card style={{  borderStyle:'hidden'}} Key={pin.id}>
                    <Card.Img style={{borderRadius:'16px',cursor: 'zoom-in'}} variant="top" src= {pin.attachment}/>
                    <Button variant="danger" 
                            style={saveButton} 
                            className="btn" 
                            size="lg">Save</Button>
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


const plusButton = {
  width: '80px',
  height: '80px',
  borderRadius: '50%', 
  fontSize: 'xx-large', 
  position: 'fixed', 
  bottom: '130px', 
  right: '10px', 
  fontWeight: 'bold'
};
const markButton = {
  width: '80px', 
  height: '80px', 
  borderRadius: '50%', 
  fontSize: 'xx-large', 
  position: 'fixed', 
  bottom: '30px', 
  right: '10px', 
  fontWeight: 'bold'
};
const saveButton = {
  borderRadius: '16px', 
  float: 'right', 
  position: 'absolute', 
  right: "3px", top: '5px', 
  fontWeight: 'bold'
}

