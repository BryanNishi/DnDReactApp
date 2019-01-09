import React, { Component } from "react";
import API from "../../utils/API";
import NavBar from '../../components/NavBar';
import { Jumbotron } from 'reactstrap';
import { List, ListItem } from "../../components/List";
import Button from "../../components/Button";
import "./treasure.css";


class Treasure extends Component {
    state = {
        generate: {
            name: "Generate Treasure"
        },
        gems: [],
        cp: [],
        sp: [],
        gp: [],
        treasureFound: []
    }
    // When the component mounts retreive all treasure arrays
    componentDidMount() {
        this.loadTreasure();

    }

    // Loads all treasure arrays to states
    loadTreasure = () => {
        API.getTreasure()
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
        let generatedTreasure = [];
        //Generate 5 treasure names
       
            //generate random gem total
            let gems = Math.floor((Math.random() * 10) + 2);

            let gemWorth = Math.floor((Math.random() * 500) + 2);
            //generate random cp
            let cp = Math.floor((Math.random() * 100) + 2);
            //generate random sp
            let sp = Math.floor((Math.random() * 100) + 2);
            //generate random gp
            let gp = Math.floor((Math.random() * 100) + 2);


            //send to array
            generatedTreasure.push("You find " + cp + " Copper Pieces, " + sp + " Silver Pieces, " + gp + " Gold Pieces, and " + gems + " Gems worth " + gemWorth + " gp each." );
            console.log("generated", generatedTreasure);
            //set state to array of treasure names
            this.setState({ treasureFound: generatedTreasure })
        
    };

    render() {
        return (
            <div className="treasureGenerator">
                <NavBar />
                <h1>Treasure Generator</h1>
                <Jumbotron>
                    <List>
                        {this.state.treasureFound.map(treasure => (
                            <ListItem>
                                {treasure}
                            </ListItem>
                        ))}
                    </List>


                </Jumbotron> />

                <Button clicked={this.generateHandler} name={this.state.generate.name} />
            </div>
        );
    }
}

export default Treasure;