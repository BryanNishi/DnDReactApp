import React, { Component } from "react";
import { Jumbotron, Row, Col } from 'reactstrap';
import Input from "../../components/Input/input";
import $ from 'jquery';
import "./equipment.css";

class Equipment extends Component {
    state = {
        buttons: {
            name: "Roll Ability Scores",
        },
        weaponOptions1: {
            weapons: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        { value: "random", displayValue: "Weapon Slot" },
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
        },
        weaponOptions2: {
            weapons: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        { value: "random", displayValue: "Weapon Slot" },
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
        },
        armorOptions: {
            armor: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        { value: "random", displayValue: "Armor Slot" },
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
        },
        shieldOptions: {
            shield: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        { displayValue: "Shield Slot" },
                        { value: "False", displayValue: "False" },
                        { value: "True", displayValue: "True" },

                    ],
                    value: ''
                }
            },
        },
        chosenWeapon1: '',
        chosenWeapon2: '',
        chosenArmor: '',
        shield: false

    }
    componentDidUpdate() {

        console.log("chosen weapon 1", this.state.chosenWeapon1)

        console.log("chosen weapon 2", this.state.chosenWeapon2)

        console.log("chosen armor", this.state.chosenArmor)

        console.log("shield", this.state.shield)

    };

    weaponChangedHandler1 = (event, inputIdentifier) => {
        //create clone of state for mutating values
        const updatedweaponOptions1 = {
            ...this.state.weaponOptions1
        };
        //clone the values insinde base elements
        const updatedFormElement = {
            ...updatedweaponOptions1[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedweaponOptions1[inputIdentifier] = updatedFormElement;
        this.setState({ weaponOptions1: updatedweaponOptions1 });

        //Update state for chosen weapon for easy character sheet creation
        const weapon1 = event.target.value;
        this.setState({ chosenWeapon1: weapon1 })


    };

    weaponChangedHandler2 = (event, inputIdentifier) => {

        //create clone of state for mutating values
        const updatedweaponOptions2 = {
            ...this.state.weaponOptions2
        }
        //clone the values insinde base elements
        const updatedFormElement = {
            ...updatedweaponOptions2[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedweaponOptions2[inputIdentifier] = updatedFormElement;
        this.setState({ weaponOptions2: updatedweaponOptions2 });

        //Update state for chosen weapon for easy character sheet creation
        const weapon2 = event.target.value;
        this.setState({ chosenWeapon2: weapon2 })

    };

    armorChangedHandler = (event, inputIdentifier) => {

        //create clone of state for mutating values
        const updatedarmorOptions = {
            ...this.state.armorOptions
        }
        //clone the values insinde base elements
        const updatedFormElement = {
            ...updatedarmorOptions[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedarmorOptions[inputIdentifier] = updatedFormElement;
        this.setState({ armorOptions: updatedarmorOptions });

        //Update state for chosen armor for easy character sheet creation
        const armor = event.target.value;
        this.setState({ chosenArmor: armor })
    };

    shieldChangedHandler = (event, inputIdentifier) => {

        //create clone of state for mutating values
        const updatedshieldOptions = {
            ...this.state.shieldOptions
        }
        //clone the values insinde base elements
        const updatedFormElement = {
            ...updatedshieldOptions[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedshieldOptions[inputIdentifier] = updatedFormElement;
        this.setState({ shieldOptions: updatedshieldOptions });

        //Update state for chosen armor for easy character sheet creation
        const shieldBoolean = event.target.value;
        this.setState({ shield: shieldBoolean })
    };



    render() {

        const weaponsArray1 = [];
        for (let key in this.state.weaponOptions1) {
            weaponsArray1.push({
                id: key,
                config: this.state.weaponOptions1[key]
            });
        }
        // console.log("weapons1",weaponsArray1[0].config.elementConfig.options);
        let weaponsForm1 = (
            <form className="weapons1">

                {weaponsArray1.map(formElement => (
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        changed={(event) => this.weaponChangedHandler1(event, formElement.id)} />
                ))}
            </form>
        );

        const weaponsArray2 = [];
        for (let key in this.state.weaponOptions2) {
            weaponsArray2.push({
                id: key,
                config: this.state.weaponOptions2[key]
            });
        }

        let weaponsForm2 = (
            <form>

                {weaponsArray2.map(formElement => (
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        changed={(event) => this.weaponChangedHandler2(event, formElement.id)} />
                ))}
            </form>
        );

        const armorArray = [];
        for (let key in this.state.armorOptions) {
            armorArray.push({
                id: key,
                config: this.state.armorOptions[key]
            });
        }

        let armorForm = (
            <form>

                {armorArray.map(formElement => (
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        changed={(event) => this.armorChangedHandler(event, formElement.id)} />
                ))}
            </form>
        );

        const shieldArray = [];
        for (let key in this.state.shieldOptions) {
            shieldArray.push({
                id: key,
                config: this.state.shieldOptions[key]
            });
        }

        let shieldForm = (
            <form>

                {shieldArray.map(formElement => (
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        changed={(event) => this.shieldChangedHandler(event, formElement.id)} />
                ))}
            </form>
        );



        return (
            <Jumbotron className="container">
                <Row id="equipmentList">
                    <Col md="3">
                        <div className="form-group">
                            <label>First Weapon Slot</label>
                            {weaponsForm1}
                        </div>
                    </Col>
                    <Col md="3">
                        <div className="form-group">
                            <label>Second Weapon Slot</label>
                            {weaponsForm2}
                        </div>
                    </Col>
                    <Col md="3">
                        <div className="form-group">
                            <label>Armor Slot</label>
                            {armorForm}
                        </div>
                    </Col>
                    <Col md="3">
                        <div className="form-group">
                            <label>Shield?</label>
                            {shieldForm}
                        </div>
                    </Col>
                </Row>
            </Jumbotron>
        )
    }
}
export default Equipment;