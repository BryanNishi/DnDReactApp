import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Row, Col, Jumbotron } from 'reactstrap';



class AdvCC extends Component {

    render() {
        return (
            <div>
                <h1>Advanced Character Creator</h1>

                <Form>
                    <Row>
                        <Col md="6">
                            <FormGroup>
                                <Label for="characterName">Character Name</Label>
                                <Input className="form-control" id="characterName" />
                            </FormGroup>
                        </Col>
                        <Col md="1">
                            <Button className="btn" id="charNameRandom">Random Name<i className="fas fa-random"></i></Button>
                        </Col>
                        <Col md="5">
                            <FormGroup>
                                <Label for="playerName">Player Name</Label>
                                <Input className="form-control" id="playerName" />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <FormGroup>
                            <Label for="characterAge">Age</Label>
                            <Input className="form-control" id="characterAge" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="characterGender">Gender</Label>
                            <Input className="form-control" id="characterGender" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="characterHeight">Height</Label>
                            <Input className="form-control" id="characterHeight" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="characterWeight">Weight</Label>
                            <Input className="form-control" id="characterWeight" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="characterHair">Hair Color</Label>
                            <Input className="form-control" id="characterHair" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="characterEye">Eye Color</Label>
                            <Input className="form-control" id="characterEye" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="characterSkin">Skin Color</Label>
                            <Input className="form-control" id="characterSkin" />
                        </FormGroup>
                    </Row>
                    <Row>
                        <Col>
                            <FormGroup>
                                <Label for="charclassName">Class</Label>
                                <Input type="select" name="select" id="charclassName">
                                    <option Selected>Choose a className</option>
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
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col>
                            <Label for="charLevel">Level</Label>
                            <Input type="select" name="select" id="charLevel">
                                <option value="1" Selected="Selected">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                                <option value="17">17</option>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                            </Input>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="charRace">Race</Label>
                                <Input type="select" name="select" id="charRace">

                                    <option Selected>Choose a Race</option>
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
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="charSubRace">Subrace</Label>
                                <Input type="select" name="select" id="charSubRace">
                                </Input>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <div id="abilityScores">

                            <Button className="btn">Roll Scores<i className="fas fa-dice"></i></Button>

                            <FormGroup>
                                <Label for="Str">Strength</Label>
                                <Input type="select" name="select" id="Str">
                                    <option Selected>Roll</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="Dex">Dexterity</Label>
                                <Input type="select" name="select" id="Dex">
                                    <option Selected>Roll</option>
                                </Input>
                            </FormGroup>

                            <FormGroup>
                                <Label for="Con">Constitution</Label>
                                <Input type="select" name="select" id="Con">
                                    <option Selected>Roll</option>

                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="Int">Intelligence</Label>
                                <Input type="select" name="select" id="Int">
                                    <option Selected>Roll</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="Wis">Wisdom</Label>
                                <Input type="select" name="select" id="Wis">
                                    <option Selected>Roll</option>
                                </Input>
                            </FormGroup>

                            <FormGroup>
                                <Label for="Cha">Charisma</Label>
                                <Input type="select" name="select" id="Cha">
                                    <option Selected>Roll</option>
                                </Input>
                            </FormGroup>
                        </div>
                    </Row>
                </Form>

            </div>
            //     {/* Selection Cards */}
            //     <Col id="SelectionCard" />

            //     <Col id="raceCard" />


            //     {/* Descriptions Section */}
            //     <Col id="description" />
            //     <Jumbotron>
            //         <h2>Character Summary</h2>
            //         <div className="desc"></div>
            //         <div className="charSheet">
            //   </Jumbotron>

        );
    }
}
export default AdvCC;