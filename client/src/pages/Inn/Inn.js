import React, { Component } from "react";
import API from "../../utils/API";
import "./inn.css";
import NavBar from '../../components/NavBar';
import { Jumbotron } from 'reactstrap';
import Button from "../../components/Button";



class Inn extends Component {
    state = {
        generate: {
            href: "/inn",
            name: "Generate Inn"
        },
        adj: [],
        noun: [],
        type: [],

    }
    // When the component mounts retreive all inn arrays
    componentDidMount() {
        this.loadInn();

    }

    // Loads all inn arrays to states
    loadInn = () => {
        API.getInn()

            .then(response => {
                this.setState({ adj: response.data[0].adj });
                this.setState({ noun: response.data[1].noun });
                this.setState({ type: response.data[2].type });
            })
            .catch(err => console.log(err));

    };

    generateHandler = (event) => {
        console.log("trigger")
        event.preventDefault();
        console.log("trigger")
        console.log(this.state.adj, this.state.noun, this.state.type)
    }

    render() {
        return (
            <div className="innGenerator">
                <NavBar />
                <h1>Inn Name Generator</h1>
                <Jumbotron id="inn" />

                <Button onClick={this.generateHandler} name={this.state.generate.name} />
            </div>
        );
    }
}

export default Inn;