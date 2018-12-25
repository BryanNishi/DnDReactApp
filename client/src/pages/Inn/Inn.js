import React, { Component } from "react";
import API from "../../utils/API";
import NavBar from '../../components/NavBar';
import { Jumbotron } from 'reactstrap';
import { List, ListItem } from "../../components/List";
import Button from "../../components/Button";
import "./inn.css";


class Inn extends Component {
    state = {
        generate: {
            href: "/inn",
            name: "Generate 5 Inns"
        },
        adjs: [],
        nouns: [],
        types: [],
        innNames: []
    }
    // When the component mounts retreive all inn arrays
    componentDidMount() {
        this.loadInn();

    }

    // Loads all inn arrays to states
    loadInn = () => {
        API.getInn()
            .then(response => {
                this.setState({ adjs: response.data[0].adj });
                this.setState({ nouns: response.data[0].noun });
                this.setState({ types: response.data[0].type });
            })
            .catch(err => console.log(err));
    };

    generateHandler = (event) => {
        event.preventDefault();
        let generatedName = [];
        //Generate 5 inn names
        let i = 0;
        for (i = 0; i < 5; i++) {
            //pull random adjective
            let adj = "The " + this.state.adjs[Math.floor(Math.random() * this.state.adjs.length)] + " ";

            //pull random noun
            let noun = this.state.nouns[Math.floor(Math.random() * this.state.nouns.length)] + " ";

            //pull random type
            let type = this.state.types[Math.floor(Math.random() * this.state.types.length)];

            //send to array
            generatedName.push(adj + noun + type);
            console.log("generated", generatedName);
            //set state to array of inn names
            this.setState({ innNames: generatedName })
        };
    };

    render() {
        return (
            <div className="innGenerator">
                <NavBar />
                <h1>Inn Name Generator</h1>
                <Jumbotron>
                    <List>
                        {this.state.innNames.map(inn => (
                            <ListItem>
                                {inn}
                            </ListItem>
                        ))}
                    </List>


                </Jumbotron> />

                <Button clicked={this.generateHandler} name={this.state.generate.name} />
            </div>
        );
    }
}

export default Inn;