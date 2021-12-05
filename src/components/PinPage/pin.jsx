import React, { Component } from 'react'
import "./assets/css/main.css"
import "./assets/css/bootstrap.min.css"
import Header from '../HeaderComponent/Header'
// import { IconButton } from '@mui/material'
// import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class Pin extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            display: "none",
            follow: 'follow',
            comment: '',
            pin: {},
            pin_comments: [],
            pin_comments_users: []
        }
        const id = this.props.match.params.id
    }



    async downloadImage() {
        let img = document.getElementById("pinImg")
        const image = await fetch(img.src)
        const imageBlog = await image.blob()
        const imageURL = URL.createObjectURL(imageBlog)

        const link = document.createElement('a')
        link.href = imageURL
        link.download = 'img'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    following = (follow_id) => {
        console.log(follow_id)
        let send_data = {
            followed_id: follow_id
        }
        axios.post("http://localhost:8000/users/follow/", send_data, 
        { headers: { "Authorization": localStorage.getItem("Token") } })
        .then((resp) => {
            console.log(resp)
            this.setState({
                follow: 'unfollow'
            })
        })

        // , { headers: {"Authorization" : localStorage.getItem("Token")} }
    }
    handleCommentChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        }, () => { console.log(e.target.value) })
    }

    handleAddComment = (id) => {
        let send_data = {
            reply_content: this.state.comment,
            id: this.props.match.params.id
            // user_id: uid,
        }
        console.log(send_data)
        axios.post("http://localhost:8000/comments/comment/", send_data, { headers: { "Authorization": localStorage.getItem("Token") } }).then((resp) => {
            console.log(resp)
        })
    }

    componentDidMount = () => {
        // let pid = this.props.location.query.pin.id
        // let send_data={pin_id:pid}
        // console.log(pid)

        if (this.props.match && this.props.match.params.id) {
            const id = this.props.match.params.id
          axios.get(`http://127.0.0.1:8000/pins/api/v1/pins/${id}/`,
           { headers: { "Authorization": localStorage.getItem("Token") } })
            .then(response => {
              console.log(response)
              this.setState({ pin: response.data })
              console.log(this.state.pins)
      
            })
          }
          const id = this.props.match.params.id
        axios.get(`http://localhost:8000/comments/comment/${id}`).then((resp) => {
            console.log(`111111 ${JSON.stringify(resp.data)}`)
            this.setState({
                pin_comments: resp.data.data,
                pin_comments_users: resp.data.users
            }, () => { console.log(`comments ${this.state.pin_comments} users ${this.state.pin_comments}`) })
        })
    }

    render() {
        console.log(this.state.pin);
        const pin = this.state.pin;
        // console.log(this.props.location.query.pin)
        // let pin = this.props.location.query.pin

        return (
            <div>
                <Header />
                {/*--------------------main card which hold img and details--------------------*/}
                
                <div className="pin container" >
                    {/*--------------------here is the pin's image--------------------*/}
                    <div className="pin-img">
                        <img id='pinImg' src={`http://127.0.0.1:8000${pin.attachment}`} alt="pinImg" />
                    </div>
                    {/*--------------------start details from here which divided into 8 rows-------------------- */}
                    <div className="pin-details ">
                        {/* --------------------first row-------------------- */}
                        {/* divided into 2sections */}
                        <div className="row1">
                            {/* 1st section */}
                            <div >
                                {/* dots */}
                                <button className='btn' >
                                    <svg xmlns="http://www.w3.org/2000/svg" 
                                        width="25" 
                                        height="25" 
                                        fill="currentColor" 
                                        className="bi bi-three-dots" 
                                        viewBox="0 0 16 16">
                                        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                    </svg>
                                </button>
                                {/* upload */}
                                <button className='btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" 
                                        width="20" 
                                        height="20" 
                                        fill="currentColor" 
                                        className="bi bi-upload" 
                                        viewBox="0 0 16 16">
                                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                        <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" />
                                    </svg>
                                </button>
                            </div>
                            {/* 2nd section */}
                            <div className='save-profile'>
                                <small className='btn' style={{ fontWeight: "600" }}>Profile</small>
                                <button onClick={this.downloadImage} className='save-btn'>Download</button>
                            </div>
                        </div>
                        {/* --------------------second row-------------------- */}
                        <div style={{ paddingTop: "20px" }} className='row2'>
                            <small>
                                <a href="" style={{ color: "black" }}>www.site.com</a>
                            </small>
                        </div>

                        {/* --------------------third row-------------------- */}
                        <div className='row3' 
                            style={{ paddingTop: "20px" }}>
                                <h1 className='pin-title'>
                                    {pin.title}
                                </h1>
                        </div>
                        {/* --------------------4th row-------------------- */}
                        <div className='row4' 
                            style={{ paddingTop: "10px" }}>
                                <p>{pin.description}</p>
                        </div>
                        {/* --------------------5th row-------------------- */}
                        {/* divided into 2sections */}
                        <div className='row5'>
                            {/* 1st sectoin */}
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <img src={`http://127.0.0.1:8000${pin.profile_image}`} alt="" />
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <span style={{ fontWeight: "600" }}>{pin.username}</span>
                                    <small >1.3k followers</small>
                                </div>
                            </div>
                            {/* 2nd sectoin */}
                            <div className='follow'>
                                <a onClick={() => { this.following(pin.user_id) }} 
                                    style=
                                    {{ textDecoration: 'none',
                                         fontSize: '14px',
                                         fontWeight: 'bold', 
                                         color: 'black' 
                                    }} >
                                        {this.state.follow}
                                </a>
                            </div>
                        </div>
                        {/* --------------------6th row-------------------- */}
                        <div className='row6'>
                            <h5 style={{ fontWeight: 600 }}>Comments</h5>
                            <button className='btn'>
                                <svg height="15" 
                                    width="15" 
                                    viewBox="0  0 24 24" 
                                    aria-label="Arrow" 
                                    role="img">
                                        <path d="M12 19.5.66 8.29c-.88-.86-.88-2.27 0-3.14.88-.87 2.3-.87 3.18 0L12 13.21l8.16-8.06c.88-.87 2.3-.87 3.18 0 .88.87.88 2.28 0 3.14L12 19.5z"></path>
                                </svg>
                            </button>
                        </div>
                        {/* --------------------7th row-------------------- */}
                        <div className='row7'>
                            <small className='text-muted'>
                                Share feedback, ask a question or give a high five
                            </small>
                            {/* old comments if exist */}
                            {this.state.pin_comments.map((comment, key) => 
                                // { console.log(comment['reply_content']) }
                                
                                <div className='img-comment'>
                                    <img className='old-comment-img' 
                                        src="https://i.pinimg.com/75x75_RS/49/eb/44/49eb44386b9d9e89dd772eaf546f73cd.jpg" 
                                        alt="" />
                                    <div>
                                        <div>
                                            <span className='comment-by'>{this.state.pin_comments_users[key]['username']}</span>
                                            {comment['reply_content']}
                                        </div>
                                        <button className='btn'>
                                            <svg fill='grey' 
                                                class="gUZ B9u U9O kVc" 
                                                height="16" width="16" 
                                                viewBox="0 0 24 24" 
                                                aria-label="like icon" 
                                                role="img">
                                                    <path d="m22.178 13.583-9.131 8.992a1.502 1.502 0 0 1-2.094 0l-9.131-8.992a6.192 6.192 0 0 1 0-8.773c2.439-2.413 6.395-2.413 8.834 0L12 6.154l1.344-1.344c2.439-2.413 6.395-2.413 8.834 0a6.192 6.192 0 0 1 0 8.773"></path>
                                            </svg> 
                                                <small>20</small>
                                        </button>
                                        <button className='btn'>
                                            <svg fill='grey' 
                                                class="Hn_ gUZ B9u U9O kVc" 
                                                height="16" width="16" 
                                                viewBox="0 0 24 24" 
                                                aria-hidden="true" 
                                                aria-label="" 
                                                role="img">
                                                    <path d="M12 0C5.85 0 .75 4.94.75 11.08c0 2.7.9 5.24 2.7 7.19L2.1 23.51c-.15.3.3.6.6.45l5.25-2.55c1.35.45 2.7.75 4.05.75 6.15 0 11.25-4.94 11.25-11.08S18.15 0 12 0"></path>
                                            </svg> 
                                                <small>20</small>
                                        </button>
                                    </div>
                                </div>
                            )}
                            {/* new comment */}
                            <div className='img-comment'>
                                <img className='pin-image' src={`http://127.0.0.1:8000${pin.profile_image}`} alt="" />
                                <input onChange={this.handleCommentChange} 
                                        name='comment' 
                                        onFocus={() => { this.setState({ display: 'block' }) }} 
                                        className='form-control' 
                                        type="text" 
                                        placeholder="Add a comment" />
                            </div>
                            <div className='text-right mt-2' style={{ display: this.state.display }}>
                                <button onClick={() => { this.setState({ display: 'none' }) }} 
                                        className='btn btn-light rounded-circle'>cancel</button>
                                <button onClick={() => { this.handleAddComment(pin.id) }} 
                                        className='btn btn-light rounded-circle'>save</button>
                            </div>
                        </div>
                        {/* --------------------8th row-------------------- */}
                        <div className='row8'>
                            <img src="https://i.pinimg.com/75x75_RS/5f/cd/52/5fcd522899cdd397dddfe2f7f1f58e8d.jpg" 
                            alt="img" />
                            <div>
                                <small>
                                    <a className="link" href="">Gerd Busch </a>
                                </small>
                                saved to
                                <small>
                                    <a className="link" href=""> Meine gemerkten Pins</a>
                                </small>
                            </div>
                        </div>
                        {/* --------------------floation button which will hold add pin function-------------------- */}
                        <div>
                            <Link className='add-btn' to="/new-pin">
                                <button className='add-btn' >
                                    <svg style={{ marginBottom: "2px" }} 
                                        height="20" 
                                        width="20" 
                                        viewBox="0 0 24 24" 
                                        aria-hidden="true" 
                                        aria-label="" 
                                        role="img">
                                        <path d="M22 10h-8V2a2 2 0 0 0-4 0v8H2a2 2 0 0 0 0 4h8v8a2 2 0 0 0 4 0v-8h8a2 2 0 0 0 0-4"></path>
                                    </svg>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            
                {/* --------------------extra data afer pin card-------------------- */}
                <div style={{ marginTop: "20px" }}>
                    <h5 style={{ fontWeight: "600", textAlign: "center" }}>More like this</h5>
                </div>
            </div>
        )
    }
}
