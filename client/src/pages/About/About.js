import React, { Component } from "react";
import "./style.css";
import NavBar from '../../components/NavBar'
import GoogleLogin from 'react-google-login';
import API from '../../utils/API';



class About extends Component {
    constructor() {
        super();
        this.state = {
            isAuthenticated: false,
            user: null, token: ''
        };
    }

    logout = () => {
        this.setState({ isAuthenticated: false, token: '', user: null })
    };

    googleResponse = (response) => {


        let userData = {
            googleId: response.profileObj.googleId,
            name: response.profileObj.name
        }


        API.getUser()
            .then(res => {

                let userInDB = false;

                for (let i = 0; i < res.data.length; i++) {
                    if (res.data[i].googleId === userData.googleId) {
                        console.log("User Found");
                        userInDB = true;
                    }
                }

                if (!userInDB) {
                    API.postUser(userData)
                        .then(res => console.log(res))
                        .catch(err => console.log(err))

                }
            })
            .catch(err => console.log(err))
    };



    render() {


        return (

            <div className="about">
                <NavBar />
                <h1>Welcome to the Dungeon Master's Database</h1>
                <ul className="features">
                    <li>Run a game and track initative with the DM Screen!</li>
                    <li>Lookup monster stats, spells, classes and class features!</li>
                    <li>Create your character, NPCs and your own world with the Generators!</li>
                    <li>Roll any dice combo with the dice roller!</li>
                    <li>Print out finished character sheets</li>
                </ul>
                <p>NOTICE: This is a student project and is NOT to be distributed! Website contains unlicened
            copyrighted works.</p>
                <center>

                    <GoogleLogin
                        clientId="381456997178-m1bg7p4b72h3osnijolv96bbrtbvrfl9.apps.googleusercontent.com"
                        buttonText="Login"
                        onSuccess={this.googleResponse}
                        onFailure={this.googleResponse}
                    />

                </center>

            </div>
        )
    }
}


export default About;