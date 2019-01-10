import React, { Component } from "react";
import "./style.css";
import NavBar from '../../components/NavBar'
import { Row, Jumbotron } from 'reactstrap';
import Button from "../../components/Button";
import API from "../../utils/API";
import { List, ListItem } from "../../components/List";

class Character extends Component {

    constructor(props) {
        super(props);

        this.state = {     
            
            names: [],
            randomCharacter: [{
                race: "",
                gender: "",
                characterClass: "",
                alignment: "",
                name: ""
            }]
            
        };
    }

    componentDidMount(){

        API.getName()
            .then(response => {
                console.log(response.data);
                this.setState({ names: response.data });
            })
            .catch(err => console.log(err))
    }

    generateNPC = () => {
        const raceArray = ["Dragonborn", "Dwarf", "Elf", "Elf", "Gnome", "Elf", "Half-Elf", "Half-Orc", "Halfling", "Human", "Tiefling"],
        genders = ["Male", "Female"],
        characterClasses = ["Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Scorcerer", "Warlock", "Wizard", "Beggar", "Pickpocket", "Inn Keeper", "Bar Maid", "Bartender", "Shopkeeper", "Guard", "Farmer", "Entertainer", "Doctor", "Blacksmith"],
        alignments = ["Good", "Neutral", "Evil"];

        let race = raceArray[Math.floor(Math.random() * raceArray.length)],
            gender = genders[Math.floor(Math.random() * genders.length)],
            characterClass = characterClasses[Math.floor(Math.random() * characterClasses.length)],
            alignment = alignments[Math.floor(Math.random() * alignments.length)],
            raceSearch = "";

            switch (race) {
                case "Half-Elf": raceSearch = "Half_Elf";
                    break;
                case "Half-Orc": raceSearch = "Half_Orc";
                    break;
                default: raceSearch = race;
            }

            let randomNamesArray = this.state.names[0][raceSearch][gender.toLowerCase()],
            name = randomNamesArray[Math.floor(Math.random() * randomNamesArray.length)];

            console.log(race,gender,characterClass,alignment, name);

            this.setState({
                randomCharacter: {
                    race: race,
                    gender: gender,
                    characterClass: characterClass,
                    alignment: alignment,
                    name: name
    
                }
            })
    }

    render() {
        return (
            <div className="character">
                <NavBar />
                <h1>Quick NPC Generator</h1>
                <Jumbotron>
                    <h2>NPC Results Here</h2>
                    {this.state.randomCharacter.race ? (
                                    <List>
                                        <ListItem>
                                            {this.state.randomCharacter.name}
                                        </ListItem>
                                        <ListItem>
                                            {this.state.randomCharacter.race}
                                        </ListItem>

                                        <ListItem>
                                            {this.state.randomCharacter.gender}
                                        </ListItem>

                                        <ListItem>
                                            {this.state.randomCharacter.characterClass}
                                        </ListItem>

                                        <ListItem>
                                            {this.state.randomCharacter.alignment}
                                        </ListItem>
                                    </List>

                                ) : ""}

                </Jumbotron>

                <Row className="buttons">
                    <Button name="Generate NPC" clicked={this.generateNPC} />

                </Row>





            </div>
        )
    }
}
export default Character;