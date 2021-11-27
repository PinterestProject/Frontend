import React, { Component } from 'react'
import "./assets/css/main.css"
import "./assets/css/bootstrap.min.css"
import MainPage from '../MainPageComponent/MainPage'


export default class Test extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: ['new look outfit', 'home decor idea', 'green thumb idea', 'weeknight dinner idea'],
            current_messgae: 'new look outfit',
            colors: ['#2187D8', '#407A57', '#618C7B', '#C28B00'],
            current_color: '',
            position:0
        }
    }

    componentDidMount = () => {
        let i = 0
        setInterval(() => {
            if (i > 3) {
                i = 0
                this.setState({
                    position:0
                })
            }
            this.setState({
                current_messgae: this.state.message[i],
                current_color: this.state.colors[i],
                position:this.state.position+6
            })
            i += 1
        }, 1500)

    }


    render() {
        return (
            <div>
                <MainPage />
                <h1 className="banar">Get your next</h1>
                {/* <Fab className="down" color="primary" aria-label="add">
                    <AddIcCallOutlined />
                </Fab> */}
                <h2 className="message" style={{ color: this.state.current_color }}>{this.state.current_messgae} </h2>
                <div className='floating'></div>
                {/* <button className='down btn text-white' style={{ backgroundColor: this.state.current_color ,transform: `translatey(${this.state.position}px)`}}> down</button> */}
                <button className='down btn text-white rounded-circle' style={{ backgroundColor: this.state.current_color }}> <svg fill="white" height="24" width="24" viewBox="0 0 24 24" aria-label="Arrow" role="img"><path d="M12 19.5.66 8.29c-.88-.86-.88-2.27 0-3.14.88-.87 2.3-.87 3.18 0L12 13.21l8.16-8.06c.88-.87 2.3-.87 3.18 0 .88.87.88 2.28 0 3.14L12 19.5z"></path></svg> </button>
                {/* <i class="bi bi-arrow-down"></i> */}
                <div className="gallery">

                    <img src="https://images.unsplash.com/photo-1637439011095-8bd0bebc7223?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="pin"></img>
                    <img src="https://images.unsplash.com/photo-1637441210934-cea27d639b0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="pin"></img>
                    <img src="https://images.unsplash.com/photo-1637447032294-c3bbeada43f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="pin"></img>
                    <img src="https://images.unsplash.com/photo-1637439011095-8bd0bebc7223?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="pin"></img>
                    <img src="https://images.unsplash.com/photo-1637441210934-cea27d639b0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="pin"></img>
                    <img src="https://images.unsplash.com/photo-1637447032294-c3bbeada43f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="pin"></img>
                    <img src="https://images.unsplash.com/photo-1637406301895-1ca32a5d0a16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="pin"></img>
                    <img src="https://images.unsplash.com/photo-1637386755860-438286f0c242?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="pin"></img>
                    <img src="https://images.unsplash.com/photo-1637439011095-8bd0bebc7223?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="pin"></img>
                    <img src="https://images.unsplash.com/photo-1637441210934-cea27d639b0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="pin"></img>
                    <img src="https://images.unsplash.com/photo-1637447032294-c3bbeada43f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="pin"></img>
                    <img src="https://images.unsplash.com/photo-1637406301895-1ca32a5d0a16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="pin"></img>
                    <img src="https://images.unsplash.com/photo-1637386755860-438286f0c242?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="pin"></img>

                    <img src="https://images.unsplash.com/photo-1637406301895-1ca32a5d0a16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="pin"></img>
                    <img src="https://images.unsplash.com/photo-1637386755860-438286f0c242?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="pin"></img>


                    <img src="https://images.unsplash.com/photo-1637439011095-8bd0bebc7223?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="pin"></img>
                    <img src="https://images.unsplash.com/photo-1637439011095-8bd0bebc7223?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="pin"></img>
                    <img src="https://images.unsplash.com/photo-1637441210934-cea27d639b0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="pin"></img>
                    <img src="https://images.unsplash.com/photo-1637447032294-c3bbeada43f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="pin"></img>
                    <img src="https://images.unsplash.com/photo-1637406301895-1ca32a5d0a16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="pin"></img>
                    <img src="https://images.unsplash.com/photo-1637386755860-438286f0c242?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="pin"></img>
                    <img src="https://images.unsplash.com/photo-1637439011095-8bd0bebc7223?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="pin"></img>
                    <img src="https://images.unsplash.com/photo-1637441210934-cea27d639b0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="pin"></img>
                    <img src="https://images.unsplash.com/photo-1637441210934-cea27d639b0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="pin"></img>
                    <img src="https://images.unsplash.com/photo-1637447032294-c3bbeada43f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="pin"></img>
                    <img src="https://images.unsplash.com/photo-1637406301895-1ca32a5d0a16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="pin"></img>
                    <img src="https://images.unsplash.com/photo-1637386755860-438286f0c242?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="pin"></img>
                    <img src="https://images.unsplash.com/photo-1637386755860-438286f0c242?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="pin"></img>
                    <img src="https://images.unsplash.com/photo-1637386755860-438286f0c242?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="pin"></img>


                </div>
            </div>
        )
    }
}
