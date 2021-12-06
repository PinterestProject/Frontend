import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import Masonry from 'react-masonry-css'
import axios from 'axios'
import { Link , useParams }  from 'react-router-dom'
import Header from '../HeaderComponent/Header';
import './board_details.css';

class BoardDetalis extends React.Component {
    constructor(props) {
        super(props);
        // console.log(this.props.match.params.id);
        // console.log(this.props.match);
        this.state = {
          breakpointObj: {
            default: 6,
            1100: 5,
            700: 4,
            500: 3
          },
          pins: [],
          // boardsDetail: {},
          // ready: false,  
        }
      };
    
      componentDidMount() {
        if (this.props.match && this.props.match.params.id) {
          const id = this.props.match.params.id
        axios.get(`http://127.0.0.1:8000/pins/api/v1/boards/${id}/pins/`,
         { headers: { "Authorization": localStorage.getItem("Token") } })
          .then(response => {
            console.log(response)
            this.setState({ pins: response.data[1] })
            console.log(this.state.pins)
    
          })
        }
        }

      DeleteBoard(){
        const id = this.props.match.params.id
        let config = { 
              headers: {
                "Authorization": localStorage.getItem("Token")
              },
              data: { //! Take note of the `data` keyword. This is the request body.
                
                  //! more `key: value` pairs as desired.
              } 
            }
      
      axios.delete(`http://127.0.0.1:8000/boards/api/v1/boards/${id}/`, config);
      
      }
    
      render() {
        console.log(this.state.pins)
        return (
          <div>
            <Header />
            <Link to="/new-pin/">
              <Button variant="light" style={plusButton} >+</Button>
            </Link>
            <Link to='/profile'>
              <Button onClick={this.DeleteBoard} variant="light" 
                      style={trashButton}>
                  <i class="fas fa-trash"></i>
              </Button>
            </Link>
            <div className='container'>
                <div className='row '>
                <div className='col-12 m-auto text-center d-flex justify-content-center align-items-center'>
                {/* {this.state.boardsDetail.map((details)=>( */}
                <div className='mt-5' >
                                    {/* <img style={{ borderRadius: '50%', marginBottom: '20px', width:'200px', height:'200px' }} src={"http://127.0.0.1:8000"+details.profile_image} />
                                    <h2 style={{ fontWeight: '700' }}>{details.username}</h2>
                                    <span >@{details.username}</span>
                                    <span style={{ display: 'block' }}>{details.bio}</span> */}
                                </div>
                                {/* ))} */}
                </div>
                  </div></div>
            <Masonry
              breakpointCols={this.state.breakpointObj}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
    
            >
    
              {this.state.pins.map((pin) =>
                  
                <Card style={{ borderStyle: 'hidden' }} Key={pin.id}>
                  <Link className="my-masonry-grid_column" to={"/pin-id/"+pin.id} >
                    <Card.Img style={{ borderRadius: '16px', cursor: 'zoom-in' }} 
                              variant="top" 
                              src={`http://127.0.0.1:8000${pin.attachment}`} />
                  </Link>
                  <Button variant="danger" 
                          style={saveButton} 
                          className="btn" 
                          size="lg">Save</Button>
                  <Card.Body>
                    <Card.Title><h6 style={{ fontWeight: 'bold', display: 'inline' }}>{pin.title}</h6>
                    </Card.Title>
                    <Card.Text style={{ color: 'Grey' }}>
                    {pin.profile_image ? (
                      <Image src={`http://127.0.0.1:8000${pin.profile_image}`} 
                            roundedCircle 
                            style={{ width: '30px', height: '30px', marginRight: '10px' }} />
                      ):
                      (
                        <Image src={`https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png`} 
                      roundedCircle 
                      style={{ width: '30px', height: '30px', marginRight: '10px' }} />
                      )}
                            <Link to={`/user/${pin.user_id}`} style={{ color: "Grey", textDecoration: "none" }}> {pin.username} </Link>
                      </Card.Text>
                  </Card.Body>
                </Card>
    
              )}
    
            </Masonry>
          </div>
        )
      }
    
    };
    
    export default BoardDetalis;
    
    
    const Wrapper = {
      display: 'inline-flex',
      padding: '8px'
    };
    const Container = {
      display: 'flex',
      cursor: 'pointer',
    
      alignItems: 'center',
      boxSizing: 'border-box',
      margin: '10px'
    };
    
    const plusButton = {
      width: '80px',
      height: '80px',
      borderRadius: '50%', 
      fontSize: 'xx-large', 
      position: 'fixed', 
      bottom: '130px', 
      right: '10px', 
      fontWeight: 'bold',
    };

    const trashButton={
      backgroundColor:"red", 
      color:"#fff" ,
      width: '80px', 
      height: '80px', 
      borderRadius: '50%', 
      fontSize: 'xx-large', 
      position: 'fixed', 
      bottom: '30px', 
      right: '10px',
    }

    const saveButton={
      borderRadius: '16px', 
      float: 'right', 
      position: 'absolute', 
      right: "3px", 
      top: '5px', 
      fontWeight: 'bold' 
    }