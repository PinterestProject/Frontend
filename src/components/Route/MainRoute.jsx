import React from "react";
import {
    BrowserRouter as Router,
    Route, Redirect, Switch

} from "react-router-dom";

import MainPage from "../MainPageComponent/MainPage";
import Header from '../HeaderComponent/Header';
import Test from "../LandingPage/test";
import Mainboard from "../Mainboard";
import SignUp from '../SignUp';
// Moved createboard from createboard to Board component and remove createboard component by khalil
import CreateBoard from "../BoardComponent/create";
import BoardDetalis from '../BoardComponent/Board_details';

import CreatePin from "../PinPage/createPin";
import Pin from "../PinPage/pin";
import Profile from "../ProfileComponent/Profile";
import Form from "../EditProfileComponents/Form";
import AllUsers from '../ProfileComponent/allUsers';
import UserDetails from "../ProfileComponent/userDetails";


import About from '../LandingPage/About';
import Notfound from '../home/notFound';

export default function App() {
    return (

        <Router>
            <Switch>
                <Route path="/" exact component={Test} />
                <Route path="/notfound" component={Notfound} />
                
                <Route path="/about"  component={About} />
                <Route path="/main"  component={MainPage} />
                <Route path="/signup"  component={SignUp} />
                <Route path="/main-board" exact component={Mainboard} />

                <Route path="/profile"  component={Profile} />
                <Route path="/edit-profile"  component={Form} />
                <Route path="/user/:id"  component={UserDetails} />
                <Route path="/users"  component={AllUsers} />

                <Route path="/new-pin"  component={CreatePin} />
                <Route path="/pin-id/:id"  component={Pin} />

                <Route path="/new-board"  component={CreateBoard} />
                <Route path="/board-details/:id"  component={BoardDetalis} />
                
                <Route path="/header"  component={Header} />
                <Redirect to="/notfound" />
            </Switch>
        </Router>
    );
}


