import React, { Component } from 'react'
import BoardDetalis from './BoardComponent/Board_details';
import Header from './HeaderComponent/Header';
import Pin from "./home/Pin";


export default class Mainboard extends Component {
    render() {
        return (
            <div>
               <Header />
                <div style={Wrapper}>
                    <div style={Container}>
                        <Pin />
                        <BoardDetalis />
                    </div>
                </div>
            </div>

        )
    }
}


const Wrapper = {
    display: 'flex',
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    marginTop: '15px',
    justifyContent: 'center',
};
const Container = {
    display: 'flex',
    backgroundColor: 'white',
    width: '80%',
};