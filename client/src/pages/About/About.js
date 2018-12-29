import React, { Component } from "react";
import "./style.css";
import NavBar from '../../components/NavBar'
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import PostData from "../../utils/PostData";
import API from "../../utils/API";



class About extends Component {
    constructor(props){
        super(props);
        this.state = {
            redirect: false,
            userdata: []
        }
        this.signup = this.signup.bind(this)
    }

    signup(res,type){
            
    }

    componentDidMount(){
        // API.getAllUserData()
        // .then(res => {
        //     res.map(userData => this.setState({ userData : userData.googleId }))
        // })
        // .catch(err => console.log(err));

        // console.log(this.state.userdata);

    }


    render() {   
        

        const responseGoogle = response => {
            console.log(response);

            this.state.userdata.indexOf(response.profileObj.googleId) !== -1 ? console.log("Found it") : console.log("Not here");

            if(this.state.userdata.indexOf(response.profileObj.googleId) !== -1){
                //logged in
            } else {

                // API.saveUserData({
                //     googleId: response.profileObj.googleId,
                //     name: response.profileObj.name
                // })
                // .then(res => console.log(res))
                // .catch(err => console.log(err));
                
            }


            // if(){
            //     console.log("Found it");
            // } else {
            //     console.log("Not here");
            // } 

            // this.signup(response,"google");
        }

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
                <GoogleLogin
                    clientId="381456997178-m1bg7p4b72h3osnijolv96bbrtbvrfl9.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                />
            </div>
        )
    }
}


export default About;