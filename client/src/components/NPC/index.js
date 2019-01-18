import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Row, Col, Jumbotron } from 'reactstrap';
import { List, ListItem } from "../../components/List";
import API from "../../utils/API";



class NonPlayer extends Component {

    state = {
        names: [],
        race: "Random",
        gender: "Random",
        characterClass: "Random",
        alignment: "Random",
        randomCharacter: [{
            race: "",
            gender: "",
            characterClass: "",
            alignment: "",
            name: ""
        }]
    }

    componentDidMount() {
        API.getName()
            .then(response => {
                console.log(response.data);
                this.setState({ names: response.data });
            })
            .catch(err => console.log(err));
    }

    raceSelect = event => {
        console.log(event.target.value);
        this.setState({ race: event.target.value });
    }

    genderSelect = event => {
        console.log(event.target.value);
        this.setState({ gender: event.target.value });

    }

    classSelect = event => {
        console.log(event.target.value);
        this.setState({ characterClass: event.target.value });

    }

    alignmentSelect = event => {
        console.log(event.target.value);
        this.setState({ alignment: event.target.value });

    }

    generateNPC = () => {
        const raceArray = ["Dragonborn", "Dwarf", "Elf", "Elf", "Gnome", "Elf", "Half-Elf", "Half-Orc", "Halfling", "Human", "Tiefling"],
            genders = ["Male", "Female"],
            characterClasses = ["Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Scorcerer", "Warlock", "Wizard", "Beggar", "Pickpocket", "Inn Keeper", "Bar Maid", "Bartender", "Shopkeeper", "Guard", "Farmer", "Entertainer", "Doctor", "Blacksmith"],
            alignments = ["Good", "Neutral", "Evil"]

        let race = this.state.race !== "Random" ? this.state.race : raceArray[Math.floor(Math.random() * raceArray.length)],
            gender = this.state.gender !== "Random" ? this.state.gender : genders[Math.floor(Math.random() * genders.length)],
            characterClass = this.state.characterClass !== "Random" ? this.state.characterClass : characterClasses[Math.floor(Math.random() * characterClasses.length)],
            alignment = this.state.alignment !== "Random" ? this.state.alignment : alignments[Math.floor(Math.random() * alignments.length)],
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


        console.log(race, gender, characterClass, alignment, name);

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
            <div>
                <h1>NPC Generator</h1>



                <Row>
                    <Col md="3">
                        <FormGroup>
                            <Label for="npcRace">Race</Label>
                            <Input type="select" name="select" id="npcRace" onChange={this.raceSelect.bind(this)}>
                                <option value="Random" defaultValue>Random</option>
                                <option value="Dragonborn">Dragonborn</option>
                                <option value="Dwarf">Dwarf</option>
                                <option value="Elf">Elf</option>
                                <option value="Gnome">Gnome</option>
                                <option value="Half-Elf">Half-Elf</option>
                                <option value="Half-Orc">Half-Orc</option>
                                <option value="Halfling">Halfling</option>
                                <option value="Human">Human</option>
                                <option value="Tiefling">Tiefling</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="npcGender">Gender</Label>
                            <Input type="select" name="select" id="npcGender" onChange={this.genderSelect.bind(this)}>
                                <option value="Random" defaultValue>Random</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="npcClass">Class or Profession</Label>
                            <Input type="select" name="select" id="npcClass" onChange={this.classSelect.bind(this)}>
                                <option value="Random" defaultValue>Random</option>
                                <option value="Barbarian">Barbarian</option>
                                <option value="Bard">Bard</option>
                                <option value="Cleric">Cleric</option>
                                <option value="Druid">Druid</option>
                                <option value="Fighter">Fighter</option>
                                <option value="Monk">Monk</option>
                                <option value="Paladin">Paladin</option>
                                <option value="Ranger">Ranger</option>
                                <option value="Rogue">Rogue</option>
                                <option value="Scorcerer">Scorcerer</option>
                                <option value="Warlock">Warlock</option>
                                <option value="Wizard">Wizard</option>
                                <option value="Beggar">Beggar</option>
                                <option value="Pickpocket">Pickpocket</option>
                                <option value="Inn Keeper">Inn Keeper</option>
                                <option value="Bar Maid">Bar Maid</option>
                                <option value="Bartender">Bartender</option>
                                <option value="Shopkeeper">Shopkeeper</option>
                                <option value="Guard">Guard</option>
                                <option value="Farmer">Farmer</option>
                                <option value="Entertainer">Entertainer</option>
                                <option value="Doctor">Doctor</option>
                                <option value="Blacksmith">Blacksmith</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="npcAlignment">Alignment</Label>
                            <Input type="select" name="select" id="npcAlignment" onChange={this.alignmentSelect.bind(this)}>
                                <option value="Random" defaultValue>Random</option>
                                <option value="Good">Good</option>
                                <option value="Neutral">Neutral</option>
                                <option value="Evil">Evil</option>
                            </Input>
                        </FormGroup>
                    </Col>
                    <Col md="9">
                        <Jumbotron id="results">
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
                    </Col>
                </Row>
                <Row>
                    <Col md="3">
                        <Button className="btn" id="npcGenerate" onClick={this.generateNPC}>Generate NPC</Button>
                    </Col>
                </Row>

            </div>

        );
    }
}
export default NonPlayer;