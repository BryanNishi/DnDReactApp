import React, { Component } from "react";
import "./style.css";
import NavBar from '../../components/NavBar'
import GoogleLogin from 'react-google-login';




class About extends Component {
    constructor() {
        super();
        this.state = { isAuthenticated: false, user: null, token: '' };
    }

    logout = () => {
        this.setState({ isAuthenticated: false, token: '', user: null })
    };

    onFailure = (error) => {
        alert(error);
    };
    
    googleResponse = (response) => {
        //console.log(response)

        var id_token = response.getAuthResponse().id_token;

        console.log(id_token);
        // const tokenBlob = new Blob([JSON.stringify({access_token: response.accessToken}, null, 2)], {type : 'application/json'});
        // const options = {
        //     method: 'POST',
        //     body: tokenBlob,
        //     mode: 'cors',
        //     cache: 'default'
        // };        

        // fetch('http://localhost:4000/api/v1/auth/google', options).then(r => {
        //     const token = r.headers.get('x-auth-token');
        //     r.json().then(user => {
        //         if (token) {
        //             this.setState({isAuthenticated: true, user, token})
        //         }
        //     });
        // })        
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