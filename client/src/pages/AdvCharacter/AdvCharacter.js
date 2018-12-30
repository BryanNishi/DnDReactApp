import React, { Component } from "react";
import NavBar from '../../components/NavBar'
import { Form, Row, Col, FormGroup, Label, Input } from 'reactstrap';
import FormInput from '../../components/FormInput';
import Button from '../../components/Button';
import "./style.css";

class AdvCharacter extends Component {
    state = {
        inputFields: [
            { label: "Character Name", id: "characterName" },
            { label: "Player Name", id: "playerName" },
            { label: "Age", id: "CharacterAge" },
            { label: "Gender", id: "CharacterGender" },
            { label: "Height", id: "CharacterHeight" },
            { label: "Weight", id: "CharacterWeight" },
            { label: "Hair Color", id: "CharacterHairColor" },
            { label: "Eye Color", id: "CharacterEyeColor" },
            { label: "Skin Color", id: "CharacterSkinColor" },
        ],
        Classes: [
            { classLabel: "Barbarian" },
            { classLabel: "Bard" },
            { classLabel: "Cleric" },
            { classLabel: "Druid" },
            { classLabel: "Fighter" },
            { classLabel: "Monk" },
            { classLabel: "Paladin" },
            { classLabel: "Ranger" },
            { classLabel: "Rogue" },
            { classLabel: "Scorcerer" },
            { classLabel: "Warlock" },
            { classLabel: "Wizard" },
        ],
        levels: [
            { level: "1" },
            { level: "2" },
            { level: "3" },
            { level: "4" },
            { level: "5" },
            { level: "6" },
            { level: "7" },
            { level: "8" },
            { level: "9" },
            { level: "10" },
            { level: "11" },
            { level: "12" },
            { level: "13" },
            { level: "14" },
            { level: "15" },
            { level: "16" },
            { level: "17" },
            { level: "18" },
            { level: "19" },
            { level: "20" },
        ],
        races: [
            { race: "Dragonborn" },
            { race: "Dwarf" },
            { race: "Elf" },
            { race: "Gnome" },
            { race: "Half-Elf"},
            { race: "Half-Orc" },
            { race: "Halfling" },
            { race: "Human" },
            { race: "Tiefling" },
        ],
    }
    render() {

        let basicFields = (
            <div>
                {this.state.inputFields.map(basic => {
                    return <FormInput
                        label={basic.label}
                        id={basic.id} />
                })}
            </div>
        );

        let charClass = (
            <div>
                <FormGroup>
                    <Label>Class</Label>
                    <Input type="select" id="charClassName">
                        {this.state.Classes.map(charClass => {
                            return <option value={charClass.classLabel}>
                                {charClass.classLabel}
                            </option>
                        })}

                    </Input>
                </FormGroup>
            </div>
        );

        let charLvl = (
            <div>
                <FormGroup>
                    <Label>Level</Label>
                    <Input type="select" id="charLevel">
                        {this.state.levels.map(charLvl => {
                            return <option value={charLvl.level}>
                                {charLvl.level}
                            </option>
                        })}

                    </Input>
                </FormGroup>
            </div>
        );

        let charRace = (
            <div>
                <FormGroup>
                    <Label>Race</Label>
                    <Input type="select" id="charRace">
                        {this.state.races.map(charRace => {
                            return <option value={charRace.race}>
                                {charRace.race}
                            </option>
                        })}

                    </Input>
                </FormGroup>
            </div>
        );

        return (
            <div className="character">
                <NavBar />
                <h1>Advanced Character Creator</h1>

                <Form>
                    <Row>
                        {basicFields}
                    </Row>
                    <Row>
                        {charClass}
                        {charLvl}
                        {charRace}
                        
                            <FormGroup>
                                <Label for="charSubRace">Subrace</Label>
                                <Input type="select" id="charSubRace">
                                </Input>
                            </FormGroup>
                        
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


        )
    }
};

export default AdvCharacter;