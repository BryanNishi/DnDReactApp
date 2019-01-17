import React, { Component } from "react";
import NavBar from '../../components/NavBar'
import { Jumbotron } from 'reactstrap';
import Button from '../../components/Button';
import Input from '../../components/Input/input';
import ExportData from '../../components/ExportData';
import Example from '../../components/Print';
import $ from 'jquery';
import "./style.css";


class AdvCharacter extends Component {
    state = {
        buttons: {
            name: "Roll Ability Scores",
        },
        button: {
            name: "Generate Character Sheet",
        },
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
                        { value: "random", displayValue: "Race" },
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
                        { value: "random", displayValue: "Class" },
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
                        { value: "random", displayValue: "Level" },
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
                        { value: "random", displayValue: "Background" },
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
                        { value: "random", displayValue: "Alignment" },
                        { value: "Chaotic Good", displayValue: "Chaotic Good" },
                        { value: "Chaotic Evil", displayValue: "Chaotic Evil" },
                        { value: "Chaotic Neutral", displayValue: "Chaotic Neutral" },
                        { value: "Lawful Good", displayValue: "Lawful Good" },
                        { value: "Lawful Evil", displayValue: "Lawful Evil" },
                        { value: "Lawful Neutral", displayValue: "Lawful Neutral" },
                        { value: "Neutral Good", displayValue: "Neutral Good" },
                        { value: "Neutral Evil", displayValue: "Neutral Evil" },
                        { value: "True Neutral", displayValue: "True Neutral" }
                    ]
                },
                value: ''
            },


        },
        // ***************************************************equipment states******************
        equipmentOptions: {
            mainWeapon: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        { id: 1, displayValue: "Main Weapon" },
                        { id: 2, displayValue: "----Simple Melee----" },
                        { id: 3, value: "Club", displayValue: "Club" },
                        { id: 4, value: "Dagger", displayValue: "Dagger" },
                        { id: 5, value: "Greatclub", displayValue: "Greatclub" },
                        { id: 6, value: "Handaxe", displayValue: "Handaxe" },
                        { id: 7, value: "Javelin", displayValue: "Javelin" },
                        { id: 8, value: "Light Hammer", displayValue: "Light Hammer" },
                        { id: 9, value: "Mace", displayValue: "Mace" },
                        { id: 10, value: "Quarterstaff", displayValue: "Quarterstaff" },
                        { id: 11, value: "Sickle", displayValue: "Sickle" },
                        { id: 12, value: "Spear", displayValue: "Spear" },
                        { id: 13, value: "Unarmed", displayValue: "Unarmed" },
                        { id: 14, displayValue: "----Simple Ranged----" },
                        { id: 15, value: "Light Crossbow", displayValue: "Light Crossbow" },
                        { id: 16, value: "Dart", displayValue: "Dart" },
                        { id: 17, value: "Shortbow", displayValue: "Shortbow" },
                        { id: 18, value: "Sling", displayValue: "Sling" },
                        { id: 19, displayValue: "----Martial Melee----" },
                        { id: 20, value: "Battleaxe", displayValue: "Battleaxe" },
                        { id: 21, value: "Flail", displayValue: "Flail" },
                        { id: 22, value: "Glaive", displayValue: "Glaive" },
                        { id: 23, value: "Greataxe", displayValue: "Greataxe" },
                        { id: 24, value: "Greatsword", displayValue: "Greatsword" },
                        { id: 25, value: "Halberd", displayValue: "Halberd" },
                        { id: 26, value: "Lance", displayValue: "Lance" },
                        { id: 27, value: "Longsword", displayValue: "Longsword" },
                        { id: 28, value: "Maul", displayValue: "Maul" },
                        { id: 29, value: "Morningstar", displayValue: "Morningstar" },
                        { id: 30, value: "Pike", displayValue: "Pike" },
                        { id: 31, value: "Rapier", displayValue: "Rapier" },
                        { id: 32, value: "Scimitar", displayValue: "Scimitar" },
                        { id: 33, value: "Short Sword", displayValue: "Short Sword" },
                        { id: 34, value: "Trident", displayValue: "Trident" },
                        { id: 35, value: "War Pick", displayValue: "War Pick" },
                        { id: 36, value: "Warhammer", displayValue: "Warhammer" },
                        { id: 37, value: "Whip", displayValue: "Whip" },
                        { id: 38, displayValue: "----Martial Ranged----" },
                        { id: 39, value: "Blowgun", displayValue: "Blowgun" },
                        { id: 40, value: "Hand Crossbow", displayValue: "Hand Crossbow" },
                        { id: 41, value: "Heavy Crossbow", displayValue: "Heavy Crossbow" },
                        { id: 42, value: "Longbow", displayValue: "Longbow" },
                        { id: 43, value: "Net", displayValue: "Net" },
                    ]
                },
                value: ''
            },
            secondWeapon: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        { displayValue: "Secondary Weapon" },
                        { displayValue: "----Simple Melee----" },
                        { value: "Club", displayValue: "Club" },
                        { value: "Dagger", displayValue: "Dagger" },
                        { value: "Greatclub", displayValue: "Greatclub" },
                        { value: "Handaxe", displayValue: "Handaxe" },
                        { value: "Javelin", displayValue: "Javelin" },
                        { value: "Light Hammer", displayValue: "Light Hammer" },
                        { value: "Mace", displayValue: "Mace" },
                        { value: "Quarterstaff", displayValue: "Quarterstaff" },
                        { value: "Sickle", displayValue: "Sickle" },
                        { value: "Spear", displayValue: "Spear" },
                        { value: "Unarmed", displayValue: "Unarmed" },
                        { displayValue: "----Simple Ranged----" },
                        { value: "Light Crossbow", displayValue: "Light Crossbow" },
                        { value: "Dart", displayValue: "Dart" },
                        { value: "Shortbow", displayValue: "Shortbow" },
                        { value: "Sling", displayValue: "Sling" },
                        { displayValue: "----Martial Melee----" },
                        { value: "Battleaxe", displayValue: "Battleaxe" },
                        { value: "Flail", displayValue: "Flail" },
                        { value: "Glaive", displayValue: "Glaive" },
                        { value: "Greataxe", displayValue: "Greataxe" },
                        { value: "Greatsword", displayValue: "Greatsword" },
                        { value: "Halberd", displayValue: "Halberd" },
                        { value: "Lance", displayValue: "Lance" },
                        { value: "Longsword", displayValue: "Longsword" },
                        { value: "Maul", displayValue: "Maul" },
                        { value: "Morningstar", displayValue: "Morningstar" },
                        { value: "Pike", displayValue: "Pike" },
                        { value: "Rapier", displayValue: "Rapier" },
                        { value: "Scimitar", displayValue: "Scimitar" },
                        { value: "Short Sword", displayValue: "Short Sword" },
                        { value: "Trident", displayValue: "Trident" },
                        { value: "War Pick", displayValue: "War Pick" },
                        { value: "Warhammer", displayValue: "Warhammer" },
                        { value: "Whip", displayValue: "Whip" },
                        { displayValue: "----Martial Ranged----" },
                        { value: "Blowgun", displayValue: "Blowgun" },
                        { value: "Hand Crossbow", displayValue: "Hand Crossbow" },
                        { value: "Heavy Crossbow", displayValue: "Heavy Crossbow" },
                        { value: "Longbow", displayValue: "Longbow" },
                        { value: "Net", displayValue: "Net" },
                    ]
                },
                value: ''
            },
            armor: {

                elementType: 'select',
                elementConfig: {
                    options: [
                        { value: "random", displayValue: "Armor" },
                        { displayValue: "----Light Armor----" },
                        { value: "Padded", displayValue: "Padded" },
                        { value: "Leather", displayValue: "Leather" },
                        { value: "Padded Leather", displayValue: "Padded Leather" },
                        { displayValue: "----Medium Armor----" },
                        { value: "Hide", displayValue: "Hide" },
                        { value: "Chain Shirt", displayValue: "Chain Shirt" },
                        { value: "Scale Mail", displayValue: "Scale Mail" },
                        { value: "Breastplate", displayValue: "Breastplate" },
                        { value: "Half Plate", displayValue: "Half Plate" },
                        { displayValue: "----Heavy Armor----" },
                        { value: "Ring Mail", displayValue: "Ring Mail" },
                        { value: "Chain Shirt", displayValue: "Chain Shirt" },
                        { value: "Chain Mail", displayValue: "Chain Mail" },
                        { value: "Splint", displayValue: "Splint" },
                        { value: "Plate", displayValue: "Plate" }
                    ],
                    value: ''
                }
            },
            shield: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        { displayValue: "Shield?" },
                        { value: "True", displayValue: "Yes" },
                        { value: "False", displayValue: "No" },
                    ],
                    value: ''
                }
            },
        },
        // *********************************************abilities states****************************
        abilities: {
            strength: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        { displayValue: "Strength" },


                    ],
                    value: ''
                }
            },
            dexterity: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        { displayValue: "Dexterity" },

                    ],
                    value: ''
                }
            },
            constitution: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        { displayValue: "Constitution" },

                    ],
                    value: ''
                }
            },
            intelligence: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        { displayValue: "Intelligence" },

                    ],
                    value: ''
                }
            },
            wisdom: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        { displayValue: "Wisdom" },

                    ],
                    value: ''
                }
            },
            charisma: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        { displayValue: "Charisma" },

                    ],
                    value: ''
                }
            },
        },
        rollState: [],
        abilitiesArray: [],
        charSheetData: [],

    }
    // *******************************************************************event handlers**********************************
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

    equipmentChangedHandler = (event, inputIdentifier) => {
        //create clone of state for mutating values
        const updatedequipmentOptions = {
            ...this.state.equipmentOptions
        }
        //clone the values insinde base elements
        const updatedFormElement = {
            ...updatedequipmentOptions[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedequipmentOptions[inputIdentifier] = updatedFormElement;
        this.setState({ equipmentOptions: updatedequipmentOptions });
    };

    abilityChangedHandler = (event, inputIdentifier) => {

        //create clone of state for mutating values
        const updatedeAbilities = {
            ...this.state.abilities
        }
        //clone the values insinde base elements
        const updatedAbilityElement = {
            ...updatedeAbilities[inputIdentifier]
        };
        updatedAbilityElement.value = event.target.value;
        updatedeAbilities[inputIdentifier] = updatedAbilityElement;
        this.setState({ abilities: updatedeAbilities });
    };

    abilityRollHandler = (event) => {
        event.preventDefault();
        let rollDisplay = []
        let newStr = [{ displayValue: "Strength" }];
        let newDex = [{ displayValue: "Dexterity" }];
        let newCon = [{ displayValue: "Constitution" }];
        let newInt = [{ displayValue: "Intelligence" }];
        let newWis = [{ displayValue: "Wisdom" }];
        let newCha = [{ displayValue: "Charisma" }];
        let updatedAbilities = [];
        //generate 6 random 3d6 rolls
        for (let i = 0; i < 6; i++) {
            let result = Math.floor((Math.random() * 16) + 3);

            //results for UI only
            rollDisplay.push(result + ", ");

            //create options styled array for slect form
            let a = { value: result, displayValue: result };


            newStr.push(a);
            newDex.push(a);
            newCon.push(a);
            newInt.push(a);
            newWis.push(a);
            newCha.push(a);
        }
        $(".rollResults").html(rollDisplay);


        updatedAbilities = Object.assign({}, this.state.abilities);    //creating copy of object
        updatedAbilities.strength.elementConfig.options = newStr;                        //updating value
        updatedAbilities.dexterity.elementConfig.options = newDex;                        //updating value
        updatedAbilities.constitution.elementConfig.options = newCon;                        //updating value
        updatedAbilities.intelligence.elementConfig.options = newInt;                        //updating value
        updatedAbilities.wisdom.elementConfig.options = newWis;                        //updating value
        updatedAbilities.charisma.elementConfig.options = newCha;                        //updating value
        this.setState({ updatedAbilities });

    };

    componentDidUpdate() {

        console.log("charsheet data", this.state.charSheetData);
    };

    // **************************************************onClick for "generate character sheet"***************************
    createHandler = (event) => {
        event.preventDefault();
        const optionsData = {};
        for (let formElementIdentifier in this.state.characterOptions) {
            optionsData[formElementIdentifier] = this.state.characterOptions[formElementIdentifier].value;
        }
        const equipmentData = {};
        for (let formElementIdentifier in this.state.equipmentOptions) {
            equipmentData[formElementIdentifier] = this.state.equipmentOptions[formElementIdentifier].value;
        }
        const abilitiesData = {};
        for (let formElementIdentifier in this.state.abilities) {
            abilitiesData[formElementIdentifier] = this.state.abilities[formElementIdentifier].value;
        }

        const charSheet = {
            optionsData, equipmentData, abilitiesData
        }
        this.setState({ charSheetData: charSheet });
    }



    render() {
        //************************************************main character options creation*************************************** */
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

        //*****************equipment options creation********************************************* */
        const equipmentOptionsArray = [];
        for (let key in this.state.equipmentOptions) {
            equipmentOptionsArray.push({
                id: key,
                config: this.state.equipmentOptions[key]
            });
        }

        let equipmentForm = (
            <form>

                {equipmentOptionsArray.map(formElement => (
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        changed={(event) => this.equipmentChangedHandler(event, formElement.id)} />
                ))}
            </form>
        );

        // *******************************Ability Roller**********************************************
        const abilitiesArray = [];
        for (let key in this.state.abilities) {
            abilitiesArray.push({
                id: key,
                config: this.state.abilities[key]
            });
        }

        let abilityRoll = (
            <Jumbotron>
                <Button name={this.state.buttons.name} clicked={this.abilityRollHandler}></Button>
                <p className="rollResults"></p>
                <form>
                    {abilitiesArray.map(formElement => (
                        <Input
                            key={formElement.id}
                            elementType={formElement.config.elementType}
                            elementConfig={formElement.config.elementConfig}
                            value={formElement.config.value}
                            changed={(event) => this.abilityChangedHandler(event, formElement.id)} />
                    ))}
                </form>

            </Jumbotron>
        )
        // *******************************character Sheet Generation***************
        const characterSheetArray = [];
        for (let key in this.state.charSheetData) {
            characterSheetArray.push({
                id: key,
                values: this.state.charSheetData[key]
            });
        }



        let characterSheet = (
            <Jumbotron ref="componentRef" className="contain">
              
                 < Example {...characterSheetArray} />
            </Jumbotron>
        )

        return (
            <div className="character">
                <NavBar />
                <h1>Character Generator</h1>
                {form}
                {abilityRoll}
                {equipmentForm}
                <Button name={this.state.button.name} clicked={this.createHandler} />
              
                {characterSheet}
            </div>


        )
    }
};

export default AdvCharacter;