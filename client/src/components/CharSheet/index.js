import React, { Component } from "react";
import CharSheetPDF from '../../assets/images/CharacterSheet.pdf'
import './CharSheet.css'



class CharSheet extends Component {

    render() {
        return (
            <div>
                <iframe src={CharSheetPDF} width="1200" height="600" className="charSheet" title="Character Sheet" />
            </div>
        );
    }
}
export default CharSheet;