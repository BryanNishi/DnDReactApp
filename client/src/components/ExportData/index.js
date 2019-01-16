import React from "react";



const ExportData = (props) => {

        console.log("NEW options", props[0]);
        console.log("NEW Equipment", props[1]);
        console.log("NEW abilites", props[2]);

        return (
            <table className="characterDisplay">
                <thead>
                    <th >Character Info</th>
                    <th >Abilities</th>
                    <th >Equipment</th>
                </thead>
                <tbody>
                    <tr>
                        <td>{props[0]? props[0].values.alignment:""}</td>
                        <td>{props[0]? props[0].values.characterName:""}</td>
                        <td>sdfzfgsd fg 3</td>
                    </tr>
                    <tr>
                        <td>data 1</td>
                        <td>dadfgvhfta 2</td>
                        <td>datdva 3</td>
                    </tr>
                    <tr>
                        <td>data 1</td>
                        <td>data 2</td>
                        <td>data 3</td>
                    </tr>
                </tbody>
            </table>
        );
    }


export default ExportData;
