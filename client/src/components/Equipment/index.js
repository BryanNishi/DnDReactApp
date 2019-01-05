import React, { Component } from "react";
import { Jumbotron } from 'reactstrap';
import Input from "../../components/Input/input";
import $ from 'jquery';
import "./equipment.css";

class Equipment extends Component {
    state = {
        buttons: {
            name: "Roll Ability Scores",
        },
        
        weapons:{
            simpleMelee: ["Club", "Dagger", "Greatclub", "Handaxe", "Javelin", "Light Hammer", "Mace", "Quarterstaff", "Sickle", "Spear", "Unarmed"],
            simpleRanged: ["Light Crossbow", "Dart", "Shortbow", "Sling"],
            martialMelle: ["Battleaxe", "Flail", "Glaive", "Greataxe", "Greatsword", "Halberd", "Lance", "Longsword", "Maul", "Morningstart", "Pike", "Rapier", "Scimitar", "Short Sword", "Trident", "War Pick", "Warhammer", "Whip"],
            martialRanged: ["Blowgun", "Hand Crossbow", "Heavy Crossbow", "Longbow", "Net"]
        },
        armor: {
            light:["Padded", "Leather", "Padded Leather"],
            medium: ["Hide", "Chain Shirt", "Scale Mail", "Breastplate", "Half Plate"],
            heavy:["Ring Mail", "Chain Mail", "Splint", "Plate"],
            shield: "Shield"
        },
        characterEquipment:{
            weapons: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        { value: "random", displayValue: "Weapon Slot (Leave Blank for Random)" },
                        { displayValue: "--Simple Melee--" },
                        { value: "Club", displayValue: "Club" },
                        { value: "Dagger", displayValue: "Dagger" },
                        { value: "Greatclub", displayValue: "Greatclub" },
                        { value: "Handaxe", displayValue: "Handaxe" },
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
        }
    }
    componentDidMount() {

        let equipment=[];

        for (let i = 0; i < 6; i++) {
            var result = Math.floor((Math.random() * 18) + 1);
            equipment.push(result);
            var a = $("<option value=" + result + ">" + result + "</option>");

            $(".abilityScore").append(a);
            
        }
        var b = $("<option selected>Choose Value</option>");
        $(".abilityScore").prepend(b);
    
    };

    render() {

        const weaponsArray = [];
        for (let key in this.state.weapons) {
            weaponsArray.push({
                id: key,
                config: this.state.weapons[key]
            });
        }

        let weaponsForm = (
            <form>

                {weaponsArray.map(formElement => (
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)} />
                ))}
            </form>
        );
       

        return (
            <Jumbotron className="container">
                <div className="row" id="equipmentList">
                    <div className="form-group">
                        <label>First Weapon Slot</label>
                        <select className="form-control">
                            <option selected>Choose Item</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Second Weapon Slot</label>
                        <select className="form-control">
                            <option selected>Choose Item</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Third Weapon Slot</label>
                        <select className="form-control">
                            <option selected>Choose Item</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Armor Slot</label>
                        <select className="form-control">
                            <option selected>Choose Item</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Shield Slot</label>
                        <select className="form-control">
                            <option selected>Choose Item</option>
                        </select>
                    </div>

                </div>
            </Jumbotron>
        )
    }
}
export default Equipment;