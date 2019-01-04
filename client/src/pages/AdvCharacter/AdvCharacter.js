import React, { Component } from "react";
import NavBar from '../../components/NavBar'
// import { Form, Row, FormGroup, Label } from 'reactstrap';
import Button from '../../components/Button';
import Input from '../../components/Input/input';
import AbilityRoll from '../../components/AbilityRoll';
import "./style.css";

class AdvCharacter extends Component {
    state = {
        characterOptions: {
            characterName: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Character Name'
                },
                value: ''
            },
            playerName: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Player Name'
                },
                value: ''
            },
            age: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Age'
                },
                value: ''
            },
            gender: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Gender'
                },
                value: ''
            },
            weight: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Weight'
                },
                value: ''
            },
            height: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Height'
                },
                value: ''
            },
            hair: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Hair Color'
                },
                value: ''
            },
            eye: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Eye Color'
                },
                value: ''
            },
            skin: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Skin Color'
                },
                value: ''
            },
            traits: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Personality Traits'
                },
                value: ''
            },
            flaws: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Character Flaws'
                },
                value: ''
            },
            race: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        { value: "random", displayValue: "Race (Leave Blank for Random)" },
                        { value: "Dragonborn", displayValue: "Dragonborn (10 Draconic Ancestries)", subrace: ["Black", "Blue", "Brass", "Bronze", "Copper", "Gold", "Green", "Red", "Silver", "White"] },
                        { value: "Dwarf", displayValue: "Dwarf (2 subraces)", subrace: ["Hill Dwarf", "Mountain Dwarf"] },
                        { value: "Elf", displayValue: "Elf (3 subraces)", subrace: ["High Elf", "Wood Elf", "Dark Elf"] },
                        { value: "Gnome", displayValue: "Gnome (2 subraces)", subrace: ["Forrest", "Rock"] },
                        { value: "Half-Elf", displayValue: "Half-Elf", subrace: "" },
                        { value: "Half-Orc", displayValue: "Half-Orc", subrace: "" },
                        { value: "Halfling", displayValue: "Halfling (2 subraces)", subrace: ["Lightfoot", "Stout"] },
                        { value: "Human", displayValue: "Human", subrace: "" },
                        { value: "Tiefling", displayValue: "Tiefling", subrace: "" }
                    ]

                },
                value: ''
            },
            classes: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        { value: "random", displayValue: "Class (Leave Blank for Random)" },
                        { value: "Barbarian", displayValue: "Barbarian" },
                        { value: "Bard", displayValue: "Bard" },
                        { value: "Cleric", displayValue: "Cleric" },
                        { value: "Druid", displayValue: "Druid" },
                        { value: "Fighter", displayValue: "Fighter" },
                        { value: "Monk", displayValue: "Monk" },
                        { value: "Paladin", displayValue: "Paladin" },
                        { value: "Ranger", displayValue: "Ranger" },
                        { value: "Rogue", displayValue: "Rogue" },
                        { value: "Scorcerer", displayValue: "Scorcerer" },
                        { value: "Warlock", displayValue: "Warlock" },
                        { value: "Wizard", displayValue: "Wizard" },
                    ]
                },
                value: ''
            },
            level: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        { value: "random", displayValue: "Level (Leave Blank for Random)" },
                        { value: 1, displayValue: "1 - (0 Exp)" },
                        { value: 2, displayValue: "2 - (300 Exp)" },
                        { value: 3, displayValue: "3 - (900 Exp)" },
                        { value: 4, displayValue: "4 - (2,700 Exp)" },
                        { value: 5, displayValue: "5 - (6,500 Exp)" },
                        { value: 6, displayValue: "6 - (14,000 Exp)" },
                        { value: 7, displayValue: "7 - (23,000 Exp)" },
                        { value: 8, displayValue: "8 - (34,000 Exp)" },
                        { value: 9, displayValue: "9 - (48,000 Exp)" },
                        { value: 10, displayValue: "10 - (64,000 Exp)" },
                        { value: 11, displayValue: "11 - (85,000 Exp)" },
                        { value: 12, displayValue: "12 - (100,000 Exp)" },
                        { value: 13, displayValue: "13 - (120,000 Exp)" },
                        { value: 14, displayValue: "14 - (140,000 Exp)" },
                        { value: 15, displayValue: "15 - (165,000 Exp)" },
                        { value: 16, displayValue: "16 - (195,000 Exp)" },
                        { value: 17, displayValue: "17 - (225,000 Exp)" },
                        { value: 18, displayValue: "18 - (265,000 Exp)" },
                        { value: 19, displayValue: "19 - (305,000 Exp)" },
                        { value: 20, displayValue: "20 - (355,000 Exp)" },
                    ]
                },
                value: ''
            },
            background: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        { value: "random", displayValue: "Background (Leave Blank for Random)" },
                        { value: "Acolyte", displayValue: "Acolyte" },
                        { value: "Charlatan", displayValue: "Charlatan" },
                        { value: "Criminal", displayValue: "Criminal" },
                        { value: "Entertainer", displayValue: "Entertainer" },
                        { value: "Folk Hero", displayValue: "Folk Hero" },
                        { value: "Gladiator", displayValue: "Gladiator" },
                        { value: "Guild Artisan/Merchant", displayValue: "Guild Artisan/Merchant" },
                        { value: "Hermit", displayValue: "Hermit" },
                        { value: "Knight", displayValue: "Knight" },
                        { value: "Noble", displayValue: "Noble" },
                        { value: "Outlander", displayValue: "Outlander" },
                        { value: "Pirate", displayValue: "Pirate" },
                        { value: "Sage", displayValue: "Sage" },
                        { value: "Sailor", displayValue: "Sailor" },
                        { value: "Soldier", displayValue: "Soldier" },
                        { value: "Urchin", displayValue: "Urchin" }
                    ]
                },
                value: ''
            },
            alignment: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        { value: "random", displayValue: "Alignment (Leave Blank for Random)" },
                        { value: "Chaotic Good", displayValue: "Acolyte" },
                        { value: "Chaotic Evil", displayValue: "Charlatan" },
                        { value: "Chaotic Neutral", displayValue: "Criminal" },
                        { value: "Lawful Good", displayValue: "Entertainer" },
                        { value: "Lawful Evil", displayValue: "Folk Hero" },
                        { value: "Lawful Neutral", displayValue: "Gladiator" },
                        { value: "Neutral Good", displayValue: "Guild Artisan/Merchant" },
                        { value: "Neutral Evil", displayValue: "Hermit" },
                        { value: "True Neutral", displayValue: "Knight" }

                    ]
                },
                value: ''
            },


        },
        abilityRolls: {
            str: {
                elementType: 'select',
                elementConfig: {
                 
                    options: [
                        { value: "test", displayValue: "test" },

                    ]
                },
                value: ''
            }
        },
        button: {
            name: "Generate Character Sheet",
            roll: "Roll Ability Scores"
        }
    }

    inputChangedHandler = (event, inputIdentifier) => {
        // console.log(event.target.value);

        //create clone of state for mutating values
        const updatedCharacterOptions = {
            ...this.state.characterOptions
        }
        //clone the values insinde base elements
        const updatedFormElement = {
            ...updatedCharacterOptions[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedCharacterOptions[inputIdentifier] = updatedFormElement;
        this.setState({ characterOptions: updatedCharacterOptions });
    };

    render() {
        const characterOptionsArray = [];
        for (let key in this.state.characterOptions) {
            characterOptionsArray.push({
                id: key,
                config: this.state.characterOptions[key]
            });
        }

        let form = (
            <form>

                {characterOptionsArray.map(formElement => (
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)} />
                ))}
            </form>
        );

        let roll = (
            <div>
                <Button name={this.state.button.roll} />

                <AbilityRoll />
            </div>
        );

        return (
            <div className="character">
                <NavBar />
                <h1>Advanced Character Creator</h1>
                {form}
                {roll}
                <Button name={this.state.button.name} />
            </div>


        )
    }
};

export default AdvCharacter;