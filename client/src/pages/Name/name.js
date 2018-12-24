import React, { Component } from "react";
import API from "../../utils/API";
import "./name.css";
import NavBar from '../../components/NavBar';



class Name extends Component {


  state = {
    names: []
};


componentDidMount() {
    this.loadNames();
}


loadNames = () => {
    API.getNames()
    .then(res => this.setState({ names: res.data }))
    .catch(err => console.log(err));
    
};




    render() {
        return (

            <div className="generator">
                <NavBar />
                <container>
                   

                </container>
            </div>

        );
    }
}

export default Name;