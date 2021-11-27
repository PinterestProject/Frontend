import React, { Component } from 'react'
import "./assets/css/main.css"
import "./assets/css/bootstrap.min.css"
import Header from '../Header/Header'
import { IconButton } from '@mui/material'
import Button from 'react-bootstrap/Button'


export default class Pin extends Component {
    render() {

        return (
            <div>
                <Header />
                {/*--------------------main card which hold img and details--------------------*/}
                <div className="pin container" >
                    {/*--------------------here is the pin's image--------------------*/}
                    <div className="pin-img">
                        <img src="https://i.pinimg.com/564x/13/2f/de/132fdea388341d874806e3b94000df34.jpg" alt="" />
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
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                    </svg>
                                </button>
                                {/* upload */}
                                <button className='btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-upload" viewBox="0 0 16 16">
                                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                        <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" />
                                    </svg>
                                </button>
                            </div>
                            {/* 2nd section */}
                            <div className='save-profile'>
                                <small className='btn' style={{ fontWeight: "600" }}>Profile</small>
                                <button className='save-btn'>save</button>
                            </div>
                        </div>
                        {/* --------------------second row-------------------- */}
                        <div style={{ paddingTop: "20px" }} className='row2'>
                            <small>
                                <a href="" style={{ color: "black" }}>www.site.com</a>
                            </small>
                        </div>

                        {/* --------------------third row-------------------- */}
                        <div className='row3' style={{ paddingTop: "20px" }}><h1 className='pin-title'>Wooden Cable and Charger Organizer  Cable Management for | Etsy</h1></div>
                        {/* --------------------4th row-------------------- */}
                        <div className='row4' style={{ paddingTop: "10px" }}><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quis impedit debitis accusantium perferendis magni, commodi, nostrum labore error eos sapiente nobis distinctio neque minus dolorem fugit! Itaque, architecto laudantium!</p></div>
                        {/* --------------------5th row-------------------- */}
                        {/* divided into 2sections */}
                        <div className='row5'>
                            {/* 1st sectoin */}
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <img src="https://i.pinimg.com/280x280_RS/1c/e9/f6/1ce9f657d49d40b934c51bb0dda44d60.jpg" alt="" />
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <span style={{ fontWeight: "600" }}>Batelier Handicraft</span>
                                    <small >1.3k followers</small>
                                </div>
                            </div>
                            {/* 2nd sectoin */}
                            <div className='follow'>
                                <a href='/' style={{ textDecoration: 'none', fontSize: '14px', fontWeight: 'bold', color: 'black' }}>Follow</a>
                            </div>
                        </div>
                        {/* --------------------6th row-------------------- */}
                        <div className='row6'>
                            <h5 style={{ fontWeight: 600 }}>Comments</h5>
                            <button className='btn'>
                                <svg height="15" width="15" viewBox="0  0 24 24" aria-label="Arrow" role="img"><path d="M12 19.5.66 8.29c-.88-.86-.88-2.27 0-3.14.88-.87 2.3-.87 3.18 0L12 13.21l8.16-8.06c.88-.87 2.3-.87 3.18 0 .88.87.88 2.28 0 3.14L12 19.5z"></path></svg>
                            </button>
                        </div>
                        {/* --------------------7th row-------------------- */}
                        <div className='row7'>
                            <small className='text-muted'>
                                Share feedback, ask a question or give a high five
                            </small>
                            <div className='img-comment'>
                                <img src="https://i.pinimg.com/75x75_RS/49/eb/44/49eb44386b9d9e89dd772eaf546f73cd.jpg" alt="" />
                                <input className='form-control' type="text" name="" id="" placeholder="Add a comment" />
                            </div>
                        </div>
                        {/* --------------------8th row-------------------- */}
                        <div className='row8'>
                            <img src="https://i.pinimg.com/75x75_RS/5f/cd/52/5fcd522899cdd397dddfe2f7f1f58e8d.jpg" alt="" />
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
                            <button className='add-btn' >
                                <svg style={{ marginBottom: "2px" }} height="20" width="20" viewBox="0 0 24 24" aria-hidden="true" aria-label="" role="img"><path d="M22 10h-8V2a2 2 0 0 0-4 0v8H2a2 2 0 0 0 0 4h8v8a2 2 0 0 0 4 0v-8h8a2 2 0 0 0 0-4"></path></svg>
                            </button>
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
