import React from 'react'
import Pin from './Pin';

function Mainboard() {
    return (
        <div>
            <div style={Wrapper}>
                <div style={Container}>
                    <Pin/>
                </div>
            </div>
        </div>
    )
} 
export default Mainboard

const  Wrapper = {
    display:'flex',
    backgroundColor:'white',
    width:'100%',
    height:'100%',
    marginTop:'15px',
    justifyContent:'center',
};
const  Container = {
    display:'flex',
    backgroundColor:'white',
    width:'80%',   
};