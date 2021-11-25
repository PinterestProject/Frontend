import React, { Component } from 'react'

export default class Pin extends Component {
    render() {
        return (
            <div>
            <div style={Wrapper}>
                <div style={Container}>
                    <img src="https://images.unsplash.com/photo-1637439011095-8bd0bebc7223?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="pin"></img>                
                    <img src="https://images.unsplash.com/photo-1637441210934-cea27d639b0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="pin"></img>
                    <img src="https://images.unsplash.com/photo-1637447032294-c3bbeada43f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="pin"></img>
                    <img src="https://images.unsplash.com/photo-1637406301895-1ca32a5d0a16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="pin"></img>
                    <img src="https://images.unsplash.com/photo-1637386755860-438286f0c242?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="pin"></img>
                </div>
            </div>
        </div>
        )
    }
}




const  Wrapper = {
    display: 'inline-flex',
    padding: '8px'
}; 
const  Container = {
    display: 'flex',
    cursor: 'pointer',
    width: '100px', 
    alignItems:'center',
    boxSizing: 'border-box',  
};