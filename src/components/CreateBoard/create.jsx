import axios from 'axios'
import React, { Component } from 'react'
import Header from '../HeaderComponent/Header'
import "./assets/css/bootstrap.min.css"
import "./assets/css/main.css"


export default class CreateBoard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            board_name: '',
            is_public: false
        }
    }


    HandleBoradInputs = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })

    }
    HandleBoradCheck = (e) => {
        console.log(!e.target.checked)
        this.setState({
            [e.target.name]:e.target.checked
        })

    }

    HandleAddBorad=(e)=>{
        e.preventDefault()
        var send_data = {
            name:this.state.board_name,
            is_public:!this.state.is_public
        }
        axios.post("http://127.0.0.1:8000/boards/api/v1/boards/",send_data).then((response)=>{
            console.log(response)
        })
        console.log(send_data)
        
    }
    

    render() {
        return (
            <div>
                <Header/>
                    <div className='borad-container container'>
                        <h1 className='text-center'>Create board</h1>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Name</label>
                            <input onChange={this.HandleBoradInputs}  class="form-control" name='board_name'  placeholder='Like "Places to Go" or "Recipes to Make"' />
                        </div>
                        <form onSubmit={this.HandleAddBorad}>
                            <div className="board-actions">
                                <div>
                                    <div class="form-check">
                                        <input onChange={this.HandleBoradCheck} name='is_public' class="form-check-input" type="checkbox"   />
                                        <div className="d-flex flex-column">
                                            <label  class="form-check-label fw-bold" for="flexCheckDefault">keep this board secret</label>
                                            <label className='text-muted'>so only you and collaborators</label>
                                        </div>
                                    </div>
                                </div>
                                <div className='text-right'>
                                    <button className='btn btn-light'>
                                        create
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
            </div>
        )
    }
}
