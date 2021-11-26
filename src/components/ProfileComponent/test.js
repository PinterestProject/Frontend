import React, { Fragment } from 'react';
import './profile.css'

class Grid extends React.Component {
    render() { 
        return <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-3 py-5'>
                        <div className='parent'>
                            <div className=' pin1'>rfr</div>
                            <div className=' pin2'>rrr</div>
                            <div className=' pin3'>rrtyu</div>
                            {/* <div className='PinImgs pin4'></div> */}
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    }
}
 
export default Grid;