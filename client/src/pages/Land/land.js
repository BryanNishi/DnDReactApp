import React, { Component } from "react";
import API from "../../utils/API";
import NavBar from '../../components/NavBar';
import { Jumbotron } from 'reactstrap';
import { List, ListItem } from "../../components/List";
import Button from "../../components/Button";
import "./land.css";


class Land extends Component {
    state = {
        generate: {
            href: "/land",
            name: "Generate 5 lands"
        },
        adjs: [],
        nouns: [],
        landNames: []
    }
    // When the component mounts retreive all land arrays
    componentDidMount() {
        this.loadLand();

    }

    // Loads all land arrays to states
    loadLand = () => {
        API.getLand()
            .then(response => {
                console.log(response.data);
                this.setState({ adjs: response.data[0].adj });
                this.setState({ nouns: response.data[0].noun });

            })
            .catch(err => console.log(err));
    };

    generateHandler = (event) => {
        event.preventDefault();
        let generatedName = [];
        //Generate 5 land names
        let i = 0;
        for (i = 0; i < 5; i++) {
            //pull random adjective
            let adj = "The " + this.state.adjs[Math.floor(Math.random() * this.state.adjs.length)] + " ";

            //pull random noun
            let noun = this.state.nouns[Math.floor(Math.random() * this.state.nouns.length)] + " ";

            //send to array
            generatedName.push(adj + noun);
            console.log("generated", generatedName);
            //set state to array of land names
            this.setState({ landNames: generatedName })
        };
    };

    render() {
        return (
            <div className="landGenerator">
                <NavBar />
                <h1>Land Name Generator</h1>
                <Jumbotron>
                    <List>
                        {this.state.landNames.map(land => (
                            <ListItem>
                                {land}
                            </ListItem>
                        ))}
                    </List>


                </Jumbotron> />

                <Button clicked={this.generateHandler} name={this.state.generate.name} />
            </div>
        );
    }
}

export default Land;