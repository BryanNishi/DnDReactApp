import React, { Component } from "react";
import API from "../../utils/API";
import NavBar from '../../components/NavBar';
import { Row, Jumbotron, Form, FormGroup, Label, Input } from 'reactstrap';
import { List, ListItem } from "../../components/List";
import Button from "../../components/Button";
import "./style.css";






class Name extends Component {
    constructor(props) {
        super(props);
        this.state = {
            generate: {
                href: "/name",
                male: "Generate Male Names",
                female: "Generate Female Names"
            },
            names: [],
            race: "",
            fiveRandomNames: []
        };
    }


    componentDidMount() {
        this.loadNames();
    }


    loadNames = () => {
        API.getName()
            .then(response => {
                console.log(response.data);
                this.setState({ names: response.data });
            })
            .catch(err => console.log(err));

    };

    setRace = (event) => {
        this.setState({ race: event.target.value });
        console.log(event.target.value);
    }

    generateMaleHandler = (event) => {
        event.preventDefault();

        let race = this.state.race;

        race !== "" ? this.setState({ fiveRandomNames: this.getRandomNames(this.state.names[0][race].male, 5) }) : console.log("No Race Selected");

    };

    generateFemaleHandler = (event) => {
        event.preventDefault();

        let race = this.state.race;

        race !== "" ? this.setState({ fiveRandomNames: this.getRandomNames(this.state.names[0][race].female, 5) }) : console.log("No Race Selected");

    };

    getRandomNames = (arr, n) => {
        let result = new Array(n),
            len = arr.length,
            taken = new Array(len);
        if (n > len)
            throw new RangeError("getRandom: more elements taken than available");
        while (n--) {
            let x = Math.floor(Math.random() * len);
            result[n] = arr[x in taken ? taken[x] : x];
            taken[x] = --len in taken ? taken[len] : len;
        }
        return result;
    }


    render() {
        return (

            <div className="generator">
                <NavBar />
                <h1>Character Name Generator</h1>


                <Jumbotron>
                <h2>Names Results Here</h2>
                {this.state.fiveRandomNames.map(name => (
                    
                        <List>
                            <ListItem key={name}>
                                {name}
                            </ListItem>
                        </List>                    
                ))}
                </Jumbotron>


                <Form>
                    <FormGroup>
                        <Label for="race">Race</Label>
                        <Input type="select" name="select" id="race" onChange={this.setRace.bind(this)}>
                            <option defaultValue value="">Choose a Race</option>
                            <option value="Dragonborn">Dragonborn</option>
                            <option value="Dwarf">Dwarf</option>
                            <option value="Elf">Elf</option>
                            <option value="Gnome">Gnome</option>
                            <option value="Half_Elf">Half-Elf</option>
                            <option value="Half_Orc">Half-Orc</option>
                            <option value="Halfling">Halfling</option>
                            <option value="Human">Human</option>
                            <option value="Tiefling">Tiefling</option>
                        </Input>
                    </FormGroup>
                </Form>
                <Row className="buttons">

                    <Button clicked={this.generateMaleHandler} name={this.state.generate.male} />
                    <Button clicked={this.generateFemaleHandler} name={this.state.generate.female} />

                </Row>
            </div>

        );
    }
}

export default Name;