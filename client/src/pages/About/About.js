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

    onFailure = (error) => {
        alert("Error! Unable to find your account!");
    };

    googleResponse = (response) => {
        

        let userData = {
            googleId : response.profileObj.googleId,
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

                if(!userInDB) {
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
                <ul>
                    <li>Run a game with the DM Screen!</li>
                    <li>Lookup monster stats with the Monster Manual!</li>
                    <li>Create your character and NPCs with the Character Creator!</li>
                    <li>Create your own world with the Lore Generator!</li>
                    <li>Save/load your games and charactrers!</li>
                </ul>
                <p>NOTICE: This is a student project and is NOT to be distributed! Website contains unlicened
            copyrighted works.</p>
                <center>

                    <GoogleLogin
                        clientId="381456997178-m1bg7p4b72h3osnijolv96bbrtbvrfl9.apps.googleusercontent.com"
                        buttonText="Login"
                        onSuccess={this.googleResponse}
                        onFailure={this.onFailure}
                    />

                </center>

            </div>
        )
    }
}


export default About;