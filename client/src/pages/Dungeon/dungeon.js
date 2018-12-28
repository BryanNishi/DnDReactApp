import React, { Component } from "react";
import API from "../../utils/API";
import NavBar from '../../components/NavBar';
import { Jumbotron } from 'reactstrap';
import { List, ListItem } from "../../components/List";
import Button from "../../components/Button";
import "./dungeon.css";


class Dungeon extends Component {
    state = {
        generate: {
            href: "/dungeon",
            name: "Generate 5 dungeons"
        },
        directions: [],
        elements: [],
        descriptions: [],
        dungeonNames: []
    }
    // When the component mounts retreive all dungeon arrays
    componentDidMount() {
        this.loadDungeon();

    }

    // Loads all dungeon arrays to states
    loadDungeon = () => {
        API.getDungeon()
            .then(response => {
                console.log(response.data);
                this.setState({ directions: response.data[0].direction });
                this.setState({ elements: response.data[0].element });
                this.setState({ descriptions: response.data[0].description });
            })
            .catch(err => console.log(err));
    };

    generateHandler = (event) => {
        event.preventDefault();
        let generatedName = [];
        //Generate 5 dungeon names
        let i = 0;
        for (i = 0; i < 5; i++) {
            //pull random direction
            let direction = this.state.directions[Math.floor(Math.random() * this.state.directions.length)] + " ";

            //pull random element
            let element = this.state.elements[Math.floor(Math.random() * this.state.elements.length)] + " ";

            //pull random description
            let description = this.state.descriptions[Math.floor(Math.random() * this.state.descriptions.length)] + " ";

            //send to array
            generatedName.push("You head " + direction +"into a " + element + "and it is " + description);
            console.log("generated", generatedName);
            //set state to array of dungeon names
            this.setState({ dungeonNames: generatedName })
        };
    };

    render() {
        return (
            <div className="dungeonGenerator">
                <NavBar />
                <h1>Dungeon Name Generator</h1>
                <Jumbotron>
                    <List>
                        {this.state.dungeonNames.map(dungeon => (
                            <ListItem>
                                {dungeon}
                            </ListItem>
                        ))}
                    </List>


                </Jumbotron> />

                <Button clicked={this.generateHandler} name={this.state.generate.name} />
            </div>
        );
    }
}

export default Dungeon;