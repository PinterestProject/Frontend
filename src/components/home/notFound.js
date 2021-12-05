import React from 'react';
class Notfound extends React.Component {

    handleBack=()=>{
        console.log('Back');
        if ( localStorage.getItem("Token") != null){
            this.props.history.push('/main-board')
        }else{
            this.props.history.push('/')
        }
    }

    render() { 

        return <React.Fragment>
                    <div className=' text-center d-flex  align-items-center justify-content-center '>
                        <div className='w-100 py-5'>
                                <h1 style={{ 
                                color:'#E60023',
                                fontSize:'5rem',
                                fontWeight:'700',
                                margin: '40px 0px', 
                             }} 
                                > 404 Page Not Found </h1>
                                <br/>
                            <button onClick={this.handleBack} 
                                className='btn '
                                style={{ 
                                backgroundColor:'#E60023',
                                color:'#fff',
                                fontSize:'22px',
                                fontWeight:'700',
                                padding:'20px 40px',
                            }} 
                            >Go Back</button>
                        </div>
                    </div>
                </React.Fragment>
        ;
    }
}
 
 
export default Notfound;
