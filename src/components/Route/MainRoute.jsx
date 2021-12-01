import React from "react";
import {
    BrowserRouter as Router,
    Route,

} from "react-router-dom";
import CreateBoard from "../CreateBoard/create";
import Test from "../LandingPage/test";
import Mainboard from "../Mainboard";
import CreatePin from "../PinPage/createPin";
import Pin from "../PinPage/pin";
import Profile from "../ProfileComponent/Profile";
import Form from "../EditProfileComponents/Form";
import MainPage from "../MainPageComponent/MainPage";
import Header from '../HeaderComponent/Header';
import SignUp from '../SignUp';
import BoardDetalis from '../BoardComponent/Board_details';

export default function App() {
    return (

        <div>
            <Router>
                <Route path="/" exact component={Test} />
                <Route path="/signup" exact component={SignUp} />
                <Route path="/main-board" exact component={Mainboard} />
                <Route path="/profile" exact component={Profile} />
                <Route path="/new-pin" exact component={CreatePin} />
                <Route path="/pin-id" exact component={Pin} />
                <Route path="/new-board" exact component={CreateBoard} />
                <Route path="/main" exact component={MainPage} />
                <Route path="/header" exact component={Header} />
                <Route path="/board-details/:id" exact component={BoardDetalis} />
                <Route path="/edit-profile" exact component={Form} />
            </Router>
        </div>
    );
}


