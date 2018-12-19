import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Row, Col, Jumbotron } from 'reactstrap';



class NonPlayer extends Component {

    render() {
        return (
            <div>
                <h1>NPC Generator</h1>

                <Form>

                    <Row>
                        <Col md="3">
                            <FormGroup>
                                <Label for="npcRace">Race</Label>
                                <Input type="select" name="select" id="npcRace">
                                    <option value="Random" Selected>Random</option>
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
                                <Input type="select" name="select" id="npcGender">
                                    <option value="Random" Selected>Random</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="npcClass">Class or Profession</Label>
                                <Input type="select" name="select" id="npcClass">
                                    <option value="Random" Selected>Random</option>
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
                                <Input type="select" name="select" id="npcAlignment">
                                    <option value="Random" Selected>Random</option>
                                    <option value="Goood">Goood</option>
                                    <option value="Evil">Evil</option>
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col md="9">
                        <Jumbotron id="results">
                           <h2>NPC Results Here</h2> 
                        </Jumbotron>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="3">
                            <Button className="btn" id="npcGenerate">Generate NPC</Button>
                        </Col>
                    </Row>
                </Form>
            </div>

        );
    }
}
export default NonPlayer;