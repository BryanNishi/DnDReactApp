import React, { Component } from "react";
// import $ from 'jquery';
import { Button, Form, FormGroup, Label, Input, Option, Select, Row, Col } from 'reactstrap';



class AdvCC extends Component {

    render() {
        return (
            <h1>Advanced Character Creator</h1>
            <Form>
                <FormGroup>
                    <Label for="characterName">Character Name</Label>
                    <Input className="form-control" id="characterName" />
                </FormGroup>


                <Button className="btn" id="charNameRandom"><i className="fas fa-random"></i></Button>
                <FormGroup>
                    <Label for="playerName">Player Name</Label>
                    <Input className="form-control" id="playerName">
                      </FormGroup>
                    <FormGroup>
                        <Label for="characterAge">Age</Label>
                        <Input className="form-control" id="characterAge">
                                </FormGroup>
                        <FormGroup>
                            <Label for="characterGender">Gender</Label>
                            <Input className="form-control" id="characterGender">
                                </FormGroup>
                            <FormGroup>
                                <Label for="characterHeight">Height</Label>
                                <Input className="form-control" id="characterHeight">
                                </FormGroup>
                                <FormGroup>
                                    <Label for="characterWeight">Weight</Label>
                                    <Input className="form-control" id="characterWeight">
                                </FormGroup>
                                    <FormGroup>
                                        <Label for="characterHair">Hair Color</Label>
                                        <Input className="form-control" id="characterHair">
                                </FormGroup>
                                        <FormGroup>
                                            <Label for="characterEye">Eye Color</Label>
                                            <Input className="form-control" id="characterEye">
                                </FormGroup>
                                            <FormGroup>
                                                <Label for="characterSkin">Skin Color</Label>
                                                <Input className="form-control" id="characterSkin">
                                </FormGroup>

                                                <FormGroup>
                                                    <Label for="charclassName">className</Label>
                                                    <Select className="form-control" id="charclassName">
                                                        <Option Selected>Choose a className</Option>
                                                        <Option value="Barbarian">Barbarian</Option>
                                                        <Option value="Bard">Bard</Option>
                                                        <Option value="Cleric">Cleric</Option>
                                                        <Option value="Druid">Druid</Option>
                                                        <Option value="Fighter">Fighter</Option>
                                                        <Option value="Monk">Monk</Option>
                                                        <Option value="Paladin">Paladin</Option>
                                                        <Option value="Ranger">Ranger</Option>
                                                        <Option value="Rogue">Rogue</Option>
                                                        <Option value="Scorcerer">Scorcerer</Option>
                                                        <Option value="Warlock">Warlock</Option>
                                                        <Option value="Wizard">Wizard</Option>
                                                    </Select>
                                                </FormGroup>
                                                <Label for="charLevel">Level</Label>
                                                <Select className="form-control" id="charLevel">
                                                    <Option value="1" Selected="Selected">1</Option>
                                                    <Option value="2">2</Option>
                                                    <Option value="3">3</Option>
                                                    <Option value="4">4</Option>
                                                    <Option value="5">5</Option>
                                                    <Option value="6">6</Option>
                                                    <Option value="7">7</Option>
                                                    <Option value="8">8</Option>
                                                    <Option value="9">9</Option>
                                                    <Option value="10">10</Option>
                                                    <Option value="11">11</Option>
                                                    <Option value="12">12</Option>
                                                    <Option value="13">13</Option>
                                                    <Option value="14">14</Option>
                                                    <Option value="15">15</Option>
                                                    <Option value="16">16</Option>
                                                    <Option value="17">17</Option>
                                                    <Option value="18">18</Option>
                                                    <Option value="19">19</Option>
                                                    <Option value="20">20</Option>
                                                </Select>

                                                <FormGroup>
                                                <Label for="charRace">Race</Label>
                                                <Select className="form-control" id="charRace">
                                                    <Option Selected>Choose a Race</Option>
                                                    <Option value="Dragonborn">Dragonborn</Option>
                                                    <Option value="Dwarf">Dwarf</Option>
                                                    <Option value="Elf">Elf</Option>
                                                    <Option value="Gnome">Gnome</Option>
                                                    <Option value="Half-Elf">Half-Elf</Option>
                                                    <Option value="Half-Orc">Half-Orc</Option>
                                                    <Option value="Halfling">Halfling</Option>
                                                    <Option value="Human">Human</Option>
                                                    <Option value="Tiefling">Tiefling</Option>
                                                </Select>
                                               </FormGroup>
                                            <FormGroup>
                                                <Label for="charSubRace">Subrace</Label>
                                                <Select className="form-control" id="charSubRace">
                                                </Select>
                                            </FormGroup>
                                       

                                  {/* Ability Scores */}
                            <Row id="abilityScores">
                                            
                                                <Button className="btn diceRoll"><i className="fas fa-dice"></i></Button>
                                          
                                            <FormGroup>
                                            <Label for="Str">Strength</Label>
                                            <Select className="form-control abilityScore" id="Str">
                                                <Option Selected>Roll</Option>
                                            </Select>
                                      </FormGroup>
                                        <FormGroup>
                                        <Label for="Dex">Dexterity</Label>
                                        <Select className="form-control abilityScore" id="Dex">
                                            <Option Selected>Roll</Option>
                                        </Select>
                                        </FormGroup>
                                                
                                    <FormGroup>
                                    <Label for="Con">Constitution</Label>
                                    <Select className="form-control abilityScore" id="Con">
                                        <Option Selected>Roll</Option>

                                    </Select>
                                           </FormGroup>    
                                <FormGroup>
                                <Label for="Int">Intelligence</Label>
                                <Select className="form-control abilityScore" id="Int">
                                    <Option Selected>Roll</Option>
                                </Select>
                                                </FormGroup>
                            <FormGroup>
                            <Label for="Wis">Wisdom</Label>
                            <Select className="form-control abilityScore" id="Wis">
                                <Option Selected>Roll</Option>
                            </Select>
                            </FormGroup>
                                               
                        <FormGroup>
                        <Label for="Cha">Charisma</Label>
                        <Select className="form-control abilityScore" id="Cha">
                            <Option Selected>Roll</Option>
                        </Select>
                                    </FormGroup>
                                           
                                       
                    </Form >
                               

            {/* Selection Cards */ }
            < div className = "col-2" id = "SelectionCard" >
                    </div >
            <div className="col-2" id="raceCard">
            </div>

        {/* Descriptions Section */ }
        <div className="col-12" id="description">
            <div className="jumbotron">
                <h2>Character Summary</h2>
                <div className="desc"></div>
                <div className="charSheet">
                </div>
            </div>
        </div>
                </div >
            </div >
        );
    }
}
export default AdvCC;