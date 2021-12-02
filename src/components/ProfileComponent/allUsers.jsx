import React from 'react';
import axios from 'axios';
import Header from '../HeaderComponent/Header';
import { Link , useParams }  from 'react-router-dom';

class AllUsers extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            // ready: false
                    }
         };

    componentDidMount() {
            axios.get(`http://127.0.0.1:8000/users/users/`, 
            { headers: {"Authorization" : localStorage.getItem("Token")} })
            .then((response)=>{
                // console.log(response.data);

                // let details = [];
                // details.push(response.data)
            this.setState({ users: response.data })
            // console.log(this.state.users);

            })
        
    }
    render() { 
        return <React.Fragment>
            <Header />
            <div className='container'>
                <div className='row m-auto py-5'>
                    {this.state.users.map((details)=>(
                        <div className='text-center col-lg-3 col-md-4 col-sm-6 col-12 mb-2'>
                            <div className="card" style={{width: '14rem'}}>
                            {details.profile_image ? (
                                        <img src={details.profile_image} 
                                            className="img-fluid rounded-start card-img-top" 
                                            alt="..."></img>
                                    ):(
                                        <img src='https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png' 
                                            className="img-fluid rounded-start card-img-top" 
                                            alt="..."></img>
                                    )}
                                {/* <img src={details.profile_image} class="card-img-top" alt="..."></img> */}
                                <div className="card-body">
                                    <h5 className="card-title">{details.username}</h5>
                                    <p className="card-text">{details.bio}</p>
                                    <Link to={`/user/${details.id}`} 
                                        className="btn btn-primary">His/Her Profile</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </React.Fragment>;
    }
}
 
export default AllUsers;