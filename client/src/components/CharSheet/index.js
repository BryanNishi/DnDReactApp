import React, { Component } from "react";
import CharSheetPDF from '../../assets/images/CharacterSheet.pdf'
import './CharSheet.css'



class CharSheet extends Component {

    render() {
        return (
            <div>
                <h1>Character Sheets</h1>
                <iframe src={CharSheetPDF} width="1000" height="500" className="Char_Sheet" title="Character Sheet" />
            </div>
        );
    }
}
export default CharSheet;