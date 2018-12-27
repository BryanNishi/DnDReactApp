import React, { Component } from "react";
import API from "../../utils/API";
import NavBar from '../../components/NavBar';
import { Jumbotron, Form, FormGroup, Label, Input } from 'reactstrap';
import { List, ListItem } from "../../components/List";
import Button from "../../components/Button";
import "./name.css";




class Name extends Component {
    state = {
        generate: {
            href: "/name",
            male: "Generate Male Names",
            female: "Generate Female Names"
        },
        names: []
    };


    componentDidMount() {
        this.loadNames();
    }


    loadNames = () => {
        API.getName()
            .then(response => {
                console.log(response.data);


            })
            .catch(err => console.log(err));

    };

    generateMaleHandler = (event) => {
        event.preventDefault();
        let generatedName = [];
        //Generate 5 land names
        let i = 0;
        for (i = 0; i < 5; i++) {
            //pull random adjective
            let first = this.state.race.first[Math.floor(Math.random() * this.state.race.first.length)] + " ";

            //pull random noun
            let last = this.state.race.last[Math.floor(Math.random() * this.state.race.first.length)];

            //send to array
            generatedName.push(first + last);
            console.log("generated", generatedName);
            //set state to array of land names
            this.setState({ names: generatedName })
        };
    };
    generateFemaleHandler = (event) => {
        event.preventDefault();
        let generatedName = [];
        //Generate 5 land names
        let i = 0;
        for (i = 0; i < 5; i++) {
            //pull random adjective
            let first = this.state.race.first[Math.floor(Math.random() * this.state.race.first.length)] + " ";

            //pull random noun
            let last = this.state.race.last[Math.floor(Math.random() * this.state.race.first.length)];

            //send to array
            generatedName.push(first + last);
            console.log("generated", generatedName);
            //set state to array of land names
            this.setState({ names: generatedName })
        };
    };


    render() {
        return (

            <div className="generator">
                <NavBar />
                <h1>Character Name Generator</h1>
                <Jumbotron>
                    <List>
                        {this.state.names.map(name => (
                            <ListItem>
                                {name}
                            </ListItem>
                        ))}
                    </List>
                </Jumbotron>
                <Form>
                    <FormGroup>
                        <Label for="charRace">Race</Label>
                        <Input type="select" name="select" id="charRace">
                            <option defaultValue>Choose a Race</option>
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
                </Form>
                <Button clicked={this.generateMaleHandler} name={this.state.generate.male} />
                <Button clicked={this.generateFemaleHandler} name={this.state.generate.female} />
            </div>

        );
    }
}

export default Name;