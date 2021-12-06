import React from 'react';
import MainPage from '../MainPageComponent/MainPage'
import "./assets/css/main.css"
import { Link } from 'react-router-dom';


class About extends React.Component {
    render() { 
        return <div>
                <MainPage />

            <div className='about mt-2' style={{ backgroundImage: "url('/about2.jpg')",
                                        backgroundPosition:'center',
                                        backgroundSize:'cover' , 
                                        color:'#E60023',
                                        }}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 col-12 mt-5 ' style={{textAlign:'start'}}>
                            <p className='h4 my-4'>WELCOME TO VISUAL DISCOVERY</p>
                            <p className='h1 my-3'>When it comes to a great idea, you know it when you see it</p>
                            <Link to='/'>
                            <button className='btn btn-danger my-5'>Join pinterest</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }
}
 
export default About;