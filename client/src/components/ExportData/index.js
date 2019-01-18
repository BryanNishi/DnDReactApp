import React from "react";
import "./export.css";


const ExportData = (props) => {
let options=props[0];
let equipment=props[1];
let abilites=props[2];
    console.log("NEW options", options);
    console.log("NEW Equipment", equipment);
    console.log("NEW abilites", abilites);

//     switch (props[0].values.race) {
//         case ('Dragonborn'):
//         props.raceStats = {}
//         break;
//         default:
//         props.raceStats = {}

// }


    return (

        <table className="characterDisplay">

            <tbody>
                <th>
                    {props[0] ? props[0].values.characterName : ""}
                </th>
                <tr>
                    <td> <h5><u>Race:</u></h5>{props[0] ? props[0].values.race : ""}</td>
                    <td> <h5><u>Class:</u></h5>{props[0] ? props[0].values.classes : ""}</td>
                    <td> <h5><u>Level:</u></h5>{props[0] ? props[0].values.level : ""}</td>
                    <td> <h5><u>Player Name:</u></h5>{props[0] ? props[0].values.playerName : ""}</td>
                </tr>
                <br></br>
                <tr></tr>
                <th>
                    Abilities
                </th>
                <br></br>
                <tr>
                    <td> <h5><u>Strength:</u></h5>{props[2] ? props[2].values.strength : ""}</td>
                    <td> <h5><u>Dexterity:</u></h5>{props[2] ? props[2].values.dexterity : ""}</td>
                    <td> <h5><u>Constitution:</u></h5>{props[2] ? props[2].values.constitution : ""}</td>
                    <td> <h5><u>Intelligence:</u></h5>{props[2] ? props[2].values.intelligence : ""}</td>
                    <td> <h5><u>Wisdom:</u></h5>{props[2] ? props[2].values.wisdom : ""}</td>
                    <td> <h5><u>Charisma:</u></h5>{props[2] ? props[2].values.charisma : ""}</td>
                </tr>
                <br></br>
                <tr>
                    <td> <h5><u>Str Modifier:</u></h5>{props[2] ? props[2].values.strength : ""}</td>
                    <td> <h5><u>Dex Modifier:</u></h5>{props[2] ? props[2].values.dexterity : ""}</td>
                    <td> <h5><u>Con Modifier:</u></h5>{props[2] ? props[2].values.constitution : ""}</td>
                    <td> <h5><u>Int Modifier:</u></h5>{props[2] ? props[2].values.intelligence : ""}</td>
                    <td> <h5><u>Wis Modifier:</u></h5>{props[2] ? props[2].values.wisdom : ""}</td>
                    <td> <h5><u>Cha Modifier:</u></h5>{props[2] ? props[2].values.charisma : ""}</td>
                </tr>
                <br></br>
                <tr>
                    <td> <h5><u>AC:</u></h5>{props[2] ? props[2].values.strength : ""}</td>
                    <td> <h5><u>Initative:</u></h5>{props[2] ? props[2].values.dexterity : ""}</td>
                    <td> <h5><u>Speed:</u></h5>{props[2] ? props[2].values.constitution : ""}</td>
                    <td> <h5><u>Hit Points:</u></h5>{props[2] ? props[2].values.intelligence : ""}</td>
                    <td> <h5><u>Perception:</u></h5>{props[2] ? props[2].values.intelligence : ""}</td>
                </tr>
                <br></br>
                <tr>
                    <td> <h5><u>Saving Throws:</u></h5>{props[2] ? props[2].values.wisdom : ""}</td>
                    <td> <h5><u>Skills:</u></h5>{props[2] ? props[2].values.charisma : ""}</td>
                </tr>
                <br></br>
                <tr></tr>
                <th>
                    Character Info
                </th>
                <br></br>

                <br></br>
                <tr>
                    <td> <h5><u>Background:</u></h5>{props[0] ? props[0].values.background : ""}</td>
                    <td> <h5><u>Alignment:</u></h5>{props[0] ? props[0].values.alignment : ""}</td>
                    <td> <h5><u>Age:</u></h5>{props[0] ? props[0].values.age : ""}</td>
                    <td> <h5><u>Gender:</u></h5>{props[0] ? props[0].values.gender : ""}</td>
                    <td> <h5><u>Height:</u></h5>{props[0] ? props[0].values.height : ""}</td>
                    <td> <h5><u>Weight:</u></h5>{props[0] ? props[0].values.weight : ""}</td>
                </tr>
                <tr>
                    <td> <h5><u>Hair:</u></h5>{props[0] ? props[0].values.hair : ""}</td>
                    <td> <h5><u>Eyes:</u></h5>{props[0] ? props[0].values.eye : ""}</td>
                    <td> <h5><u>Skin:</u></h5>{props[0] ? props[0].values.skin : ""}</td>
                    <td> <h5><u>Traits:</u></h5>{props[0] ? props[0].values.traits : ""}</td>
                    <td> <h5><u>Flaws:</u></h5>{props[0] ? props[0].values.flaws : ""}</td>
                </tr>
                <br></br>
                <tr></tr>

                <th>
                    Equipment
                </th>
                <br></br>
                <tr>
                    <td> <h5><u>Main Weapon:</u></h5>{props[1] ? props[1].values.mainWeapon : ""}</td>
                    <td> <h5><u>Second Weapon:</u></h5>{props[1] ? props[1].values.secondWeapon : ""}</td>
                    <td> <h5><u>Armor:</u></h5>{props[1] ? props[1].values.armor : ""}</td>
                    <td> <h5><u>Shield:</u></h5>{props[1] ? props[1].values.shield : ""}</td>
                </tr>
                <br></br>
            </tbody>
        </table>

    );
}


export default ExportData;
