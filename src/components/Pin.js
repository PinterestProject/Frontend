import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Masonry from 'react-masonry-css'
import { Link } from 'react-router-dom';

export default class Pin extends Component {

  constructor(props) {
    super(props);
    this.state = {
      breakpointObj: {
        default: 6,
        1100: 3,
        700: 2,
        500: 1

      }
    }

  };

  render() {
    return (

      <div>
        <Masonry
          breakpointCols={this.state.breakpointObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"

        >

          <Card style={{ borderStyle: 'hidden' }}>
            <Card.Img style={{ borderRadius: '16px', cursor: 'zoom-in' }} variant="top" src="https://images.unsplash.com/photo-1637441210934-cea27d639b0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
            <Card.Body>
              <Card.Title><h6 style={{ fontWeight: 'bold' }}>first image</h6></Card.Title>
              <Card.Text>
                hello world
              </Card.Text>

            </Card.Body>
          </Card>



          <Card style={{ borderStyle: 'hidden' }}>
            <Card.Img style={{ borderRadius: '16px', cursor: 'zoom-in' }} variant="top" src="https://images.unsplash.com/photo-1637441210934-cea27d639b0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
            <Card.Body>
              <Card.Title><h6 style={{ fontWeight: 'bold' }}>first image</h6></Card.Title>
              <Card.Text>
                hello world
              </Card.Text>

            </Card.Body>
          </Card>



          <Card style={{ borderStyle: 'hidden' }}>
            <Card.Img style={{ borderRadius: '16px', cursor: 'zoom-in' }} variant="top" src="https://i.pinimg.com/564x/7e/9e/0d/7e9e0dee3353253bfef462a9f595a441.jpg" />
            <Card.Body>
              <Card.Title><h6 style={{ fontWeight: 'bold' }}>first image</h6></Card.Title>
              <Card.Text>
                hello world
              </Card.Text>

            </Card.Body>
          </Card>





          <Card style={{ borderStyle: 'hidden' }}>
            <Card.Img style={{ borderRadius: '16px', cursor: 'zoom-in', width: '100%' }} variant="top" src="https://i.pinimg.com/564x/2a/96/03/2a9603ef4a622e301b7194124deb24b6.jpg" />
            <Card.Body>
              <Card.Title><h6 style={{ fontWeight: 'bold' }}>first image</h6></Card.Title>
              <Card.Text>
                hello world
              </Card.Text>

            </Card.Body>
          </Card>


          <Card style={{ borderStyle: 'hidden' }}>
            <Card.Img style={{ borderRadius: '16px', cursor: 'zoom-in', width: '100%' }} variant="top" src="https://i.pinimg.com/564x/e4/d8/68/e4d868f1271335047cbbb752600dc26d.jpg" />
            <Card.Body>
              <Card.Title><h6 style={{ fontWeight: 'bold' }}>first image</h6></Card.Title>
              <Card.Text>
                hello world
              </Card.Text>

            </Card.Body>
          </Card>

          <Card style={{ borderStyle: 'hidden' }}>
            <Card.Img style={{ borderRadius: '16px', cursor: 'zoom-in', width: '100%' }} variant="top" src="https://i.pinimg.com/564x/2a/96/03/2a9603ef4a622e301b7194124deb24b6.jpg" />
            <Card.Body>
              <Card.Title><h6 style={{ fontWeight: 'bold' }}>first image</h6></Card.Title>
              <Card.Text>
                hello world
              </Card.Text>

            </Card.Body>
          </Card>



          <Card style={{ borderStyle: 'hidden' }}>
            <Card.Img style={{ borderRadius: '16px', cursor: 'zoom-in', width: '100%' }} variant="top" src="https://i.pinimg.com/564x/2a/96/03/2a9603ef4a622e301b7194124deb24b6.jpg" />
            <Card.Body>
              <Card.Title><h6 style={{ fontWeight: 'bold' }}>first image</h6></Card.Title>
              <Card.Text>
                hello world
              </Card.Text>

            </Card.Body>
          </Card>


          <Card style={{ borderStyle: 'hidden' }}>
            <Card.Img style={{ borderRadius: '16px', cursor: 'zoom-in', width: '100%' }} variant="top" src="https://i.pinimg.com/564x/ad/74/67/ad7467025b21f26f6b43f5b0a79cb2cd.jpg" />
            <Card.Body>
              <Card.Title><h6 style={{ fontWeight: 'bold' }}>first image</h6></Card.Title>
              <Card.Text>
                hello world
              </Card.Text>

            </Card.Body>
          </Card>
          
          <Link to='/pin-id' className="my-masonry-grid_column" >
          <Card style={{ borderStyle: 'hidden' }}>
            <Card.Img style={{ borderRadius: '16px', cursor: 'hand', width: '100%' }} variant="top" src="https://i.pinimg.com/750x/e9/45/50/e94550504e5b046dd0d6f68aafc0d74a.jpg" />
            <Card.Body>
              <Card.Title><h6 style={{ fontWeight: 'bold' }}>first image</h6></Card.Title>
              <Card.Text>
                hello world
              </Card.Text>
            </Card.Body>
          </Card>
          </Link>


          <Card style={{ borderStyle: 'hidden' }}>
            <Card.Img style={{ borderRadius: '16px', cursor: 'zoom-in', width: '100%' }} variant="top" src="https://i.pinimg.com/564x/2a/96/03/2a9603ef4a622e301b7194124deb24b6.jpg" />
            <Card.Body>
              <Card.Title><h6 style={{ fontWeight: 'bold' }}>first image</h6></Card.Title>
              <Card.Text>
                hello world
              </Card.Text>

            </Card.Body>
          </Card>

          <Card style={{ borderStyle: 'hidden' }}>
            <Card.Img src="" />

            <Card.Body>
              <iframe src="https://assets.pinterest.com/ext/embed.html?id=12596073948331419" height="250" width="100%" frameborder="0" scrolling="no" ></iframe>
              <Card.Title><h6 style={{ fontWeight: 'bold' }}>first image</h6></Card.Title>
              <Card.Text>
                hello world
              </Card.Text>

            </Card.Body>
          </Card>



        </Masonry>






      </div>
    )
  }

};



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

