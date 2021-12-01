import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import Masonry from 'react-masonry-css'
import { IconButton } from '@mui/material'
import axios from 'axios'
import { Link , useParams }  from 'react-router-dom'

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
            console.log(response.data)
            this.setState({ pins: response.data })
            console.log(this.pins)
    
          })
        }
          //   axios.get("http://127.0.0.1:8000/boards/api/v1/boards/", { headers: {"Authorization" : localStorage.getItem("Token")} }).then((res)=>{
          //     console.log(res);
          //     const boardData = res.data;
          //     // const userName = response.data[0].username;
          //     // const userImg = "http://127.0.0.1:8000/"+response.data[0].profile_image;
          //     // console.log(boardData);
          //     // console.log(userName);
          //     // console.log(userImg);
          //     this.setState({ boardsDetail: boardData , ready: true})

          // })
        }

      DeleteBoard(){
        let config = { 
              headers: {
                "Authorization": localStorage.getItem("Token")
              },
              data: { //! Take note of the `data` keyword. This is the request body.
                
                  //! more `key: value` pairs as desired.
              } 
            }
      
      axios.delete('http://127.0.0.1:8000/boards/api/v1/boards/1/', config);
      
      }
    
      render() {
        return (
    
          <div>
            <Link to='/new-pin'>
              <Button variant="light" style={{ width: '80px', height: '80px', borderRadius: '50%', fontSize: 'xx-large', position: 'fixed', bottom: '130px', right: '10px', fontWeight: 'bold' }} >+</Button>
            </Link>
            <Link to='/profile'>
              <Button onClick={this.DeleteBoard} variant="light" style={{ backgroundColor:"red", color:"#fff" ,width: '80px', height: '80px', borderRadius: '50%', fontSize: 'xx-large', position: 'fixed', bottom: '30px', right: '10px', }}><i class="fas fa-trash"></i></Button>
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
                  <Link className="my-masonry-grid_column" to="/pin-id" >
                    <Card.Img style={{ borderRadius: '16px', cursor: 'zoom-in' }} variant="top" src={"http://127.0.0.1:8000" + pin.attachment} />
                  </Link>
                  <Button variant="danger" style={{ borderRadius: '16px', float: 'right', position: 'absolute', right: "3px", top: '5px', fontWeight: 'bold' }} className="btn" size="lg">Save</Button>
                  <Card.Body>
                    <Card.Title><h6 style={{ fontWeight: 'bold', display: 'inline' }}>{pin.title}</h6>
                    </Card.Title>
                    <Card.Text style={{ color: 'Grey' }}>
                      <Image src={"http://127.0.0.1:8000" + pin.profile_image} roundedCircle style={{ width: '30px', height: '30px', marginRight: '10px' }} />
                      <Link to="/new-pin" style={{ color: "Grey", textDecoration: "none" }}> {pin.username} </Link>
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
    
    

 